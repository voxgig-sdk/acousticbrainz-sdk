package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Acousticbrainz",
			"slug": "acousticbrainz",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://acousticbrainz.org/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"high_level": map[string]any{},
				"low_level": map[string]any{},
				"metadata": map[string]any{},
			},
		},
		"entity": map[string]any{
			"high_level": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "highlevel",
						"short": "High-level semantic descriptors",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
				},
				"name": "high_level",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
											"kind": "param",
											"name": "mbid",
											"orig": "mbid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "n",
											"orig": "n",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{mbid}/high-level",
								"parts": []any{
									"{mbid}",
									"high-level",
								},
								"select": map[string]any{
									"exist": []any{
										"mbid",
										"n",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"low_level": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "lowlevel",
						"short": "Low-level spectral and temporal features",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Metadata about the analysis",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rhythm",
						"short": "Rhythm features including BPM, beats, and danceability",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tonal",
						"short": "Tonal features including key, scale, chords, and harmonic characteristics",
						"type": "`$OBJECT`",
					},
				},
				"name": "low_level",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
											"kind": "param",
											"name": "mbid",
											"orig": "mbid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "n",
											"orig": "n",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{mbid}/low-level",
								"parts": []any{
									"{mbid}",
									"low-level",
								},
								"select": map[string]any{
									"exist": []any{
										"mbid",
										"n",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"metadata": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "Number of submissions for this recording",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mbid",
						"short": "MusicBrainz ID",
						"type": "`$STRING`",
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
											"kind": "param",
											"name": "mbid",
											"orig": "mbid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{mbid}/count",
								"parts": []any{
									"{mbid}",
									"count",
								},
								"select": map[string]any{
									"exist": []any{
										"mbid",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
