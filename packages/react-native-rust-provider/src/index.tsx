const RustProvider = require('./NativeRustProvider').default;

export function execute(cmd: string): string {
  return RustProvider.execute(cmd);
}
