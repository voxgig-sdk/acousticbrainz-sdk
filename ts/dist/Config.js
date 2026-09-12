"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Acousticbrainz',
        slug: "acousticbrainz",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://acousticbrainz.org/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            high_level: {},
            low_level: {},
            metadata: {},
        }
    };
    entity = {
        "high_level": {
            "fields": [
                {
                    "name": "highlevel",
                    "short": "High-level semantic descriptors",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metadata",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "high_level",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                                        "kind": "param",
                                        "name": "mbid",
                                        "orig": "mbid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "n",
                                        "orig": "n",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{mbid}/high-level",
                            "segments": [
                                {
                                    "var": "mbid"
                                },
                                {
                                    "lit": "high-level"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "mbid",
                                    "n"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{mbid}",
                                "high-level"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "low_level": {
            "fields": [
                {
                    "name": "lowlevel",
                    "short": "Low-level spectral and temporal features",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metadata",
                    "short": "Metadata about the analysis",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rhythm",
                    "short": "Rhythm features including BPM, beats, and danceability",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tonal",
                    "short": "Tonal features including key, scale, chords, and harmonic characteristics",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "low_level",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                                        "kind": "param",
                                        "name": "mbid",
                                        "orig": "mbid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "n",
                                        "orig": "n",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{mbid}/low-level",
                            "segments": [
                                {
                                    "var": "mbid"
                                },
                                {
                                    "lit": "low-level"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "mbid",
                                    "n"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{mbid}",
                                "low-level"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "metadata": {
            "fields": [
                {
                    "name": "count",
                    "short": "Number of submissions for this recording",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "uuid",
                    "name": "mbid",
                    "short": "MusicBrainz ID",
                    "type": "`$STRING`"
                }
            ],
            "name": "metadata",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                                        "kind": "param",
                                        "name": "mbid",
                                        "orig": "mbid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{mbid}/count",
                            "segments": [
                                {
                                    "var": "mbid"
                                },
                                {
                                    "lit": "count"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "mbid"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{mbid}",
                                "count"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map