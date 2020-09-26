import {toString, padStart} from "lodash";
import {isDate} from "./utils"

/**
 * 获取字串长度
 * @param str
 */
export function czLength(str: any = ''): number {
    if (typeof str !== 'string') str = toString(str);
    const arr = str.match(/[^\x00-\x80]/g);
    return str.length + (arr ? arr.length : 0);
}

/**
 * 删除指定字符串
 * @param str{string}
 * @param key{string}
 */
export function deleteAssignString(str: string, key: string): string {
    return str.replace(key, '');
}

/**
 * 字符串截取
 * @param str{string} 需要处理的字符串
 * @param len{string} 截取的长度
 */
export function stringSlice(str: string, len: number): string {
    if (typeof str !== 'string') str = toString(str);
    if (str.length <= len) return str;
    return str.slice(len)
}

/**
 * 字符串转数组
 * @param str{string}
 * @param key{string}
 */
export function transformArray(str: string, key: string): string[] {
    return str.split(key);
}

/**
 * 删除所有HTML标签
 * @param tag
 */
export function htmlTagToSpace(tag: string): string {
    return tag.replace(/<[^<>]+?>/g, '');
}

/**
 * 通过字符串操作将一个数放大或缩小指定倍数
 * @param num 被转换的数 小数或整数
 * @param m 表示小数点移动的位数 正数为放大，负数为缩小
 * @param needNumber 表示是否需要强转为数字
 */
export function numberZoom(num: number | string, m: number, needNumber: boolean = false): number | string {
    let parts = toString(num).split('.'), // 拆分整数、小数部分
        integerLen = parts[0].length, // 原始值的整数位数
        decimalLen = parts[1] ? parts[1].length : 0, // 原始值的小数位数
        index = integerLen + m; // 小数点位置，也是整数的位数:
    if (m > 0) {
        let zeros = m - decimalLen;
        while (zeros > 0) {
            zeros -= 1;
            parts.push(String(0));
        }
    } else {
        let zeros = Math.abs(m) - integerLen;
        while (zeros > 0) {
            zeros -= 1;
            parts.unshift(String(0));
        }
    }
    parts = parts.join('').split('');
    if (parts.length > index) {
        parts.splice(index > 0 ? index : 0, 0, '.');
    }
    return needNumber ? parseFloat(parts.join('')) : parts.join('');
}

/**
 * 日期转换
 * @param date
 * @description ios new Date函数不支持带有 "-"的日期格式，即 "new Date("2019-02-26 16:10:00")"会无效
 * 需将"2019-02-26 16:10:00"转换成"2019/02/26 16:10:00"
 */
export function conversionDate(date: string): string {
    return date.replace(/-/g, "/")
}

/**
 * 格式化时间对象
 * @param dataTime
 * @param format
 * @returns {*}
 */
export function formatDate(dataTime: any, format: string = 'yyyy-MM-dd h:m:s'): string {
    if (dataTime === 0 || dataTime === null || dataTime === undefined) return '--';
    let time: Date;
    if (isDate(dataTime)) {
        time = dataTime;
    } else {
        time = new Date(parseInt(dataTime) * 1000)
    }
    const date = {
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        'S+': time.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(
            RegExp.$1,
            (time.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }
    for (let k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format =
                format.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1
                        ? padStart(date[k], 2, '0') :
                        ('00' + date[k]).substr(('' + date[k]).length)
                );
        }
    }
    return format;
}

/**
 * 获取日期
 * @param beforeDays    几天之前
 * @param format        时间返回格式
 */
export function getDate(beforeDays: number = 0, format: string = 'yyyy-MM-dd h:m:s'): string {
    const time = new Date();
    time.setDate(time.getDate() - beforeDays);
    return formatDate(time, format);
}

/**
 * 获取美东时间的时间对象
 */
export function getEastDateObject(): Date {
    const time = new Date();
    // 北京时间和美国纽约的时差分钟，这里是-720，即12个小时
    time.setMinutes(time.getMinutes() - 720);
    return time
}

/**
 * 获取日期
 * @param beforeDays{number}    几天之前
 * @param format{string}        时间返回格式
 * @return {string}
 */
export function getEastDate(beforeDays: number = 0, format: string = 'yyyy-MM-dd h:m:s'): string {
    const time = getEastDateObject();
    time.setDate(time.getDate() - beforeDays);
    return formatDate(time, format);
}

export interface TimeDate<T> {
    start: T
    end: T
}

/**
 * 获取今天 昨天 本月 上月 最近7天 本周 上周
 * @param id{number} 1今天 2昨天 3本月 4上月 5最近7天 6 本周 7 上周
 * @param format{string} 时间戳格式 默认 "yyyy-MM-dd"
 * */
export function lately(id: number = 1, format: string = "yyyy-MM-dd"): TimeDate<string> {
    const timeDate: TimeDate<Date> = {start: new Date(), end: new Date()},
        weekday = new Date().getDay() || 7; // 当天是星期几
    switch (id) {
        case 7: // 上周
            timeDate.start.setDate(timeDate.start.getDate() - weekday - 6);
            timeDate.end.setDate(timeDate.end.getDate() - weekday);
            break;
        case 6: // 本周
            timeDate.start.setDate(timeDate.start.getDate() - weekday + 1);
            timeDate.end.setDate(timeDate.end.getDate() - weekday + 7);
            break;
        case 5: // 最近7天
            timeDate.start.setDate(timeDate.start.getDate() - 6);
            break;
        case 4: // 上月
            timeDate.start.setMonth(timeDate.start.getMonth() - 1, 1);
            timeDate.end.setMonth(timeDate.end.getMonth(), 0);
            break;
        case 3: // 本月
            timeDate.start.setMonth(timeDate.start.getMonth(), 1);
            break;
        case 2:// 昨天
            timeDate.start.setDate(timeDate.start.getDate() - 1);
            timeDate.end = timeDate.start;
            break;
        case 1:
            break;
    }
    return {
        start: formatDate(timeDate.start, format),
        end: formatDate(timeDate.end, format),
    };
}
