# Tronalddump Ruby SDK Reference

Complete API reference for the Tronalddump Ruby SDK.


## TronalddumpSDK

### Constructor

```ruby
require_relative 'tronalddump_sdk'

client = TronalddumpSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## AuthorEntity

```ruby
author = client.Author
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | ``$STRING`` | No |  |
| `bio` | ``$STRING`` | No |  |
| `count` | ``$INTEGER`` | No |  |
| `embedded` | ``$OBJECT`` | No |  |
| `link` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `slug` | ``$STRING`` | No |  |
| `total` | ``$INTEGER`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Author.load({ "id" => "author_id" })
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
| `appeared_at` | ``$STRING`` | No |  |
| `count` | ``$INTEGER`` | No |  |
| `created_at` | ``$STRING`` | No |  |
| `embedded` | ``$OBJECT`` | No |  |
| `link` | ``$OBJECT`` | No |  |
| `quote_id` | ``$STRING`` | No |  |
| `tag` | ``$ARRAY`` | No |  |
| `total` | ``$INTEGER`` | No |  |
| `updated_at` | ``$STRING`` | No |  |
| `value` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Quote.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Quote.load({ "id" => "quote_id" })
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
| `count` | ``$INTEGER`` | No |  |
| `created_at` | ``$STRING`` | No |  |
| `embedded` | ``$OBJECT`` | No |  |
| `filename` | ``$STRING`` | No |  |
| `link` | ``$OBJECT`` | No |  |
| `source_id` | ``$STRING`` | No |  |
| `total` | ``$INTEGER`` | No |  |
| `updated_at` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Source.load({ "id" => "source_id" })
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
| `count` | ``$INTEGER`` | No |  |
| `embedded` | ``$OBJECT`` | No |  |
| `link` | ``$OBJECT`` | No |  |
| `total` | ``$INTEGER`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Tag.load({ "id" => "tag_id" })
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

