# Tronalddump SDK

Archive of Donald Trump quotes with sources, authors and tags

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About tronalddump API

The Tronald Dump API is a web archive of quotes attributed to Donald Trump, together with the sources they came from, the people who recorded them, and topical tags. It exposes quotes, sources, authors and tags as queryable resources, plus a convenience endpoint for fetching a random quote.

What you get from the API:

- Quotes attributed to Donald Trump
- Sources the quotes are drawn from
- Authors who recorded or submitted the quotes
- Tags grouping quotes by topic
- A random-quote endpoint at `GET /random/quote`

The API is served from `https://api.tronalddump.io`. Public catalogues currently flag the service as unreliable, so treat availability as best-effort and code defensively against failures.

## Try it

**TypeScript**
```bash
npm install tronalddump
```

**Python**
```bash
pip install tronalddump-sdk
```

**PHP**
```bash
composer require voxgig/tronalddump-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/tronalddump-sdk/go
```

**Ruby**
```bash
gem install tronalddump-sdk
```

**Lua**
```bash
luarocks install tronalddump-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TronalddumpSDK } from 'tronalddump'

const client = new TronalddumpSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o tronalddump-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "tronalddump": {
      "command": "/abs/path/to/tronalddump-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Author** | A contributor who recorded or submitted quotes and sources to the archive. | `/author/{author_id}` |
| **Quote** | A single quote attributed to Donald Trump, the core resource of the archive; a random quote is available at `GET /random/quote`. | `/random/quote` |
| **Source** | The originating source a quote was taken from (e.g. a speech, interview or tweet). | `/source/{source_id}` |
| **Tag** | A topical label used to group related quotes. | `/tag/{tag_value}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from tronalddump_sdk import TronalddumpSDK

client = TronalddumpSDK({})


# Load a specific author
author, err = client.Author(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'tronalddump_sdk.php';

$client = new TronalddumpSDK([]);


// Load a specific author
[$author, $err] = $client->Author(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/tronalddump-sdk/go"

client := sdk.NewTronalddumpSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Tronalddump_sdk"

client = TronalddumpSDK.new({})


# Load a specific author
author, err = client.Author(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("tronalddump_sdk")

local client = sdk.new({})


-- Load a specific author
local author, err = client:Author(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TronalddumpSDK.test()
const result = await client.Author().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TronalddumpSDK.test(None, None)
result, err = client.Author(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TronalddumpSDK::test(null, null);
[$result, $err] = $client->Author(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Author(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TronalddumpSDK.test(nil, nil)
result, err = client.Author(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Author(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the tronalddump API

- Upstream: [https://www.tronalddump.io](https://www.tronalddump.io)

---

Generated from the tronalddump API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
