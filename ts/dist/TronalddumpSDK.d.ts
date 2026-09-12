import { AuthorEntity } from './entity/AuthorEntity';
import { QuoteEntity } from './entity/QuoteEntity';
import { SourceEntity } from './entity/SourceEntity';
import { TagEntity } from './entity/TagEntity';
export type * from './TronalddumpTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TronalddumpEntityBase } from './TronalddumpEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TronalddumpSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Author(entopts?: Record<string, any>): AuthorEntity;
    Quote(entopts?: Record<string, any>): QuoteEntity;
    Source(entopts?: Record<string, any>): SourceEntity;
    Tag(entopts?: Record<string, any>): TagEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TronalddumpSDK;
    tester(testopts?: any, sdkopts?: any): TronalddumpSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TronalddumpSDK;
export { stdutil, config, BaseFeature, TronalddumpEntityBase, TronalddumpSDK, SDK, };
