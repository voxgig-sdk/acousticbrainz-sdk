import { AcousticbrainzEntityBase } from '../AcousticbrainzEntityBase';
import type { AcousticbrainzSDK } from '../AcousticbrainzSDK';
import type { Control } from '../types';
import type { Metadata, MetadataLoadMatch } from '../AcousticbrainzTypes';
declare class MetadataEntity extends AcousticbrainzEntityBase<Metadata> {
    constructor(client: AcousticbrainzSDK, entopts: any);
    make(this: MetadataEntity): MetadataEntity;
    load(this: any, reqmatch?: MetadataLoadMatch, ctrl?: Control): Promise<MetadataEntity>;
}
export { MetadataEntity };
