import { camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase, capitalize, escape, unescape, escapeRegExp, lowerFirst, upperFirst, pad, padEnd, padStart, repeat, toLower, toUpper, trim, trimEnd, trimStart, truncate, castArray, cloneDeep, cloneDeepWith, conformsTo, eq, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFunction, isLength, isMap, isMatch, isNaN, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet, toArray, toFinite, toInteger, toLength, toString, toNumber, chunk, compact, pull, remove, first, last, tail, take, countBy, groupBy, keyBy, invokeMap, orderBy, sample, sampleSize, find } from 'lodash';
/**
 * 生成英文字母
 */
declare function generatingEnAB(): string[];
/**
 * 判断值是否为FormData
 * @param val
 */
declare function isFormData(val: any): val is FormData;
/**
 * 判断值是否为ArrayBuffer试图
 * @param val
 */
declare function isArrayBufferView(val: any): boolean;
/**
 * 判断值是否为文件
 * @param val
 */
declare function isFile(val: any): val is File;
/**
 * 判断值是否为Blob
 * @param val
 */
declare function isBlob(val: any): val is Blob;
/**
 * 判断值是否为URLSearchParams
 * @param val
 */
declare function isURLSearchParams(val: any): val is URLSearchParams;
/**
 * 判断是否在标准浏览器环境中运行
 */
declare function isStandardBrowserEnv(): boolean;
export { camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase, capitalize, escape, unescape, escapeRegExp, lowerFirst, upperFirst, pad, padEnd, padStart, repeat, toLower, toUpper, trim, trimEnd, trimStart, truncate, castArray, // 如果不是数组，则将其转换为数组
cloneDeep, // 深克隆
cloneDeepWith, // 自定义深克隆
conformsTo, // 通过使用对象的相应属性值调用源的谓词属性来检查对象是否符合源
eq, // 两个值之间的比较以确定它们是否相等
isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, // 在两个值之间进行深入比较以确定它们是否相等
isEqualWith, // 此方法与_.isEqual类似，只是它接受调用以比较值的定制程序。 如果定制程序返回未定义，则比较由该方法处理
isError, // 检查值是否为Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError或URIError对象
isFunction, isLength, isMap, isMatch, // 在对象和源之间执行部分深层比较以确定对象是否包含等效属性值
isNaN, isNil, // 检查是否为null或undefined
isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet, toArray, // 将value转换为数组,
toFinite, toInteger, toLength, toString, toNumber, chunk, // 创建一个元素数组，分成长度为size。如果array不能均匀分割，最后的块将成为剩余的元素
compact, // 创建一个数组，其中删除所有false值
pull, remove, first, last, tail, take, countBy, groupBy, keyBy, invokeMap, orderBy, sample, sampleSize, find, isStandardBrowserEnv, isArrayBufferView, isFormData, isFile, isBlob, isURLSearchParams, generatingEnAB, };
