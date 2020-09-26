/**
 * 生成英文字母
 */
export declare function generatingEnAB(): string[];
/**
 * 判断值是否为FormData
 * @param val
 */
export declare function isFormData(val: any): val is FormData;
/**
 * 判断值是否为ArrayBuffer试图
 * @param val
 */
export declare function isArrayBufferView(val: any): boolean;
/**
 * 是否是一个普通对象
 * @param val
 */
export declare function isPlainObject(val: any): val is Object;
/**
 * 判断是否是一个时间类型
 * @param val
 */
export declare function isDate(val: any): val is Date;
/**
 * 判断是否是一个ArrayBuffer
 * @param val
 */
export declare function isArrayBuffer(val: any): val is ArrayBuffer;
/**
 * 判断值是否为文件
 * @param val
 */
export declare function isFile(val: any): val is File;
/**
 * 判断值是否为Blob
 * @param val
 */
export declare function isBlob(val: any): val is Blob;
/**
 * 判断值是否为URLSearchParams
 * @param val
 */
export declare function isURLSearchParams(val: any): val is URLSearchParams;
/**
 * 判断是否在标准浏览器环境中运行
 */
export declare function isStandardBrowserEnv(): boolean;
