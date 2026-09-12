export interface HighLevel {
    highlevel?: Record<string, any>;
    metadata?: Record<string, any>;
}
export interface HighLevelLoadMatch {
    mbid: string;
    n?: number;
}
export interface LowLevel {
    lowlevel?: Record<string, any>;
    metadata?: Record<string, any>;
    rhythm?: Record<string, any>;
    tonal?: Record<string, any>;
}
export interface LowLevelLoadMatch {
    mbid: string;
    n?: number;
}
export interface Metadata {
    count?: number;
    mbid?: string;
}
export interface MetadataLoadMatch {
    mbid: string;
}
