/**
 * 获取url所有参数
 * @returns {{}}
 */
export declare function getUrlParamList(): object;
/**
 * 获取origin url
 * @returns {{}}
 */
export declare function getOrigin(): string;
/**
 * 获取url特定参数
 * @param name
 * @returns {string}
 */
export declare function getUrlParam(name: string): string;
/**
 * 删除链接的某个参数
 * @param url
 * @param name
 */
export declare function deleteUrlParams(url: string, name: string): string;
/**
 * 更新或增加url参数
 * @param url       链接
 * @param name      参数名称
 * @param value     需要设置的值
 * @param removeParam     需要删除的参数
 */
export declare function updateUrlParams(url: string, name: string, value: any, removeParam?: string): string;
/**
 * 生成url参数
 * @param obj
 */
export declare function generateURLSearchParams(obj: object): URLSearchParams;
export declare function buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string): string;
/**
 * 判断是否是绝对地址
 * @param url
 */
export declare function isAbsoluteURL(url: string): boolean;
/**
 * 合并url
 * @param baseURL
 * @param relativeURL
 */
export declare function combineURL(baseURL: string, relativeURL?: string): string;
/**
 * 判断是否是同域
 * @param requestURL
 */
export declare function isURLSameOrigin(requestURL: string): boolean;
