#include <jni.h>
#include "react-native-rust-provider.h"

extern "C"
JNIEXPORT jstring JNICALL
Java_com_rustprovider_RustProviderModule_nativeExecute(JNIEnv *env, jclass type, jstring cmd) {
    const char *native_cmd = env->GetStringUTFChars(cmd, JNI_FALSE);
    if (native_cmd == nullptr) {
        return nullptr;
    }
    const char *res = rustprovider::execute(native_cmd);
    env->ReleaseStringUTFChars(cmd, native_cmd);

    return env->NewStringUTF(res);
}
