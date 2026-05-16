# Tronalddump TypeScript SDK

The TypeScript SDK for the Tronalddump API. Provides a type-safe, entity-oriented interface with full async/await support.


## Install
```bash
npm install tronalddump
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TronalddumpSDK } from 'tronalddump'

const client = new TronalddumpSDK({
  apikey: process.env.TRONALDDUMP_APIKEY,
})
```

### 3. Load a author

```ts
const result = await client.Author().load({ id: 'example_id' })

if (result.ok) {
  console.log(result.data)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TronalddumpSDK.test()

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new TronalddumpSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TronalddumpSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRONALDDUMP_TEST_LIVE=TRUE
TRONALDDUMP_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### TronalddumpSDK

#### Constructor

```ts
new TronalddumpSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Author(data?)` | `AuthorEntity` | Create a Author entity instance. |
| `Quote(data?)` | `QuoteEntity` | Create a Quote entity instance. |
| `Source(data?)` | `SourceEntity` | Create a Source entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `tester(testopts?, sdkopts?)` | `TronalddumpSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TronalddumpSDK.test(testopts?, sdkopts?)` | `TronalddumpSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TronalddumpSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Author

| Field | Description |
| --- | --- |
| `author_id` |  |
| `bio` |  |
| `count` |  |
| `embedded` |  |
| `link` |  |
| `name` |  |
| `slug` |  |
| `total` |  |

Operations: load.

API path: `/author/{author_id}`

#### Quote

| Field | Description |
| --- | --- |
| `appeared_at` |  |
| `count` |  |
| `created_at` |  |
| `embedded` |  |
| `link` |  |
| `quote_id` |  |
| `tag` |  |
| `total` |  |
| `updated_at` |  |
| `value` |  |

Operations: list, load.

API path: `/random/quote`

#### Source

| Field | Description |
| --- | --- |
| `count` |  |
| `created_at` |  |
| `embedded` |  |
| `filename` |  |
| `link` |  |
| `source_id` |  |
| `total` |  |
| `updated_at` |  |
| `url` |  |

Operations: load.

API path: `/source/{source_id}`

#### Tag

| Field | Description |
| --- | --- |
| `count` |  |
| `embedded` |  |
| `link` |  |
| `total` |  |

Operations: load.

API path: `/tag/{tag_value}`



## Entities


### Author

Create an instance: `const author = client.Author()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | ``$STRING`` |  |
| `bio` | ``$STRING`` |  |
| `count` | ``$INTEGER`` |  |
| `embedded` | ``$OBJECT`` |  |
| `link` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `slug` | ``$STRING`` |  |
| `total` | ``$INTEGER`` |  |

#### Example: Load

```ts
const author = await client.Author().load({ id: 'author_id' })
```


### Quote

Create an instance: `const quote = client.Quote()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appeared_at` | ``$STRING`` |  |
| `count` | ``$INTEGER`` |  |
| `created_at` | ``$STRING`` |  |
| `embedded` | ``$OBJECT`` |  |
| `link` | ``$OBJECT`` |  |
| `quote_id` | ``$STRING`` |  |
| `tag` | ``$ARRAY`` |  |
| `total` | ``$INTEGER`` |  |
| `updated_at` | ``$STRING`` |  |
| `value` | ``$STRING`` |  |

#### Example: Load

```ts
const quote = await client.Quote().load({ id: 'quote_id' })
```

#### Example: List

```ts
const quotes = await client.Quote().list()
```


### Source

Create an instance: `const source = client.Source()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `created_at` | ``$STRING`` |  |
| `embedded` | ``$OBJECT`` |  |
| `filename` | ``$STRING`` |  |
| `link` | ``$OBJECT`` |  |
| `source_id` | ``$STRING`` |  |
| `total` | ``$INTEGER`` |  |
| `updated_at` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const source = await client.Source().load({ id: 'source_id' })
```


### Tag

Create an instance: `const tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `embedded` | ``$OBJECT`` |  |
| `link` | ``$OBJECT`` |  |
| `total` | ``$INTEGER`` |  |

#### Example: Load

```ts
const tag = await client.Tag().load({ id: 'tag_id' })
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
tronalddump/
├── src/
│   ├── TronalddumpSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TronalddumpSDK } from 'tronalddump'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
