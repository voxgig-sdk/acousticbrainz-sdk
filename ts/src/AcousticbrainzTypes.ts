// Typed models for the Acousticbrainz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface HighLevel {
  highlevel?: Record<string, any>
  metadata?: Record<string, any>
}

export interface HighLevelLoadMatch {
  mbid: string
}

export interface LowLevel {
  lowlevel?: Record<string, any>
  metadata?: Record<string, any>
  rhythm?: Record<string, any>
  tonal?: Record<string, any>
}

export interface LowLevelLoadMatch {
  mbid: string
}

export interface Metadata {
  count?: number
  mbid?: string
}

export interface MetadataLoadMatch {
  mbid: string
}

