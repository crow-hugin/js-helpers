/// <reference types="lodash" />
import * as utils from "./utils";
import * as string from "./string";
declare const _default: {
    czLength(str?: any): number;
    deleteAssignString(str: string, key: string): string;
    stringSlice(str: string, len: number): string;
    transformArray(str: string, key: string): string[];
    htmlTagToSpace(tag: string): string;
    numberZoom(num: string | number, m: number, needNumber?: boolean): string | number;
    conversionDate(date: string): string;
    formatDate(dataTime: any, format?: string): string;
    getDate(beforeDays?: number, format?: string): string;
    getEastDateObject(): Date;
    getEastDate(beforeDays?: number, format?: string): string;
    lately(id?: number, format?: string): string.TimeDate<string>;
    getUrlParamList(): object;
    getOrigin(): string;
    getUrlParam(name: string): string;
    deleteUrlParams(url: string, name: string): string;
    updateUrlParams(url: string, name: string, value: any, removeParam?: string): string;
    generateURLSearchParams(obj: object): URLSearchParams;
    buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string): string;
    isAbsoluteURL(url: string): boolean;
    combineURL(baseURL: string, relativeURL?: string): string;
    isURLSameOrigin(requestURL: string): boolean;
    camelCase: (string?: string) => string;
    kebabCase: (string?: string) => string;
    lowerCase: (string?: string) => string;
    snakeCase: (string?: string) => string;
    startCase: (string?: string) => string;
    upperCase: (string?: string) => string;
    capitalize: (string?: string) => string;
    escape: (string?: string) => string;
    unescape: (string?: string) => string;
    escapeRegExp: (string?: string) => string;
    lowerFirst: (string?: string) => string;
    upperFirst: (string?: string) => string;
    pad: (string?: string, length?: number, chars?: string) => string;
    padEnd: (string?: string, length?: number, chars?: string) => string;
    padStart: (string?: string, length?: number, chars?: string) => string;
    repeat: (string?: string, n?: number) => string;
    toLower: (string?: string) => string;
    toUpper: (string?: string) => string;
    trim: {
        (string?: string, chars?: string): string;
        (string: string, index: string | number, guard: object): string;
    };
    trimEnd: {
        (string?: string, chars?: string): string;
        (string: string, index: string | number, guard: object): string;
    };
    trimStart: {
        (string?: string, chars?: string): string;
        (string: string, index: string | number, guard: object): string;
    };
    truncate: (string?: string, options?: import("lodash").TruncateOptions) => string;
    castArray: <T>(value?: import("lodash").Many<T>) => T[];
    cloneDeep: <T_1>(value: T_1) => T_1;
    cloneDeepWith: {
        <T_2>(value: T_2, customizer: import("lodash").CloneDeepWithCustomizer<T_2>): any;
        <T_3>(value: T_3): T_3;
    };
    conformsTo: <T_4>(object: T_4, source: import("lodash").ConformsPredicateObject<T_4>) => boolean;
    eq: (value: any, other: any) => boolean;
    isArray: {
        (value?: any): value is any[];
        <T_5>(value?: any): value is any[];
    };
    isArrayBuffer: (value?: any) => value is ArrayBuffer;
    isArrayLike: {
        <T_6 extends {
            __lodashAnyHack: any;
        }>(t: T_6): boolean;
        (value: (...args: any[]) => any): value is never;
        (value: any): value is {
            length: number;
        };
    };
    isArrayLikeObject: {
        <T_7 extends {
            __lodashAnyHack: any;
        }>(value: T_7): boolean;
        (value: string | number | boolean | Function | ((...args: any[]) => any)): value is never;
        (value: any): value is object & {
            length: number;
        };
    };
    isBoolean: (value?: any) => value is boolean;
    isBuffer: (value?: any) => boolean;
    isDate: (value?: any) => value is Date;
    isElement: (value?: any) => boolean;
    isEmpty: (value?: any) => boolean;
    isEqual: (value: any, other: any) => boolean;
    isEqualWith: (value: any, other: any, customizer?: import("lodash").IsEqualCustomizer) => boolean;
    isError: (value: any) => value is Error;
    isFunction: (value: any) => value is (...args: any[]) => any;
    isLength: (value?: any) => boolean;
    isMap: (value?: any) => value is Map<any, any>;
    isMatch: (object: object, source: object) => boolean;
    isNaN: (value?: any) => boolean;
    isNil: (value: any) => value is null;
    isNull: (value: any) => value is null;
    isNumber: (value?: any) => value is number;
    isObject: (value?: any) => value is object;
    isObjectLike: (value?: any) => boolean;
    isPlainObject: (value?: any) => boolean;
    isRegExp: (value?: any) => value is RegExp;
    isSafeInteger: (value: any) => boolean;
    isSet: (value?: any) => value is Set<any>;
    isString: (value?: any) => value is string;
    isSymbol: (value: any) => value is symbol;
    isUndefined: (value: any) => value is undefined;
    isWeakMap: (value?: any) => value is WeakMap<object, any>;
    isWeakSet: (value?: any) => value is WeakSet<object>;
    toArray: {
        <T_8>(value: import("lodash").Dictionary<T_8> | import("lodash").NumericDictionary<T_8>): T_8[];
        <T_9>(value: T_9): T_9[keyof T_9][];
        (): any[];
    };
    toFinite: (value: any) => number;
    toInteger: (value: any) => number;
    toLength: (value: any) => number;
    toString: (value: any) => string;
    toNumber: (value: any) => number;
    chunk: <T_10>(array: import("lodash").List<T_10>, size?: number) => T_10[][];
    compact: <T_11>(array: import("lodash").List<false | "" | 0 | T_11>) => T_11[];
    pull: {
        <T_12>(array: T_12[], ...values: T_12[]): T_12[];
        <T_13>(array: import("lodash").List<T_13>, ...values: T_13[]): import("lodash").List<T_13>;
    };
    remove: <T_14>(array: import("lodash").List<T_14>, predicate?: import("lodash").ListIteratee<T_14>) => T_14[];
    first: <T_15>(array: import("lodash").List<T_15>) => T_15;
    last: <T_16>(array: import("lodash").List<T_16>) => T_16;
    tail: <T_17>(array: import("lodash").List<T_17>) => T_17[];
    take: <T_18>(array: import("lodash").List<T_18>, n?: number) => T_18[];
    countBy: {
        <T_19>(collection: import("lodash").List<T_19>, iteratee?: import("lodash").ValueIteratee<T_19>): import("lodash").Dictionary<number>;
        <T_20 extends object>(collection: T_20, iteratee?: import("lodash").ValueIteratee<T_20[keyof T_20]>): import("lodash").Dictionary<number>;
    };
    groupBy: {
        <T_21>(collection: import("lodash").List<T_21>, iteratee?: import("lodash").ValueIteratee<T_21>): import("lodash").Dictionary<T_21[]>;
        <T_22 extends object>(collection: T_22, iteratee?: import("lodash").ValueIteratee<T_22[keyof T_22]>): import("lodash").Dictionary<T_22[keyof T_22][]>;
    };
    keyBy: {
        <T_23>(collection: import("lodash").List<T_23>, iteratee?: import("lodash").ValueIterateeCustom<T_23, string | number | symbol>): import("lodash").Dictionary<T_23>;
        <T_24 extends object>(collection: T_24, iteratee?: import("lodash").ValueIterateeCustom<T_24[keyof T_24], string | number | symbol>): import("lodash").Dictionary<T_24[keyof T_24]>;
    };
    invokeMap: {
        (collection: object, methodName: string, ...args: any[]): any[];
        <TResult>(collection: object, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    };
    orderBy: {
        <T_25>(collection: import("lodash").List<T_25>, iteratees?: import("lodash").Many<import("lodash").ListIterator<T_25, unknown>>, orders?: import("lodash").Many<boolean | "asc" | "desc">): T_25[];
        <T_26>(collection: import("lodash").List<T_26>, iteratees?: import("lodash").Many<import("lodash").ListIteratee<T_26>>, orders?: import("lodash").Many<boolean | "asc" | "desc">): T_26[];
        <T_27 extends object>(collection: T_27, iteratees?: import("lodash").Many<import("lodash").ObjectIterator<T_27, unknown>>, orders?: import("lodash").Many<boolean | "asc" | "desc">): T_27[keyof T_27][];
        <T_28 extends object>(collection: T_28, iteratees?: import("lodash").Many<import("lodash").ObjectIteratee<T_28>>, orders?: import("lodash").Many<boolean | "asc" | "desc">): T_28[keyof T_28][];
    };
    sample: {
        <T_29>(collection: import("lodash").Dictionary<T_29> | import("lodash").NumericDictionary<T_29>): T_29;
        <T_30 extends object>(collection: T_30): T_30[keyof T_30];
    };
    sampleSize: {
        <T_31>(collection: import("lodash").Dictionary<T_31> | import("lodash").NumericDictionary<T_31>, n?: number): T_31[];
        <T_32 extends object>(collection: T_32, n?: number): T_32[keyof T_32][];
    };
    find: {
        <T_33, S extends T_33>(collection: import("lodash").List<T_33>, predicate: import("lodash").ListIteratorTypeGuard<T_33, S>, fromIndex?: number): S;
        <T_34>(collection: import("lodash").List<T_34>, predicate?: import("lodash").ListIterateeCustom<T_34, boolean>, fromIndex?: number): T_34;
        <T_35 extends object, S_1 extends T_35[keyof T_35]>(collection: T_35, predicate: import("lodash").ObjectIteratorTypeGuard<T_35, S_1>, fromIndex?: number): S_1;
        <T_36 extends object>(collection: T_36, predicate?: import("lodash").ObjectIterateeCustom<T_36, boolean>, fromIndex?: number): T_36[keyof T_36];
    };
    isStandardBrowserEnv: typeof utils.isStandardBrowserEnv;
    isArrayBufferView: typeof utils.isArrayBufferView;
    isFormData: typeof utils.isFormData;
    isFile: typeof utils.isFile;
    isBlob: typeof utils.isBlob;
    isURLSearchParams: typeof utils.isURLSearchParams;
    generatingEnAB: typeof utils.generatingEnAB;
    floatAddition(args: number[]): number;
    floatSubtraction(a: number, b: number): number;
    floatMultiplication(args: number[]): number;
    floatDivision(a: number, b: number): number;
    cookies: {
        isEnabled(): boolean;
        set(name: string, value: any, expires?: number, path?: string, domain?: string, secure?: boolean): void;
        get(name: string): string;
        remove(name: any): void;
        clear(): void;
    };
};
export default _default;
