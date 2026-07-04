# Acousticbrainz SDK configuration

module AcousticbrainzConfig
  def self.make_config
    {
      "main" => {
        "name" => "Acousticbrainz",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://acousticbrainz.org/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "high_level" => {},
          "low_level" => {},
          "metadata" => {},
        },
      },
      "entity" => {
        "high_level" => {
          "fields" => [
            {
              "active" => true,
              "name" => "highlevel",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "metadata",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 1,
            },
          ],
          "name" => "high_level",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                        "kind" => "param",
                        "name" => "mbid",
                        "orig" => "mbid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "example" => 0,
                        "kind" => "query",
                        "name" => "n",
                        "orig" => "n",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{mbid}/high-level",
                  "parts" => [
                    "{mbid}",
                    "high-level",
                  ],
                  "select" => {
                    "exist" => [
                      "mbid",
                      "n",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "low_level" => {
          "fields" => [
            {
              "active" => true,
              "name" => "lowlevel",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "metadata",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "rhythm",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "tonal",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 3,
            },
          ],
          "name" => "low_level",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                        "kind" => "param",
                        "name" => "mbid",
                        "orig" => "mbid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "example" => 0,
                        "kind" => "query",
                        "name" => "n",
                        "orig" => "n",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{mbid}/low-level",
                  "parts" => [
                    "{mbid}",
                    "low-level",
                  ],
                  "select" => {
                    "exist" => [
                      "mbid",
                      "n",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "metadata" => {
          "fields" => [
            {
              "active" => true,
              "name" => "count",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "mbid",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
          ],
          "name" => "metadata",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                        "kind" => "param",
                        "name" => "mbid",
                        "orig" => "mbid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{mbid}/count",
                  "parts" => [
                    "{mbid}",
                    "count",
                  ],
                  "select" => {
                    "exist" => [
                      "mbid",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AcousticbrainzFeatures.make_feature(name)
  end
end
