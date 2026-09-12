import { AcousticbrainzEntityBase } from '../AcousticbrainzEntityBase';
import type { AcousticbrainzSDK } from '../AcousticbrainzSDK';
import type { Control } from '../types';
import type { HighLevel, HighLevelLoadMatch } from '../AcousticbrainzTypes';
declare class HighLevelEntity extends AcousticbrainzEntityBase<HighLevel> {
    constructor(client: AcousticbrainzSDK, entopts: any);
    make(this: HighLevelEntity): HighLevelEntity;
    load(this: any, reqmatch?: HighLevelLoadMatch, ctrl?: Control): Promise<HighLevelEntity>;
}
export { HighLevelEntity };
