
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
    name: 'Tronalddump',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.tronalddump.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      author: {
      },

      quote: {
      },

      source: {
      },

      tag: {
      },

    }
  }


  entity = {
    "author": {
      "fields": [
        {
          "name": "count",
          "type": "`$INTEGER`"
        },
        {
          "name": "embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "type": "`$OBJECT`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/author/{author_id}",
              "parts": [
                "author",
                "{id}"
              ],
              "rename": {
                "param": {
                  "author_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body._links`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/author",
              "parts": [
                "author"
              ],
              "select": {},
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
    "quote": {
      "fields": [
        {
          "name": "appeared_at",
          "type": "`$STRING`"
        },
        {
          "name": "count",
          "type": "`$INTEGER`"
        },
        {
          "name": "created_at",
          "type": "`$STRING`"
        },
        {
          "name": "embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "type": "`$OBJECT`"
        },
        {
          "name": "quote_id",
          "type": "`$STRING`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        },
        {
          "name": "updated_at",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "random",
                "quote"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 25,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search/quote",
              "parts": [
                "search",
                "quote"
              ],
              "select": {
                "exist": [
                  "page",
                  "query",
                  "size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "quote_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/quote/{quote_id}",
              "parts": [
                "quote",
                "{id}"
              ],
              "rename": {
                "param": {
                  "quote_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
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
    "source": {
      "fields": [
        {
          "name": "count",
          "type": "`$INTEGER`"
        },
        {
          "name": "embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "type": "`$OBJECT`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/source/{source_id}",
              "parts": [
                "source",
                "{id}"
              ],
              "rename": {
                "param": {
                  "source_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body._links`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/source",
              "parts": [
                "source"
              ],
              "select": {},
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
    "tag": {
      "fields": [
        {
          "name": "count",
          "type": "`$INTEGER`"
        },
        {
          "name": "embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "type": "`$OBJECT`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 25,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/tag/{tag_value}",
              "parts": [
                "tag",
                "{id}"
              ],
              "rename": {
                "param": {
                  "tag_value": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "page",
                  "size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/tag",
              "parts": [
                "tag"
              ],
              "select": {},
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

