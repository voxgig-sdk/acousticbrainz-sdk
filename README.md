# Acousticbrainz SDK

Query crowdsourced acoustic and semantic descriptors for music recordings, indexed by MusicBrainz ID

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About AcousticBrainz API

[AcousticBrainz](https://acousticbrainz.org/) is a crowdsourced database of acoustic descriptors extracted from music recordings. It was a joint project between the [Music Technology Group](https://www.upf.edu/web/mtg) at Universitat Pompeu Fabra (Barcelona) and the [MusicBrainz](https://musicbrainz.org/) project, with audio analysis performed by the open-source [Essentia](https://essentia.upf.edu/) toolkit. New submissions stopped in 2022, but the API at `https://acousticbrainz.org/api/v1` continues to serve the accumulated dataset.

What you get from the API:

- **Low-level descriptors** — spectral features (centroid, rolloff, entropy, MFCC, mel-band, bark-band), loudness and dynamics, zero-crossing rate, rhythm (BPM, onsets, beat positions), and tonal analysis (key, scale, chord progressions), with statistical summaries (mean, median, variance, min, max)
- **High-level descriptors** — semantic classifier outputs for genre, mood, danceability, and other music-understanding tasks, derived from the low-level features
- **Lookups by MusicBrainz recording ID (MBID)** so results join cleanly with MusicBrainz catalog metadata

The API is read-only and unauthenticated. Because the project is in archival mode, expect some endpoints to be intermittently slow or to return errors for recordings that were never analysed; client code should tolerate missing data.

## Try it

**TypeScript**
```bash
npm install acousticbrainz
```

**Python**
```bash
pip install acousticbrainz-sdk
```

**PHP**
```bash
composer require voxgig/acousticbrainz-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/acousticbrainz-sdk/go
```

**Ruby**
```bash
gem install acousticbrainz-sdk
```

**Lua**
```bash
luarocks install acousticbrainz-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AcousticbrainzSDK } from 'acousticbrainz'

const client = new AcousticbrainzSDK({})

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
cd go-mcp && go build -o acousticbrainz-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "acousticbrainz": {
      "command": "/abs/path/to/acousticbrainz-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **HighLevel** | Semantic, classifier-derived descriptors for a recording (genre, mood, danceability, etc.), looked up by MusicBrainz recording ID under the `/api/v1` high-level endpoint | `/{mbid}/high-level` |
| **LowLevel** | Raw acoustic features extracted by Essentia — spectral, rhythm, tonal, loudness and MFCC/mel/bark-band statistics — looked up by MusicBrainz recording ID under the `/api/v1` low-level endpoint | `/{mbid}/low-level` |
| **Metadata** | Recording-level metadata associated with an analysis submission, used to resolve and describe the MusicBrainz recordings backing each acoustic data document | `/{mbid}/count` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from acousticbrainz_sdk import AcousticbrainzSDK

client = AcousticbrainzSDK({})


# Load a specific highlevel
highlevel, err = client.HighLevel(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'acousticbrainz_sdk.php';

$client = new AcousticbrainzSDK([]);


// Load a specific highlevel
[$highlevel, $err] = $client->HighLevel(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/acousticbrainz-sdk/go"

client := sdk.NewAcousticbrainzSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Acousticbrainz_sdk"

client = AcousticbrainzSDK.new({})


# Load a specific highlevel
highlevel, err = client.HighLevel(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("acousticbrainz_sdk")

local client = sdk.new({})


-- Load a specific highlevel
local highlevel, err = client:HighLevel(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AcousticbrainzSDK.test()
const result = await client.HighLevel().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AcousticbrainzSDK.test(None, None)
result, err = client.HighLevel(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AcousticbrainzSDK::test(null, null);
[$result, $err] = $client->HighLevel(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.HighLevel(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AcousticbrainzSDK.test(nil, nil)
result, err = client.HighLevel(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:HighLevel(nil):load(
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

## Using the AcousticBrainz API

- Upstream: [https://acousticbrainz.org/](https://acousticbrainz.org/)
- API docs: [https://acousticbrainz.readthedocs.io/](https://acousticbrainz.readthedocs.io/)

- All AcousticBrainz data is released under the [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) public-domain dedication
- Recordings are identified by [MusicBrainz](https://musicbrainz.org/) IDs (MBIDs); MusicBrainz metadata has its own licensing terms
- The project ran from 2015 to 2022 and is no longer accepting new submissions, but the existing dataset and API remain accessible
- No attribution is legally required, though crediting AcousticBrainz and the MusicBrainz/MTG-UPF collaboration is encouraged

---

Generated from the AcousticBrainz API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
