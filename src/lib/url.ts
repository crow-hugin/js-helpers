import {isDate, isPlainObject, isURLSearchParams} from "./utils";

interface UrlOrigin {
    protocol: string
    host: string
}


/**
 * 获取url所有参数
 * @returns {{}}
 */
export function getUrlParamList(): object {
    let reg = '/[^?&]+=[^?&]+/g',
        arr = window.location.href.match(reg),
        o = Object.create(null);
    if (arr instanceof Array && arr.length > 0) {
        arr.forEach(i => {
            let combo = i.split('=');
            if (combo[0]) o[combo[0]] = combo[1] || '';
        })
    }
    return o;
}

/**
 * 获取origin url
 * @returns {{}}
 */
export function getOrigin(): string {
    return document.location.origin;
}

/**
 * 获取url特定参数
 * @param name
 * @returns {string}
 */
export function getUrlParam(name: string): string {
    const re = new RegExp('(?:\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i'),
        m = re.exec(window.location.href);
    return m ? m[1] : '';
}


/**
 * 删除链接的某个参数
 * @param url
 * @param name
 */
export function deleteUrlParams(url: string, name: string): string {
    url = url || location.href;
    let reg = new RegExp(`(^|)${name}=([^&]*)(|$)`);
    if (url.match(reg) !== null) {
        let urlArray = url.split('?'),
            query = urlArray[1].split('&'),
            obj = {};
        for (let i = 0, length = query.length; i < length; i++) {
            let queryArr = query[i].split('=');
            obj[queryArr[0]] = queryArr[1] ? queryArr[1] : '';
        }
        delete obj[name];
        return `${urlArray[0]}?${
            JSON.stringify(obj)
                .replace(/["{}]/g, '')
                .replace(/:/g, '=')
                .replace(/,/g, '&')
        }`;
    }
    return url;
}

/**
 * 更新或增加url参数
 * @param url       链接
 * @param name      参数名称
 * @param value     需要设置的值
 * @param removeParam     需要删除的参数
 */
export function updateUrlParams(url: string, name: string, value: any, removeParam?: string): string {
    let r = url || location.href;
    if (r !== null && r !== 'undefined' && r !== '') {
        value = encodeURIComponent(value);
        const reg = new RegExp(`(^|)${name}=([^&]*)(|$)`),
            tmp = name + '=' + value;
        if (url.match(reg) !== null) {
            r = url.replace(eval(String(reg)), tmp);
        } else {
            if (url.match('[?]')) {
                r = url + '&' + tmp;
            } else {
                r = url + '?' + tmp;
            }
        }
    }
    if (removeParam) return deleteUrlParams(r, removeParam);
    return r;
}

/**
 * 生成url参数
 * @param obj
 */
export function generateURLSearchParams(obj: object): URLSearchParams {
    const search = new URLSearchParams()
    Object.keys(obj).forEach(key => search.set(key, obj[key]))
    return search
}

function encode(val: string): string {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string): string {
    if (!params) {
        return url
    }
    let serializedParams

    if (paramsSerializer) {
        serializedParams = paramsSerializer(params)
    } else if (isURLSearchParams(params)) {
        serializedParams = params.toString()
    } else {
        const parts: string[] = []
        Object.keys(params).forEach(key => {
            const val = params[key]
            if (val === null || typeof val === 'undefined') {
                return
            }
            let values = []
            if (Array.isArray(val)) {
                values = val
                key += '[]'
            } else {
                values = [val]
            }
            values.forEach(val => {
                if (isDate(val)) {
                    val = val.toISOString()
                } else if (isPlainObject(val)) {
                    val = JSON.stringify(val)
                }
                parts.push(`${encode(key)}=${encode(val)}`)
            })
        })

        serializedParams = parts.join('&')
    }

    if (serializedParams) {
        const markIndex = url.indexOf('#')
        if (markIndex !== -1) {
            url = url.slice(0, markIndex)
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }

    return url
}

/**
 * 判断是否是绝对地址
 * @param url
 */
export function isAbsoluteURL(url: string): boolean {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

/**
 * 合并url
 * @param baseURL
 * @param relativeURL
 */
export function combineURL(baseURL: string, relativeURL?: string): string {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}

/**
 * 判断是否是同域
 * @param requestURL
 */
export function isURLSameOrigin(requestURL: string): boolean {
    const parsedOrigin = _resolveURL(requestURL)
    return (
        parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host
    )
}

const urlParsingNode = document.createElement('a')
const currentOrigin = _resolveURL(window.location.href)

function _resolveURL(url: string): UrlOrigin {
    urlParsingNode.setAttribute('href', url)
    const {protocol, host} = urlParsingNode
    return {protocol, host}
}
