-- Acousticbrainz SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Acousticbrainz",
      slug = "acousticbrainz",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://acousticbrainz.org/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["high_level"] = {},
        ["low_level"] = {},
        ["metadata"] = {},
      },
    },
    entity = {
      ["high_level"] = {
        ["fields"] = {
          {
            ["name"] = "highlevel",
            ["short"] = "High-level semantic descriptors",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "high_level",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      ["kind"] = "param",
                      ["name"] = "mbid",
                      ["orig"] = "mbid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "n",
                      ["orig"] = "n",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{mbid}/high-level",
                ["segments"] = {
                  {
                    ["var"] = "mbid",
                  },
                  {
                    ["lit"] = "high-level",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "mbid",
                    "n",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{mbid}",
                  "high-level",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["low_level"] = {
        ["fields"] = {
          {
            ["name"] = "lowlevel",
            ["short"] = "Low-level spectral and temporal features",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "metadata",
            ["short"] = "Metadata about the analysis",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "rhythm",
            ["short"] = "Rhythm features including BPM, beats, and danceability",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "tonal",
            ["short"] = "Tonal features including key, scale, chords, and harmonic characteristics",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "low_level",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      ["kind"] = "param",
                      ["name"] = "mbid",
                      ["orig"] = "mbid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "n",
                      ["orig"] = "n",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{mbid}/low-level",
                ["segments"] = {
                  {
                    ["var"] = "mbid",
                  },
                  {
                    ["lit"] = "low-level",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "mbid",
                    "n",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{mbid}",
                  "low-level",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["metadata"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["short"] = "Number of submissions for this recording",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "mbid",
            ["short"] = "MusicBrainz ID",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "metadata",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "0dad432b-16cc-4bf0-8961-fd31d124b01b",
                      ["kind"] = "param",
                      ["name"] = "mbid",
                      ["orig"] = "mbid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{mbid}/count",
                ["segments"] = {
                  {
                    ["var"] = "mbid",
                  },
                  {
                    ["lit"] = "count",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "mbid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{mbid}",
                  "count",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
