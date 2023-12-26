use serde::{Deserialize, Serialize};
use std::ffi::{c_char, CStr, CString};

#[derive(Deserialize)]
pub enum Command {
    Concat { s1: String, s2: String },
}

#[derive(Serialize)]
pub struct CommandResult {
    pub res: String,
    pub operation: String,
}

#[no_mangle]
pub extern "C" fn rust_execute(raw_cmd: *const c_char) -> *const c_char {
    let cmd = unsafe {
        let cmd_str = CStr::from_ptr(raw_cmd).to_str().unwrap();
        let local_cmd: Command = serde_json::from_str(cmd_str)
            .expect("failed to extract Command from raw command string");
        local_cmd
    };

    match execute_cmd(cmd) {
        Ok(res) => {
            let res_str =
                serde_json::to_string(&res).expect("failed to serialise command execution result");
            CString::new(res_str.as_bytes()).unwrap().into_raw()
        }
        Err(e) => panic!("Command execution failed: {e:?}"),
    }
}

fn execute_cmd(cmd: Command) -> Result<CommandResult, Box<dyn std::error::Error>> {
    Ok(match cmd {
        Command::Concat { s1, s2 } => CommandResult {
            res: s1 + &s2,
            operation: "concatenation".into(),
        },
    })
}
