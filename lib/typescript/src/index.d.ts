export type TextStyle = 'doubleWidth' | 'doubleHeight' | 'bold' | 'underline' | 'antiWhite' | 'strikethrough' | 'italic' | 'invert';
export type ParagraphStyle = 'textRightSpacing' | 'relativePosition' | 'absolutePosition' | 'lineSpacing' | 'leftSpacing' | 'strikethroughStyle';
export type Alignment = 'left' | 'center' | 'right';
export type Typeface = 'default';
export type Barcode1DSymbology = 'UPC-A' | 'UPC-E' | 'JAN13(EAN13)' | 'JAN8(EAN8)' | 'CODE39' | 'ITF' | 'CODABAR' | 'CODE93' | 'CODE128';
export type TextPosition = 'none' | 'textAboveBarcode' | 'textUnderBarcode' | 'textAboveAndUnderBarcode';
export type QRErrorLevel = 'low' | 'middle' | 'quartile' | 'high';
export type PaperWidth = '58mm' | '80mm';
export declare const MaxPixelWidth: {
    [width in PaperWidth]: number;
};
export declare const defaultFontSize = 24;
export declare const EventType: {
    onScanSuccess: string;
    onScanFailed: string;
};
type NativePrinterInfo = {
    serialNumber: string;
    printerVersion: string;
    serviceVersion: string;
    printerModal: string;
    paperWidth: string;
};
export type PrinterInfo = NativePrinterInfo & {
    paperWidth: PaperWidth;
    pixelWidth: number;
};
export type PrintImageType = 'binary' | 'grayscale';
export type BarType = 'line' | 'double' | 'dots' | 'wave' | 'plus' | 'star';
/**
 * prepare
 *
 * @note
 * It must call to connect and initialize printer. If re-call it, reset text stylings.
 *
 * @example
 * await SunmiPrinterLibrary.prepare()
 */
export declare const prepare: () => Promise<boolean>;
/**
 * reset printer style
 *
 * @example
 * await SunmiPrinterLibrary.resetPrinterStyle()
 */
export declare const resetPrinterStyle: () => Promise<boolean>;
/**
 * Print self-inspection
 */
export declare const printSelfChecking: () => Promise<boolean>;
/**
 * Get the print length of a printhead
 */
export declare const getPrintedLength: () => Promise<string>;
/**
 * Get the latest status of a printer
 */
export declare const getPrinterState: () => Promise<{
    value: number;
    description: string;
}>;
/**
 * Set printer style
 * @param {TextStyle} key - "doubleWidth" | "doubleHeight" | "bold" | "underline" | "antiWhite" | "strikethrough" | "italic" | "invert"
 * @param {boolean} value true | false
 */
export declare const setTextStyle: (style: TextStyle, value: boolean) => Promise<boolean>;
/**
 * Set printer style
 * @param {ParagraphStyle} key - "textRightSpacing" | "relativePosition" | "absolutePosition" | "lineSpacing" | "leftSpacing" | "strikethroughStyle"
 * @param {number} value integer
 */
export declare const setParagraphStyle: (style: ParagraphStyle, value: number) => Promise<boolean>;
/**
 * Set alignment
 *
 * @param {Alignment} alignment "left" | "center" | "right"
 */
export declare const setAlignment: (alignment: Alignment) => Promise<void>;
/**
 * Set font size
 *
 * @param {number} fontSize
 */
export declare const setFontSize: (fontSize: number) => Promise<void>;
/**
 * Set default font size
 */
export declare const setDefaultFontSize: () => Promise<void>;
/**
 * Print text
 *
 * @param {string} text
 */
export declare const printText: (text: string) => Promise<void>;
/**
 * Print text in a specified typeface and size
 *
 * @param {string} text
 * @param {Typeface} typeface "default" only (unavailable for now)
 * @param {number} fontSize
 */
export declare const printTextWithFont: (text: string, typeface: Typeface, fontSize: number) => Promise<void>;
/**
 * Print Vector Font
 *
 * @note
 * output characters are in the same width of vector fonts, which means that they are not monospace.
 *
 * @example
 * printOriginalText('κρχκμνκλρκνκνμρτυφ')
 */
