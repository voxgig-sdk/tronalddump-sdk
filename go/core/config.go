package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Tronalddump",
			"slug": "tronalddump",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.tronalddump.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"author": map[string]any{},
				"quote": map[string]any{},
				"source": map[string]any{},
				"tag": map[string]any{},
			},
		},
		"entity": map[string]any{
			"author": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "Total number of authors",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"short": "HATEOAS links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of authors available",
						"type": "`$INTEGER`",
					},
				},
				"name": "author",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "author_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/author/{author_id}",
								"parts": []any{
									"author",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"author_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body._links`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/author",
								"parts": []any{
									"author",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "appeared_at",
						"short": "The date and time when the quote appeared",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"short": "Total number of quotes found",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The date and time when the quote was created in the system",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"short": "HATEOAS links for pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "quote_id",
						"short": "Unique identifier for the quote",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags associated with the quote",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of quotes available",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The date and time when the quote was last updated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"short": "The actual quote text",
						"type": "`$STRING`",
					},
				},
				"name": "quote",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/quote",
								"parts": []any{
									"random",
									"quote",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search/quote",
								"parts": []any{
									"search",
									"quote",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"query",
										"size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "quote_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quote/{quote_id}",
								"parts": []any{
									"quote",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"quote_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"source": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "Total number of sources",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"short": "HATEOAS links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of sources available",
						"type": "`$INTEGER`",
					},
				},
				"name": "source",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "source_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/source/{source_id}",
								"parts": []any{
									"source",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"source_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body._links`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/source",
								"parts": []any{
									"source",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "Total number of quotes found",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"short": "HATEOAS links for pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of quotes available",
						"type": "`$INTEGER`",
					},
				},
				"name": "tag",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "tag_value",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tag/{tag_value}",
								"parts": []any{
									"tag",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tag_value": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/tag",
								"parts": []any{
									"tag",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
