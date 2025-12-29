#import <React/RCTBridgeModule.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTTurboModule.h>

@interface RCT_EXTERN_REMAP_MODULE(SunmiPrinterLibrary, SunmiPrinterLibraryModule, NSObject)
#else
@interface RCT_EXTERN_MODULE(SunmiPrinterLibrary, NSObject)
#endif

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
