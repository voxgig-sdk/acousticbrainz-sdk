
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://acousticbrainz.org/api/v1',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      high_level: {
      },

      low_level: {
      },

      metadata: {
      },

    }
  }


  entity = {
    "high_level": {
      "fields": [
        {
          "name": "highlevel",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "metadata",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "n",
                    "orig": "n",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{mbid}/high-level",
              "parts": [
                "{mbid}",
                "high-level"
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "metadata",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "rhythm",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "tonal",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "n",
                    "orig": "n",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{mbid}/low-level",
              "parts": [
                "{mbid}",
                "low-level"
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "mbid",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{mbid}/count",
              "parts": [
                "{mbid}",
                "count"
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

