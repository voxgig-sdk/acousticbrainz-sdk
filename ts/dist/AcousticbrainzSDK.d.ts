import { HighLevelEntity } from './entity/HighLevelEntity';
import { LowLevelEntity } from './entity/LowLevelEntity';
import { MetadataEntity } from './entity/MetadataEntity';
export type * from './AcousticbrainzTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AcousticbrainzEntityBase } from './AcousticbrainzEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class AcousticbrainzSDK {
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
    HighLevel(entopts?: Record<string, any>): HighLevelEntity;
    LowLevel(entopts?: Record<string, any>): LowLevelEntity;
    Metadata(entopts?: Record<string, any>): MetadataEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AcousticbrainzSDK;
    tester(testopts?: any, sdkopts?: any): AcousticbrainzSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AcousticbrainzSDK;
export { stdutil, config, BaseFeature, AcousticbrainzEntityBase, AcousticbrainzSDK, SDK, };
