const objString = Object.prototype.toString;

/**
 * 生成英文字母
 */
export function generatingEnAB(): string[] {
    let arr = [];
    for (let i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i).toLowerCase())
    }
    return arr;
}


/**
 * 判断值是否为FormData
 * @param val
 */
export function isFormData(val: any): val is FormData {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * 判断值是否为ArrayBuffer试图
 * @param val
 */
export function isArrayBufferView(val: any): boolean {
    let result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}

/**
 * 是否是一个普通对象
 * @param val
 */
export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}

/**
 * 判断是否是一个时间类型
 * @param val
 */
export function isDate(val: any): val is Date {
    return objString.call(val) === '[object Date]';
}

/**
 * 判断是否是一个ArrayBuffer
 * @param val
 */
export function isArrayBuffer(val: any): val is ArrayBuffer {
    return objString.call(val) === '[object ArrayBuffer]';
}

/**
 * 判断值是否为文件
 * @param val
 */
export function isFile(val: any): val is File {
    return objString.call(val) === '[object File]';
}

/**
 * 判断值是否为Blob
 * @param val
 */
export function isBlob(val: any): val is Blob {
    return objString.call(val) === '[object Blob]';
}

/**
 * 判断值是否为URLSearchParams
 * @param val
 */
export function isURLSearchParams(val: any): val is URLSearchParams {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * 判断是否在标准浏览器环境中运行
 */
export function isStandardBrowserEnv(): boolean {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')) {
        return false;
    }
    return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
    );
}
