export declare const cookies: {
    isEnabled(): boolean;
    set(name: string, value: any, expires?: number, path?: string, domain?: string, secure?: boolean): void;
    get(name: string): string;
    remove(name: any): void;
    /**
     * 清空所有cookie
     */
    clear(): void;
};
