#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTBridgeModule.h>

@protocol NativeSunmiPrinterLibrarySpec <NSObject>

- (void)connect:(RCTPromiseResolveBlock)resolve
         reject:(RCTPromiseRejectBlock)reject;

- (void)disconnect:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject;

- (void)printerInit:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)printerSelfChecking:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject;

- (void)getPrinterInfo:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject;

- (void)getPrinterSerialNo:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject;

- (void)getPrinterVersion:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)getServiceVersion:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)getPrinterModal:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject;

- (void)getPrinterPaper:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject;

- (void)getPrintedLength:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject;

- (void)updatePrinterState:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject;

- (void)sendRAWData:(NSString *)base64
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)setTextStyle:(NSString *)key
               value:(BOOL)value
             resolve:(RCTPromiseResolveBlock)resolve
              reject:(RCTPromiseRejectBlock)reject;

- (void)setParagraphStyle:(NSString *)key
                    value:(double)value
                  resolve:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)setAlignment:(NSString *)alignment
             resolve:(RCTPromiseResolveBlock)resolve
              reject:(RCTPromiseRejectBlock)reject;

- (void)setFontName:(NSString *)fontName
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)setBold:(BOOL)isBold
        resolve:(RCTPromiseResolveBlock)resolve
         reject:(RCTPromiseRejectBlock)reject;

- (void)setFontSize:(double)fontSize
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)printText:(NSString *)text
          resolve:(RCTPromiseResolveBlock)resolve
           reject:(RCTPromiseRejectBlock)reject;

- (void)printTextWithFont:(NSString *)text
                 typeface:(NSString *)typeface
                 fontSize:(double)fontSize
                  resolve:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)printOriginalText:(NSString *)text
                  resolve:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)printColumnsText:(NSArray<NSString *> *)texts
                  widths:(NSArray<NSNumber *> *)widths
              alignments:(NSArray<NSString *> *)alignments
                 resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject;

- (void)printColumnsString:(NSArray<NSString *> *)texts
                    widths:(NSArray<NSNumber *> *)widths
                alignments:(NSArray<NSString *> *)alignments
                   resolve:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject;

- (void)printBarcode:(NSString *)text
           symbology:(NSString *)symbology
              height:(double)height
               width:(double)width
        textPosition:(NSString *)textPosition
             resolve:(RCTPromiseResolveBlock)resolve
              reject:(RCTPromiseRejectBlock)reject;

- (void)printQRCode:(NSString *)text
         moduleSize:(double)moduleSize
         errorLevel:(NSString *)errorLevel
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)print2DCode:(NSString *)text
          symbology:(double)symbology
         moduleSize:(double)moduleSize
         errorLevel:(double)errorLevel
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)lineWrap:(double)count
         resolve:(RCTPromiseResolveBlock)resolve
          reject:(RCTPromiseRejectBlock)reject;

- (void)cutPaper:(RCTPromiseResolveBlock)resolve
          reject:(RCTPromiseRejectBlock)reject;

- (void)getCutPaperTimes:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject;

- (void)printBitmapBase64:(NSString *)base64
               pixelWidth:(double)pixelWidth
                  resolve:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)printBitmapBase64Custom:(NSString *)base64
                     pixelWidth:(double)pixelWidth
                           type:(double)type
                        resolve:(RCTPromiseResolveBlock)resolve
                         reject:(RCTPromiseRejectBlock)reject;

- (void)enterPrinterBuffer:(BOOL)clear
                   resolve:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject;

- (void)exitPrinterBuffer:(BOOL)commit
                  resolve:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject;

- (void)commitPrinterBuffer:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject;

- (void)labelLocate:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

- (void)labelOutput:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

+ (NSString *)moduleName;

@end

#endif
