# Acousticbrainz SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Acousticbrainz",
            "slug": "acousticbrainz",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://acousticbrainz.org/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "high_level": {},
                "low_level": {},
                "metadata": {},
            },
        },
        "entity": {
      "high_level": {
        "fields": [
          {
            "name": "highlevel",
            "short": "High-level semantic descriptors",
            "type": "`$OBJECT`",
          },
          {
            "name": "metadata",
            "type": "`$OBJECT`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{mbid}/high-level",
                "parts": [
                  "{mbid}",
                  "high-level",
                ],
                "select": {
                  "exist": [
                    "mbid",
                    "n",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "low_level": {
        "fields": [
          {
            "name": "lowlevel",
            "short": "Low-level spectral and temporal features",
            "type": "`$OBJECT`",
          },
          {
            "name": "metadata",
            "short": "Metadata about the analysis",
            "type": "`$OBJECT`",
          },
          {
            "name": "rhythm",
            "short": "Rhythm features including BPM, beats, and danceability",
            "type": "`$OBJECT`",
          },
          {
            "name": "tonal",
            "short": "Tonal features including key, scale, chords, and harmonic characteristics",
            "type": "`$OBJECT`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{mbid}/low-level",
                "parts": [
                  "{mbid}",
                  "low-level",
                ],
                "select": {
                  "exist": [
                    "mbid",
                    "n",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "metadata": {
        "fields": [
          {
            "name": "count",
            "short": "Number of submissions for this recording",
            "type": "`$INTEGER`",
          },
          {
            "name": "mbid",
            "short": "MusicBrainz ID",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{mbid}/count",
                "parts": [
                  "{mbid}",
                  "count",
                ],
                "select": {
                  "exist": [
                    "mbid",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
