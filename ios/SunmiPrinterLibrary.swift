import Foundation

#if RCT_NEW_ARCH_ENABLED
import React

@objc(SunmiPrinterLibraryModule)
class SunmiPrinterLibraryModule: NSObject, NativeSunmiPrinterLibrarySpec {
  static func moduleName() -> String! {
    return "SunmiPrinterLibrary"
  }
  
  func connect(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(false)
  }
  
  func disconnect(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printerInit(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(false)
  }
  
  func printerSelfChecking(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(false)
  }
  
  func getPrinterInfo(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve([
      "serialNumber": "",
      "printerVersion": "",
      "serviceVersion": "",
      "printerModal": "",
      "paperWidth": ""
    ])
  }
  
  func getPrinterSerialNo(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func getPrinterVersion(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func getServiceVersion(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func getPrinterModal(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func getPrinterPaper(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func getPrintedLength(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve("")
  }
  
  func updatePrinterState(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(0)
  }
  
  func sendRAWData(_ base64: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func setTextStyle(_ key: String, value: Bool, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(false)
  }
  
  func setParagraphStyle(_ key: String, value: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(false)
  }
  
  func setAlignment(_ alignment: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func setFontName(_ fontName: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func setBold(_ isBold: Bool, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func setFontSize(_ fontSize: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printText(_ text: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printTextWithFont(_ text: String, typeface: String, fontSize: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printOriginalText(_ text: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printColumnsText(_ texts: [String], widths: [Double], alignments: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printColumnsString(_ texts: [String], widths: [Double], alignments: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printBarcode(_ text: String, symbology: String, height: Double, width: Double, textPosition: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printQRCode(_ text: String, moduleSize: Double, errorLevel: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func print2DCode(_ text: String, symbology: Double, moduleSize: Double, errorLevel: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func lineWrap(_ count: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func cutPaper(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func getCutPaperTimes(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(0)
  }
  
  func printBitmapBase64(_ base64: String, pixelWidth: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func printBitmapBase64Custom(_ base64: String, pixelWidth: Double, type: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func enterPrinterBuffer(_ clear: Bool, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func exitPrinterBuffer(_ commit: Bool, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func commitPrinterBuffer(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func labelLocate(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
  
  func labelOutput(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(nil)
  }
}
#else
@objc(SunmiPrinterLibrary)
class SunmiPrinterLibrary: NSObject {
}
#endif