export declare const printOriginalText: (text: string) => Promise<void>;
/**
 * Print a row of a table
 *
 * @note
 * - This may not supports width and alignment for each column. Its width means text length.
 * - This does not support Arabic Characters. If you print it, use printColumnsString.
 *
 * @example
 * SunmiPrinterLibrary.printColumnsText(
 *      ['apple', 'orange', 'banana'],
 *      [8, 8, 8],
 *      ['center', 'center', 'center'])
 */
export declare const printColumnsText: (texts: string[], widths: number[], alignments: Alignment[]) => Promise<void>;
/**
 * Print a row of a table
 *
 * @note
 * This supports width and alignment for each column.
 *
 * @example
 * SunmiPrinterLibrary.printColumnsString(
 *      ['apple', 'orange', 'banana'],
 *      [8, 8, 8],
 *      ['center', 'center', 'center'])
 */
export declare const printColumnsString: (texts: string[], widths: number[], alignments: Alignment[]) => Promise<void>;
/**
 * Print 1D BarCode
 *
 * @note
 * Text pattern (e.g. length, character) is determined by symbology.
 *
 * @description
 * - code39
 *    - Numbers within 13 digits can be printed
 * - code93
 *    - Numbers within 17 digits can be printed
 * - JAN8(EAN8)
 *    - 8-digit numbers (the last digit is for parity check). The effective length is 8 digits (numbers).
 * - JAN13(EAN13)
 *    - The effective length is 13 digits, and the last digit is for parity check.
 * - ITF
 *    - Number (even number of digits) within 14 digits is required.
 * - Codabar
 *    - Numbers within 0-9 plus 6 special characters. Maximum18 digitscan be printed. UPC-E 8-digit number (the last digit is for parity check)
 * - UPC-A
 *    - 12-digit number (the last digit is for parity check)
 * - code128
 *    - Code128 can be divided into subset A, B and C:
 *    - 128A: numbers, upper-case letters, and control characters, etc.
 *    - 128B: numbers, upper- and lower-case letters and special character.
 *    - 128C: numbers only. It must have an even number of digits (if it has an odd number of digits, the last digit will be omitted).
 *    - By default, the interface uses subset B. “{A” or “{C” should be added before the content if you need to use subset A or C, for example: “{A2344A”, ”{C123123”, ”{A1A{B13B{C12”.
 *
 * @example
 * SunmiPrinterLibrary.printBarcode('1234567890', 'CODE128', 162, 2, 'textUnderBarcode')
 *
 */
export declare const printBarcode: (text: string, symbology: Barcode1DSymbology, height: number, width: number, textPosition: TextPosition) => Promise<void>;
/**
 * Print QR code
 *
 * @param {string} text - QR code to be printed.
 * @param {number} moduleSize - It is a size of a QR code block and should be within 4-16.
 * @param {QRErrorLevel} errorLevel - QR code error correction level
 *
 * @description
 * - After calling this method, the content will be printed under normal print status, and every QR code block is 4 Pixel (when smaller than 4 Pixel, the code parsing might fail).
 * - version19 (93*93) is a maximum mode supported.
 *
 * @example
 * SunmiPrinterLibrary.printQRCode('Hello World', 8, 'middle')
 */
export declare const printQRCode: (text: string, moduleSize: number, errorLevel: QRErrorLevel) => Promise<void>;
/**
 * Print 2D code (PDF417)
 *
 * @param {string} text - 2D barcode to be printed.
 * @param {number} moduleSize - It is a size of a QR code block and should be within 1 - 4.
 * @param {number} errorLevel - It is error correction level and should be within 0 - 3
 *
 * @example
 * SunmiPrinterLibrary.print2DCodePDF417('Hello World', 4, 2)
 */
export declare const print2DCodePDF417: (text: string, moduleSize: number, errorLevel: number) => Promise<void>;
/**
 * Print 2D code (DataMatrix)
 *
 * @param {string} text - 2D barcode to be printed.
 * @param {number} moduleSize - It is a size of a QR code block and should be within 4 - 16.
 * @param {number} errorLevel - It is error correction level and should be within 0 - 3
 *
 * @example
 * SunmiPrinterLibrary.print2DCodeDataMatrix('Hello World', 12, 2)
 */
export declare const print2DCodeDataMatrix: (text: string, moduleSize: number, errorLevel: number) => Promise<void>;
/**
 * Implement n LFs on the paper
 */
