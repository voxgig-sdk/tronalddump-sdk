import { TronalddumpEntityBase } from '../TronalddumpEntityBase';
import type { TronalddumpSDK } from '../TronalddumpSDK';
import type { Control } from '../types';
import type { Source, SourceLoadMatch } from '../TronalddumpTypes';
declare class SourceEntity extends TronalddumpEntityBase<Source> {
    constructor(client: TronalddumpSDK, entopts: any);
    make(this: SourceEntity): SourceEntity;
    load(this: any, reqmatch?: SourceLoadMatch, ctrl?: Control): Promise<SourceEntity>;
}
export { SourceEntity };
