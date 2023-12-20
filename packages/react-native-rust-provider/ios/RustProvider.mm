#import "RustProvider.h"

@implementation RustProvider
RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (NSString *)execute:(NSString*)cmd {
    NSString *result = @(rustprovider::execute([cmd UTF8String]));
    return result;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRustProviderSpecJSI>(params);
}
#endif

@end
