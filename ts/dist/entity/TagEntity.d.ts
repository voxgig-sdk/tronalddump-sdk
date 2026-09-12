import { TronalddumpEntityBase } from '../TronalddumpEntityBase';
import type { TronalddumpSDK } from '../TronalddumpSDK';
import type { Control } from '../types';
import type { Tag, TagLoadMatch } from '../TronalddumpTypes';
declare class TagEntity extends TronalddumpEntityBase<Tag> {
    constructor(client: TronalddumpSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    load(this: any, reqmatch?: TagLoadMatch, ctrl?: Control): Promise<TagEntity>;
}
export { TagEntity };
