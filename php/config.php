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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'author',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'author_id' => 'id',
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
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/author',
                  'parts' => [
                    'author',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'name' => 'appeared_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'created_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'quote_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'total',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'updated_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'value',
              'type' => '`$STRING`',
            ],
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
                  'parts' => [
                    'random',
                    'quote',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
                  'parts' => [
                    'search',
                    'quote',
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
                  'parts' => [
                    'quote',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'quote_id' => 'id',
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
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'source',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'source_id' => 'id',
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
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/source',
                  'parts' => [
                    'source',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'total',
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'tag',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'tag_value' => 'id',
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
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/tag',
                  'parts' => [
                    'tag',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
