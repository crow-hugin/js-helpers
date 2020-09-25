import {isNumber, isString} from "./utils";

export const cookies = {
    isEnabled(): boolean {
        let cookieEnabled = Boolean(navigator.cookieEnabled);
        if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
            document.cookie = 'test';
            cookieEnabled = document.cookie.indexOf("test") !== -1;
        }
        return cookieEnabled;
    },
    set(name: string, value: any, expires?: number, path: string = "/", domain?: string, secure?: boolean): void {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));
        if (isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toUTCString());
        }
        if (isString(path)) cookie.push('path=' + path);
        if (isString(domain)) cookie.push('domain=' + domain);
        if (secure === true) cookie.push('secure');
        document.cookie = cookie.join('; ');
    },

    get(name: string): string {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name): void {
        this.set(name, '', Date.now() - 86400000);
    },
    /**
     * 清空所有cookie
     */
    clear(): void {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            document.cookie = cookies[i].split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
}
