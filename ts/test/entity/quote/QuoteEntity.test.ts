

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TronalddumpSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('QuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRONALDDUMP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TronalddumpSDK.test()
    const ent = testsdk.Quote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"appeared_at","req":false,"short":"The date and time when the quote appeared","type":"`$STRING`","index$":0},{"active":true,"name":"count","req":false,"short":"Total number of quotes found","type":"`$INTEGER`","index$":1},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The date and time when the quote was created in the system","type":"`$STRING`","index$":2},{"active":true,"name":"embedded","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"links","req":false,"short":"HATEOAS links for pagination","type":"`$OBJECT`","index$":5},{"active":true,"name":"quote_id","req":false,"short":"Unique identifier for the quote","type":"`$STRING`","index$":6},{"active":true,"name":"tags","req":false,"short":"Tags associated with the quote","type":"`$ARRAY`","index$":7},{"active":true,"name":"total","req":false,"short":"Total number of quotes available","type":"`$INTEGER`","index$":8},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The date and time when the quote was last updated","type":"`$STRING`","index$":9},{"active":true,"name":"value","req":false,"short":"The actual quote text","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"quote","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /random/quote","json":"{\"operationId\":\"getRandomQuote\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"author\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the author\",\"type\":\"object\"},\"author_id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"bio\":{\"description\":\"Biography of the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly slug for the author\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"source\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links related to the quote\",\"type\":\"object\"},\"appeared_at\":{\"description\":\"The date and time when the quote appeared\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"description\":\"The date and time when the quote was created in the system\",\"format\":\"date-time\",\"type\":\"string\"},\"quote_id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the quote\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The date and time when the quote was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"The actual quote text\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Quote not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/quote","segments":[{"lit":"random"},{"lit":"quote"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":0,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"query","orig":"query","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":25,"kind":"query","name":"size","orig":"size","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /search/quote","json":"{\"operationId\":\"searchQuotes\",\"parameters\":[{\"description\":\"Search query string\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"size\",\"required\":false,\"schema\":{\"default\":25,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"quotes\":{\"items\":{\"properties\":{\"_embedded\":{\"properties\":{\"author\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the author\",\"type\":\"object\"},\"author_id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"bio\":{\"description\":\"Biography of the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly slug for the author\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"source\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links related to the quote\",\"type\":\"object\"},\"appeared_at\":{\"description\":\"The date and time when the quote appeared\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"description\":\"The date and time when the quote was created in the system\",\"format\":\"date-time\",\"type\":\"string\"},\"quote_id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the quote\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The date and time when the quote was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"The actual quote text\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links for pagination\",\"type\":\"object\"},\"count\":{\"description\":\"Total number of quotes found\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of quotes available\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"No quotes found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/search/quote","segments":[{"lit":"search"},{"lit":"quote"}],"select":{"exist":["page","query","size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"quote_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /quote/{quote_id}","json":"{\"operationId\":\"getQuoteById\",\"parameters\":[{\"description\":\"The unique identifier of the quote\",\"in\":\"path\",\"name\":\"quote_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"author\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the author\",\"type\":\"object\"},\"author_id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"bio\":{\"description\":\"Biography of the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly slug for the author\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"source\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links related to the quote\",\"type\":\"object\"},\"appeared_at\":{\"description\":\"The date and time when the quote appeared\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"description\":\"The date and time when the quote was created in the system\",\"format\":\"date-time\",\"type\":\"string\"},\"quote_id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the quote\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The date and time when the quote was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"The actual quote text\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Quote not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/quote/{quote_id}","rename":{"param":{"quote_id":"id"}},"segments":[{"lit":"quote"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"quote","name__orig":"quote","Name":"Quote","name_":"quote","name-":"quote","NAME":"QUOTE","index$":1}, {"active":true,"entity":"quote","key$":"BasicQuoteFlow","kind":"basic","name":"BasicQuoteFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"quote_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"quote_ref01","srcdatavar":"quote_ref01_data","suffix":"_dt0"},"match":{"id":"quote01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-quote_ref01"}}],"index$":1}]}, 'Quote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let quote_ref01_data = Object.values(setup.data.existing.quote)[0] as any

    // LIST
    const quote_ref01_ent = client.Quote()
    const quote_ref01_match: any = {}

    const quote_ref01_list = (await quote_ref01_ent.list(quote_ref01_match)).map((e: any) => e.data())


    // LOAD
    const quote_ref01_match_dt0: any = {}
    quote_ref01_match_dt0.id = quote_ref01_data.id
    const quote_ref01_data_dt0 = (await quote_ref01_ent.load(quote_ref01_match_dt0)).data()
    assert(quote_ref01_data_dt0.id === quote_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/quote/QuoteTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TronalddumpSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['quote01','quote02','quote03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRONALDDUMP_TEST_QUOTE_ENTID': idmap,
    'TRONALDDUMP_TEST_LIVE': 'FALSE',
    'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRONALDDUMP_TEST_QUOTE_ENTID']

  const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRONALDDUMP_TEST_QUOTE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TronalddumpSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TRONALDDUMP_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
