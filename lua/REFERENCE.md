# Tronalddump Lua SDK Reference

Complete API reference for the Tronalddump Lua SDK.


## TronalddumpSDK

### Constructor

```lua
local sdk = require("tronalddump_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Author(data)`

Create a new `Author` entity instance. Pass `nil` for no initial data.

#### `Quote(data)`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `Source(data)`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AuthorEntity

```lua
local author = client:Author(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | Total number of authors |
| `embedded` | `table` | No |  |
| `links` | `table` | No | HATEOAS links |
| `total` | `number` | No | Total number of authors available |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Author():load({ id = "author_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuoteEntity

```lua
local quote = client:Quote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appeared_at` | `string` | No | The date and time when the quote appeared |
| `count` | `number` | No | Total number of quotes found |
| `created_at` | `string` | No | The date and time when the quote was created in the system |
| `embedded` | `table` | No |  |
| `links` | `table` | No | HATEOAS links for pagination |
| `quote_id` | `string` | No | Unique identifier for the quote |
| `tags` | `table` | No | Tags associated with the quote |
| `total` | `number` | No | Total number of quotes available |
| `updated_at` | `string` | No | The date and time when the quote was last updated |
| `value` | `string` | No | The actual quote text |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Quote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Quote():load({ id = "quote_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SourceEntity

```lua
local source = client:Source(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | Total number of sources |
| `embedded` | `table` | No |  |
| `links` | `table` | No | HATEOAS links |
| `total` | `number` | No | Total number of sources available |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Source():load({ id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | Total number of quotes found |
| `embedded` | `table` | No |  |
| `links` | `table` | No | HATEOAS links for pagination |
| `total` | `number` | No | Total number of quotes available |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tag():load({ id = "tag_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