export declare const lineWrap: (count: number) => Promise<void>;
/**
 * Cut paper
 *
 * @note
 * It is only available to the desktop devices with a cutter.
 */
export declare const cutPaper: () => Promise<void>;
/**
 * Get the number of times a cutter has been used
 *
 * @note
 * It is only available to the desktop devices with a cutter.
 */
export declare const getCutPaperTimes: () => Promise<number>;
/**
 * print image
 *
 * @description
 * print image that is encoded Base64
 *
 * @param {string} base64 'data:image/png;base64,iVBORw0KGgoAAAA...'
 * @param {number} pixelWidth if paper width is 58mm then max 384 or it is 80mm then max 576.
 * @param {PrintImageType} type 'binary' or 'grayscale'
 *
 * @example
 * SunmiPrinterLibrary.printImage(sampleImageBase64, 384, 'grayscale')
 */
export declare const printImage: (base64: string, pixelWidth: number, type: PrintImageType) => Promise<void>;
/**
 * get text for HorizontalRule
 *
 * @note
 * It NEEDs await.
 *
 * @note
 * This function is an original method.
 * It may not be displayed correctly depending on your environment.
 * It is calculated from the character width.
 *
 * @param {BarType} barType - 'line' | 'double' | 'dots' | 'wave' | 'plus' | 'star'
 *
 * @example
 * const hr = await SunmiPrinterLibrary.hr('plus')
 *
 */
export declare const hr: (barType: BarType) => Promise<string>;
/**
 * print HorizontalRule by text
 *
 * @note
 * It NEEDs await.
 *
 * @note
 * This function is an original method.
 * It may not be displayed correctly depending on your environment.
 * It is calculated from the character width.
 *
 * @param {BarType} barType - 'line' | 'double' | 'dots' | 'wave' | 'plus' | 'star'
 *
 * @example
 * await SunmiPrinterLibrary.printHR('plus')
 *
 */
export declare const printHR: (barType: BarType) => Promise<void>;
/**
 * scan barcode / QR code
 *
 * @example
 *
 * ```
 * const result = await SunmiPrinterLibrary.scan()
 * ```
 *
 * OR
 *
 * ```
 * const scan = () => {
 *    SunmiPrinterLibrary.scan()
 * }
 *
 * useEffect(() => {
 *    DeviceEventEmitter.addListener(SunmiPrinterLibrary.EventType.onScanSuccess, (message) => {
 *       console.log(message)
 *    })
 *    DeviceEventEmitter.addListener(SunmiPrinterLibrary.EventType.onScanFailed, (message) => {
 *       console.log(message)
 *    })
 *    return () => {
 *       DeviceEventEmitter.removeAllListeners(SunmiPrinterLibrary.EventType.onScanSuccess)
 *       DeviceEventEmitter.removeAllListeners(SunmiPrinterLibrary.EventType.onScanFailed)
 *    }
 * }, [])
 *```
 *
 */
export declare const scan: () => Promise<string>;
/**
 * get Printer info.
 *
 * @note
 * It gets printer information, such as serial number, in bulk.
 *
 * @example
 *  const {
 *      serialNumber, printerVersion, serviceVersion, printerModal, paperWidth, pixelWidth
 *    } = await SunmiPrinterLibrary.getPrinterInfo()
 */
export declare const getPrinterInfo: () => Promise<PrinterInfo>;
/**
 * Send raw data to printer
 *
 * @param {string} base64
 */
export declare const sendRAWData: (text: string) => Promise<void>;
/**
 * Enable transaction printing mode
 *
 * @param {boolean} clear - whether to clear the content in the buffer area:
 * if true, clears the last transaction to print uncommitted content.
 * if false, does not clear that the last transaction printed uncommitted content, and the next commit will contain the last.
 */
export declare const enterPrinterBuffer: (clear: boolean) => Promise<void>;
/**
 * Exit transaction mode
 *
 * @param {boolean} commit - Whether commit prints out the buffer content:
 * if true, prints everything in the transaction queue.
 * if false, does not print content in the transaction queue, which is saved until the next commit.
 */
export declare const exitPrinterBuffer: (commit: boolean) => Promise<void>;
/**
 * Commit transaction printing
 */
export declare const commitPrinterBuffer: () => Promise<void>;
export declare const labelLocate: () => Promise<void>;
export declare const labelOutput: () => Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map