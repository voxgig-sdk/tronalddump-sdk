import { TronalddumpEntityBase } from '../TronalddumpEntityBase';
import type { TronalddumpSDK } from '../TronalddumpSDK';
import type { Control } from '../types';
import type { Author, AuthorLoadMatch } from '../TronalddumpTypes';
declare class AuthorEntity extends TronalddumpEntityBase<Author> {
    constructor(client: TronalddumpSDK, entopts: any);
    make(this: AuthorEntity): AuthorEntity;
    load(this: any, reqmatch?: AuthorLoadMatch, ctrl?: Control): Promise<AuthorEntity>;
}
export { AuthorEntity };
