import {toString} from "./utils";

/**
 * 浮点运算加法
 * @param args
 */
export function floatAddition(args: number[]): number {
    if (args.length < 2) return;
    return args.reduce((prev, next) => {
        let a, b, m, c: number;
        try {
            a = toString(prev).split('.')[1].length;
        } catch (e) {
            a = 0;
        }
        try {
            b = toString(next).split('.')[1].length;
        } catch (e) {
            b = 0;
        }
        c = Math.abs(a - b);
        m = Math.pow(10, Math.max(a, b));
        if (c > 0) {
            let cm = Math.pow(10, c);
            if (a > b) {
                prev = Number(toString(prev).replace('.', ''));
                next = Number(toString(next).replace('.', '')) * cm;
            } else {
                prev = Number(toString(prev).replace('.', '')) * cm;
                next = Number(toString(next).replace('.', ''));
            }
        } else {
            prev = Number(toString(prev).replace('.', ''));
            next = Number(toString(next).replace('.', ''));
        }
        return (prev + next) / m;
    });
}

/**
 * 浮点运算减法
 * @param a
 * @param b
 */
export function floatSubtraction(a: number, b: number): number {
    let a1, b1, m, n;
    try {
        a1 = toString(a).split('.')[1].length;
    } catch (e) {
        a1 = 0;
    }
    try {
        b1 = toString(b).split('.')[1].length;
    } catch (e) {
        b1 = 0;
    }
    m = Math.pow(10, Math.max(a1, b1));
    n = (a1 >= b1) ? a1 : b1;
    return Number(((a * m - b * m) / m).toFixed(n));
}

/**
 * 浮点运算乘法
 * @param args
 * @returns {*}
 */
export function floatMultiplication(args: number[]): number {
    if (args.length < 2) return;
    return args.reduce((prev, next) => {
        let m = 0, p = toString(prev), n = toString(next);
        try {
            m += p.split('.')[1].length;
        } catch (e) {}
        try {
            m += n.split('.')[1].length;
        } catch (e) {}
        return Number(p.replace('.', '')) * Number(n.replace('.', '')) / Math.pow(10, m);
    });
}

/**
 * 浮点运算除法
 * @param a
 * @param b
 * @returns {number}
 */
export function floatDivision(a: number, b: number): number {
    let a1 = 0, b1 = 0, a2, b2;
    try {
        a1 = toString(a).split('.')[1].length;
    } catch (e) {}
    try {
        b1 = toString(b).split('.')[1].length;
    } catch (e) {}
    a2 = Number(toString(a).replace('.', ''));
    b2 = Number(toString(b).replace('.', ''));
    return (a2 / b2) * Math.pow(10, b1 - a1);
}
