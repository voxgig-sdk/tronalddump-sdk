"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Tronalddump',
        slug: "tronalddump",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.tronalddump.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            author: {},
            quote: {},
            source: {},
            tag: {},
        }
    };
    entity = {
        "author": {
            "fields": [
                {
                    "name": "count",
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "short": "Total number of authors"
                },
                {
                    "name": "embedded",
                    "title": "Embedded",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "title": "Links",
                    "type": "`$OBJECT`",
                    "short": "HATEOAS links"
                },
                {
                    "name": "total",
                    "title": "Total",
                    "type": "`$INTEGER`",
                    "short": "Total number of authors available"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "author"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "author",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "author_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body._links`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "author_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/author",
                            "segments": [
                                {
                                    "lit": "author"
                                }
                            ],
                            "parts": [
                                "author"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Appeared At",
                    "type": "`$STRING`",
                    "short": "The date and time when the quote appeared",
                    "format": "date-time"
                },
                {
                    "name": "count",
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "short": "Total number of quotes found"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "short": "The date and time when the quote was created in the system",
                    "format": "date-time"
                },
                {
                    "name": "embedded",
                    "title": "Embedded",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "title": "Links",
                    "type": "`$OBJECT`",
                    "short": "HATEOAS links for pagination"
                },
                {
                    "name": "quote_id",
                    "title": "Quote Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the quote"
                },
                {
                    "name": "tags",
                    "title": "Tags",
                    "type": "`$ARRAY`",
                    "short": "Tags associated with the quote"
                },
                {
                    "name": "total",
                    "title": "Total",
                    "type": "`$INTEGER`",
                    "short": "Total number of quotes available"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "short": "The date and time when the quote was last updated",
                    "format": "date-time"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$STRING`",
                    "short": "The actual quote text"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "random"
                                },
                                {
                                    "lit": "quote"
                                }
                            ],
                            "parts": [
                                "random",
                                "quote"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
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
                                    "lit": "search"
                                },
                                {
                                    "lit": "quote"
                                }
                            ],
                            "parts": [
                                "search",
                                "quote"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 25
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "query",
                                    "size"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/quote/{quote_id}",
                            "segments": [
                                {
                                    "lit": "quote"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "quote",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "quote_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "quote_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
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
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "short": "Total number of sources"
                },
                {
                    "name": "embedded",
                    "title": "Embedded",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "title": "Links",
                    "type": "`$OBJECT`",
                    "short": "HATEOAS links"
                },
                {
                    "name": "total",
                    "title": "Total",
                    "type": "`$INTEGER`",
                    "short": "Total number of sources available"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "source"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "source",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "source_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body._links`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "source_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/source",
                            "segments": [
                                {
                                    "lit": "source"
                                }
                            ],
                            "parts": [
                                "source"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "short": "Total number of quotes found"
                },
                {
                    "name": "embedded",
                    "title": "Embedded",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "title": "Links",
                    "type": "`$OBJECT`",
                    "short": "HATEOAS links for pagination"
                },
                {
                    "name": "total",
                    "title": "Total",
                    "type": "`$INTEGER`",
                    "short": "Total number of quotes available"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "tag"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "tag",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "tag_value": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tag_value",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 25
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "page",
                                    "size"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tag",
                            "segments": [
                                {
                                    "lit": "tag"
                                }
                            ],
                            "parts": [
                                "tag"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map