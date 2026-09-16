<?php
declare(strict_types=1);

// Tronalddump SDK configuration

class TronalddumpConfig
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
                "name" => "Tronalddump",
                "slug" => "tronalddump",
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
                "base" => "https://api.tronalddump.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "author" => [],
                    "quote" => [],
                    "source" => [],
                    "tag" => [],
                ],
            ],
            "entity" => [
        'author' => [
          'fields' => [
            [
              'name' => 'count',
              'short' => 'Total number of authors',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'short' => 'HATEOAS links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of authors available',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'author',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'author_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/author/{author_id}',
                  'rename' => [
                    'param' => [
                      'author_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'author',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body._links`',
                  ],
                  'parts' => [
                    'author',
                    '{id}',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/author',
                  'segments' => [
                    [
                      'lit' => 'author',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'author',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'quote' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'appeared_at',
              'short' => 'The date and time when the quote appeared',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'count',
              'short' => 'Total number of quotes found',
              'type' => '`$INTEGER`',
            ],
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'short' => 'The date and time when the quote was created in the system',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'short' => 'HATEOAS links for pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'quote_id',
              'short' => 'Unique identifier for the quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags associated with the quote',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of quotes available',
              'type' => '`$INTEGER`',
            ],
            [
              'format' => 'date-time',
              'name' => 'updated_at',
              'short' => 'The date and time when the quote was last updated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'value',
              'short' => 'The actual quote text',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'quote',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/quote',
                  'segments' => [
                    [
                      'lit' => 'random',
                    ],
                    [
                      'lit' => 'quote',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'random',
                    'quote',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search/quote',
                  'segments' => [
                    [
                      'lit' => 'search',
                    ],
                    [
                      'lit' => 'quote',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'query',
                      'size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'search',
                    'quote',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'quote_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/quote/{quote_id}',
                  'rename' => [
                    'param' => [
                      'quote_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'quote',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'quote',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'source' => [
          'fields' => [
            [
              'name' => 'count',
              'short' => 'Total number of sources',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'short' => 'HATEOAS links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of sources available',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'source',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'source_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/source/{source_id}',
                  'rename' => [
                    'param' => [
                      'source_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'source',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body._links`',
                  ],
                  'parts' => [
                    'source',
                    '{id}',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/source',
                  'segments' => [
                    [
                      'lit' => 'source',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'source',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tag' => [
          'fields' => [
            [
              'name' => 'count',
              'short' => 'Total number of quotes found',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'short' => 'HATEOAS links for pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of quotes available',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'tag',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'tag_value',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/tag/{tag_value}',
                  'rename' => [
                    'param' => [
                      'tag_value' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'tag',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'page',
                      'size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'tag',
                    '{id}',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/tag',
                  'segments' => [
                    [
                      'lit' => 'tag',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'tag',
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
        return TronalddumpFeatures::make_feature($name);
    }
}
