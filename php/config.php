<?php
declare(strict_types=1);

// Acousticbrainz SDK configuration

class AcousticbrainzConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Acousticbrainz",
                "slug" => "acousticbrainz",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://acousticbrainz.org/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "high_level" => [],
                    "low_level" => [],
                    "metadata" => [],
                ],
            ],
            "entity" => [
        'high_level' => [
          'fields' => [
            [
              'name' => 'highlevel',
              'short' => 'High-level semantic descriptors',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'metadata',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'high_level',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '0dad432b-16cc-4bf0-8961-fd31d124b01b',
                        'kind' => 'param',
                        'name' => 'mbid',
                        'orig' => 'mbid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'n',
                        'orig' => 'n',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{mbid}/high-level',
                  'segments' => [
                    [
                      'var' => 'mbid',
                    ],
                    [
                      'lit' => 'high-level',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'mbid',
                      'n',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{mbid}',
                    'high-level',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'low_level' => [
          'fields' => [
            [
              'name' => 'lowlevel',
              'short' => 'Low-level spectral and temporal features',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'metadata',
              'short' => 'Metadata about the analysis',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'rhythm',
              'short' => 'Rhythm features including BPM, beats, and danceability',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'tonal',
              'short' => 'Tonal features including key, scale, chords, and harmonic characteristics',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'low_level',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '0dad432b-16cc-4bf0-8961-fd31d124b01b',
                        'kind' => 'param',
                        'name' => 'mbid',
                        'orig' => 'mbid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'n',
                        'orig' => 'n',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{mbid}/low-level',
                  'segments' => [
                    [
                      'var' => 'mbid',
                    ],
                    [
                      'lit' => 'low-level',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'mbid',
                      'n',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{mbid}',
                    'low-level',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'metadata' => [
          'fields' => [
            [
              'name' => 'count',
              'short' => 'Number of submissions for this recording',
              'type' => '`$INTEGER`',
            ],
            [
              'format' => 'uuid',
              'name' => 'mbid',
              'short' => 'MusicBrainz ID',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'metadata',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '0dad432b-16cc-4bf0-8961-fd31d124b01b',
                        'kind' => 'param',
                        'name' => 'mbid',
                        'orig' => 'mbid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{mbid}/count',
                  'segments' => [
                    [
                      'var' => 'mbid',
                    ],
                    [
                      'lit' => 'count',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'mbid',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{mbid}',
                    'count',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return AcousticbrainzFeatures::make_feature($name);
    }
}
