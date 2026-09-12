import { TronalddumpEntityBase } from '../TronalddumpEntityBase';
import type { TronalddumpSDK } from '../TronalddumpSDK';
import type { Control } from '../types';
import type { Quote, QuoteLoadMatch, QuoteListMatch } from '../TronalddumpTypes';
declare class QuoteEntity extends TronalddumpEntityBase<Quote> {
    constructor(client: TronalddumpSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    load(this: any, reqmatch?: QuoteLoadMatch, ctrl?: Control): Promise<QuoteEntity>;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
}
export { QuoteEntity };
