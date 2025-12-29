#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTBridgeModule.h>

@protocol NativeSunmiScannerLibrarySpec <NSObject>

- (void)scan:(RCTPromiseResolveBlock)resolve
      reject:(RCTPromiseRejectBlock)reject;

+ (NSString *)moduleName;

@end

#endif
