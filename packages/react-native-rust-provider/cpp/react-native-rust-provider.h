#ifndef RUSTPROVIDER_H
#define RUSTPROVIDER_H

extern "C" const char *rust_execute(const char*);

namespace rustprovider {
  const char* execute(const char *cmd);
}

#endif /* RUSTPROVIDER_H */
