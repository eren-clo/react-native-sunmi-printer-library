import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    connect(): Promise<boolean>;
    disconnect(): Promise<void>;
    printerInit(): Promise<boolean>;
    printerSelfChecking(): Promise<boolean>;
    getPrinterInfo(): Promise<{
        serialNumber: string;
        printerVersion: string;
        serviceVersion: string;
        printerModal: string;
        paperWidth: string;
    }>;
    getPrinterSerialNo(): Promise<string>;
    getPrinterVersion(): Promise<string>;
    getServiceVersion(): Promise<string>;
    getPrinterModal(): Promise<string>;
    getPrinterPaper(): Promise<string>;
    getPrintedLength(): Promise<string>;
    updatePrinterState(): Promise<number>;
    sendRAWData(base64: string): Promise<void>;
    setTextStyle(key: string, value: boolean): Promise<boolean>;
    setParagraphStyle(key: string, value: number): Promise<boolean>;
    setAlignment(alignment: string): Promise<void>;
    setFontName(fontName: string): Promise<void>;
    setBold(isBold: boolean): Promise<void>;
    setFontSize(fontSize: number): Promise<void>;
    printText(text: string): Promise<void>;
    printTextWithFont(text: string, typeface: string, fontSize: number): Promise<void>;
    printOriginalText(text: string): Promise<void>;
    printColumnsText(texts: string[], widths: number[], alignments: string[]): Promise<void>;
    printColumnsString(texts: string[], widths: number[], alignments: string[]): Promise<void>;
    printBarcode(text: string, symbology: string, height: number, width: number, textPosition: string): Promise<void>;
    printQRCode(text: string, moduleSize: number, errorLevel: string): Promise<void>;
    print2DCode(text: string, symbology: number, moduleSize: number, errorLevel: number): Promise<void>;
    lineWrap(count: number): Promise<void>;
    cutPaper(): Promise<void>;
    getCutPaperTimes(): Promise<number>;
    printBitmapBase64(base64: string, pixelWidth: number): Promise<void>;
    printBitmapBase64Custom(base64: string, pixelWidth: number, type: number): Promise<void>;
    enterPrinterBuffer(clear: boolean): Promise<void>;
    exitPrinterBuffer(commit: boolean): Promise<void>;
    commitPrinterBuffer(): Promise<void>;
    labelLocate(): Promise<void>;
    labelOutput(): Promise<void>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeSunmiPrinterLibrary.d.ts.map