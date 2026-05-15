# Acousticbrainz SDK configuration


def make_config():
    return {
        "main": {
            "name": "Acousticbrainz",
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
            "auth": {
                "prefix": "Bearer",
            },
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
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "high_level",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "rhythm",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tonal",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "low_level",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "mbid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "metadata",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
