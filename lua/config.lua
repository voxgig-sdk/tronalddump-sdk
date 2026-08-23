-- Tronalddump SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Tronalddump",
      slug = "tronalddump",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.tronalddump.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["author"] = {},
        ["quote"] = {},
        ["source"] = {},
        ["tag"] = {},
      },
    },
    entity = {
      ["author"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["short"] = "Total number of authors",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "embedded",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "links",
            ["short"] = "HATEOAS links",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of authors available",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "author",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "author_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/author/{author_id}",
                ["parts"] = {
                  "author",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["author_id"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body._links`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/author",
                ["parts"] = {
                  "author",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["quote"] = {
        ["fields"] = {
          {
            ["name"] = "appeared_at",
            ["short"] = "The date and time when the quote appeared",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "count",
            ["short"] = "Total number of quotes found",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "created_at",
            ["short"] = "The date and time when the quote was created in the system",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "embedded",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "links",
            ["short"] = "HATEOAS links for pagination",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "quote_id",
            ["short"] = "Unique identifier for the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["short"] = "Tags associated with the quote",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of quotes available",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "updated_at",
            ["short"] = "The date and time when the quote was last updated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "value",
            ["short"] = "The actual quote text",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "quote",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random/quote",
                ["parts"] = {
                  "random",
                  "quote",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 25,
                      ["kind"] = "query",
                      ["name"] = "size",
                      ["orig"] = "size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search/quote",
                ["parts"] = {
                  "search",
                  "quote",
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "query",
                    "size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "quote_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote/{quote_id}",
                ["parts"] = {
                  "quote",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["quote_id"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["source"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["short"] = "Total number of sources",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "embedded",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "links",
            ["short"] = "HATEOAS links",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of sources available",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "source",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "source_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/source/{source_id}",
                ["parts"] = {
                  "source",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["source_id"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body._links`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/source",
                ["parts"] = {
                  "source",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tag"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["short"] = "Total number of quotes found",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "embedded",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "links",
            ["short"] = "HATEOAS links for pagination",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of quotes available",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "tag",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "tag_value",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 25,
                      ["kind"] = "query",
                      ["name"] = "size",
                      ["orig"] = "size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tag/{tag_value}",
                ["parts"] = {
                  "tag",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["tag_value"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "page",
                    "size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tag",
                ["parts"] = {
                  "tag",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
