export interface Apis {
}
export interface Args {
}
export interface Ret {
}
export interface Client {
    getData<K extends keyof Apis>(event: K, args: Args[K]): Ret[K];
}
export declare const client: Client;
