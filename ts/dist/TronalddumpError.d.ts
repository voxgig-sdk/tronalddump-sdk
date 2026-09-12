import { Context } from './Context';
declare class TronalddumpError extends Error {
    isTronalddumpError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TronalddumpError };
