package com.rustprovider;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RustProviderModule.NAME)
public class RustProviderModule extends NativeRustProviderSpec {
  public static final String NAME = "RustProvider";

  public RustProviderModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("react-native-rust-provider");
  }

  private static native String nativeExecute(String cmd);

  @Override
  public String execute(String cmd) {
    return nativeExecute(cmd);
  }
}
