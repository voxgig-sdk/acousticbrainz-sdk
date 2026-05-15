package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Acousticbrainz",
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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "high_level",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "n",
											"orig": "n",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "rhythm",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tonal",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "low_level",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "n",
											"orig": "n",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "mbid",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
