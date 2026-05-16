
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.tronalddump.io',

    auth: {
      prefix: 'Bearer',
    },

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
          "name": "author_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "bio",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "count",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "embedded",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "link",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "slug",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        }
      ],
      "name": "author",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/author",
              "parts": [
                "author"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "count",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 1
        },
        {
          "name": "created_at",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "embedded",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "link",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "quote_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "tag",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 6
        },
        {
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "updated_at",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "value",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
      ],
      "name": "quote",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "method": "GET",
              "orig": "/random/quote",
              "parts": [
                "random",
                "quote"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
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
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 25,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "quote_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "created_at",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "embedded",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "filename",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "link",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "source_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "updated_at",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        }
      ],
      "name": "source",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/source",
              "parts": [
                "source"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "embedded",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "link",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 3
        }
      ],
      "name": "tag",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 25,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/tag",
              "parts": [
                "tag"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "load"
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

