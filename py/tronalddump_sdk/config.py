# Tronalddump SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "name": "Tronalddump",
            "slug": "tronalddump",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.tronalddump.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "author": {},
                "quote": {},
                "source": {},
                "tag": {},
            },
        },
        "entity": {
      "author": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Total number of authors",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
            "short": "HATEOAS links",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
            "short": "Total number of authors available",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "author",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/author/{author_id}",
                "segments": [
                  {
                    "lit": "author",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "author",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "author_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body._links`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "author_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/author",
                "segments": [
                  {
                    "lit": "author",
                  },
                ],
                "parts": [
                  "author",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "quote": {
        "fields": [
          {
            "name": "appeared_at",
            "title": "Appeared At",
            "type": "`$STRING`",
            "short": "The date and time when the quote appeared",
            "format": "date-time",
          },
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Total number of quotes found",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "short": "The date and time when the quote was created in the system",
            "format": "date-time",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
            "short": "HATEOAS links for pagination",
          },
          {
            "name": "quote_id",
            "title": "Quote Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the quote",
          },
          {
            "name": "tags",
            "title": "Tags",
            "type": "`$ARRAY`",
            "short": "Tags associated with the quote",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
            "short": "Total number of quotes available",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$STRING`",
            "short": "The date and time when the quote was last updated",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$STRING`",
            "short": "The actual quote text",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "quote",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/random/quote",
                "segments": [
                  {
                    "lit": "random",
                  },
                  {
                    "lit": "quote",
                  },
                ],
                "parts": [
                  "random",
                  "quote",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/search/quote",
                "segments": [
                  {
                    "lit": "search",
                  },
                  {
                    "lit": "quote",
                  },
                ],
                "parts": [
                  "search",
                  "quote",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "page",
                    "query",
                    "size",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/quote/{quote_id}",
                "segments": [
                  {
                    "lit": "quote",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "quote",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "quote_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "quote_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "source": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Total number of sources",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
            "short": "HATEOAS links",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
            "short": "Total number of sources available",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "source",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/source/{source_id}",
                "segments": [
                  {
                    "lit": "source",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "source",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "source_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body._links`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "source_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/source",
                "segments": [
                  {
                    "lit": "source",
                  },
                ],
                "parts": [
                  "source",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tag": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Total number of quotes found",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
            "short": "HATEOAS links for pagination",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
            "short": "Total number of quotes available",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "tag",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/tag/{tag_value}",
                "segments": [
                  {
                    "lit": "tag",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "tag",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "tag_value": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "tag_value",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "size",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/tag",
                "segments": [
                  {
                    "lit": "tag",
                  },
                ],
                "parts": [
                  "tag",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
