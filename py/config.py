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
            "active": True,
            "name": "highlevel",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "high_level",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      "kind": "param",
                      "name": "mbid",
                      "orig": "mbid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "reqd": False,
                      "type": "`$INTEGER`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "lowlevel",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "rhythm",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tonal",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
        ],
        "name": "low_level",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      "kind": "param",
                      "name": "mbid",
                      "orig": "mbid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "n",
                      "orig": "n",
                      "reqd": False,
                      "type": "`$INTEGER`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "mbid",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "metadata",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      "kind": "param",
                      "name": "mbid",
                      "orig": "mbid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
