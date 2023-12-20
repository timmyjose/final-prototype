#ifdef __cplusplus
#import "react-native-rust-provider.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRustProviderSpec.h"

@interface RustProvider : NSObject <NativeRustProviderSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RustProvider : NSObject <RCTBridgeModule>
#endif

@end
