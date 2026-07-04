// Typed models for the Acousticbrainz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// HighLevel is the typed data model for the high_level entity.
type HighLevel struct {
	Highlevel *map[string]any `json:"highlevel,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
}

// HighLevelLoadMatch is the typed request payload for HighLevel.LoadTyped.
type HighLevelLoadMatch struct {
	Mbid string `json:"mbid"`
}

// LowLevel is the typed data model for the low_level entity.
type LowLevel struct {
	Lowlevel *map[string]any `json:"lowlevel,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Rhythm *map[string]any `json:"rhythm,omitempty"`
	Tonal *map[string]any `json:"tonal,omitempty"`
}

// LowLevelLoadMatch is the typed request payload for LowLevel.LoadTyped.
type LowLevelLoadMatch struct {
	Mbid string `json:"mbid"`
}

// Metadata is the typed data model for the metadata entity.
type Metadata struct {
	Count *int `json:"count,omitempty"`
	Mbid *string `json:"mbid,omitempty"`
}

// MetadataLoadMatch is the typed request payload for Metadata.LoadTyped.
type MetadataLoadMatch struct {
	Mbid string `json:"mbid"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
