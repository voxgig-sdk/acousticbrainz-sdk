
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Acousticbrainz',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://acousticbrainz.org/api/v1",

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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "rhythm",
          "type": "`$OBJECT`"
        },
        {
          "name": "tonal",
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "mbid",
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
              }
            }
          ]
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

