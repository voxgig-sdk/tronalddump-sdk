# Tronalddump Ruby SDK Reference

Complete API reference for the Tronalddump Ruby SDK.


## TronalddumpSDK

### Constructor

```ruby
require_relative 'Tronalddump_sdk'

client = TronalddumpSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TronalddumpSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TronalddumpSDK.test
```


### Instance Methods

#### `Author(data = nil)`

Create a new `Author` entity instance. Pass `nil` for no initial data.

#### `Quote(data = nil)`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `Source(data = nil)`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `Tag(data = nil)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AuthorEntity

```ruby
author = client.Author
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | No | Total number of authors |
| `embedded` | `Hash` | No |  |
| `id` | `String` | No |  |
| `links` | `Hash` | No | HATEOAS links |
| `total` | `Integer` | No | Total number of authors available |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Author.load({ "id" => "author_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QuoteEntity

```ruby
quote = client.Quote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appeared_at` | `String` | No | The date and time when the quote appeared |
| `count` | `Integer` | No | Total number of quotes found |
| `created_at` | `String` | No | The date and time when the quote was created in the system |
| `embedded` | `Hash` | No |  |
| `id` | `String` | No |  |
| `links` | `Hash` | No | HATEOAS links for pagination |
| `quote_id` | `String` | No | Unique identifier for the quote |
| `tags` | `Array` | No | Tags associated with the quote |
| `total` | `Integer` | No | Total number of quotes available |
| `updated_at` | `String` | No | The date and time when the quote was last updated |
| `value` | `String` | No | The actual quote text |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Quote.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Quote.load({ "id" => "quote_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SourceEntity

```ruby
source = client.Source
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | No | Total number of sources |
| `embedded` | `Hash` | No |  |
| `id` | `String` | No |  |
| `links` | `Hash` | No | HATEOAS links |
| `total` | `Integer` | No | Total number of sources available |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Source.load({ "id" => "source_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TagEntity

```ruby
tag = client.Tag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | No | Total number of quotes found |
| `embedded` | `Hash` | No |  |
| `id` | `String` | No |  |
| `links` | `Hash` | No | HATEOAS links for pagination |
| `total` | `Integer` | No | Total number of quotes available |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tag.load({ "id" => "tag_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = TronalddumpSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

