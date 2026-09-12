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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Total number of authors",
            "type": "`$INTEGER`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "short": "HATEOAS links",
            "type": "`$OBJECT`",
          },
          {
            "name": "total",
            "short": "Total number of authors available",
            "type": "`$INTEGER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "author_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/author/{author_id}",
                "rename": {
                  "param": {
                    "author_id": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "author",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body._links`",
                },
                "parts": [
                  "author",
                  "{id}",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/author",
                "segments": [
                  {
                    "lit": "author",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "author",
                ],
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
            "format": "date-time",
            "name": "appeared_at",
            "short": "The date and time when the quote appeared",
            "type": "`$STRING`",
          },
          {
            "name": "count",
            "short": "Total number of quotes found",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "created_at",
            "short": "The date and time when the quote was created in the system",
            "type": "`$STRING`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "short": "HATEOAS links for pagination",
            "type": "`$OBJECT`",
          },
          {
            "name": "quote_id",
            "short": "Unique identifier for the quote",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "short": "Tags associated with the quote",
            "type": "`$ARRAY`",
          },
          {
            "name": "total",
            "short": "Total number of quotes available",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "updated_at",
            "short": "The date and time when the quote was last updated",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "short": "The actual quote text",
            "type": "`$STRING`",
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
                "args": {},
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
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random",
                  "quote",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 25,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "page",
                    "query",
                    "size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "search",
                  "quote",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "quote_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/quote/{quote_id}",
                "rename": {
                  "param": {
                    "quote_id": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "quote",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "quote",
                  "{id}",
                ],
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
            "short": "Total number of sources",
            "type": "`$INTEGER`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "short": "HATEOAS links",
            "type": "`$OBJECT`",
          },
          {
            "name": "total",
            "short": "Total number of sources available",
            "type": "`$INTEGER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "source_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/source/{source_id}",
                "rename": {
                  "param": {
                    "source_id": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "source",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body._links`",
                },
                "parts": [
                  "source",
                  "{id}",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/source",
                "segments": [
                  {
                    "lit": "source",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "source",
                ],
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
            "short": "Total number of quotes found",
            "type": "`$INTEGER`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "short": "HATEOAS links for pagination",
            "type": "`$OBJECT`",
          },
          {
            "name": "total",
            "short": "Total number of quotes available",
            "type": "`$INTEGER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "tag_value",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 25,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/tag/{tag_value}",
                "rename": {
                  "param": {
                    "tag_value": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "tag",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "tag",
                  "{id}",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/tag",
                "segments": [
                  {
                    "lit": "tag",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "tag",
                ],
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
