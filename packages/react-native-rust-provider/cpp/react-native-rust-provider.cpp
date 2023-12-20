#include "react-native-rust-provider.h"

namespace rustprovider {
	const char* execute(const char *cmd) {
		return rust_execute(cmd);
	}
}
