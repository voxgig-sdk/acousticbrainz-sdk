import { AcousticbrainzEntityBase } from '../AcousticbrainzEntityBase';
import type { AcousticbrainzSDK } from '../AcousticbrainzSDK';
import type { Control } from '../types';
import type { LowLevel, LowLevelLoadMatch } from '../AcousticbrainzTypes';
declare class LowLevelEntity extends AcousticbrainzEntityBase<LowLevel> {
    constructor(client: AcousticbrainzSDK, entopts: any);
    make(this: LowLevelEntity): LowLevelEntity;
    load(this: any, reqmatch?: LowLevelLoadMatch, ctrl?: Control): Promise<LowLevelEntity>;
}
export { LowLevelEntity };
