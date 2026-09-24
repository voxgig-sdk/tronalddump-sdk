

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRONALDDUMP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TronalddumpSDK.test()
    const ent = testsdk.Tag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Total number of quotes found","t":"`$INTEGER`","key$":"count","index$":0},"embedded":{"a":true,"h":"Embedded","n":"embedded","r":false,"t":"`$OBJECT`","key$":"embedded","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"HATEOAS links for pagination","t":"`$OBJECT`","key$":"links","index$":3},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of quotes available","t":"`$INTEGER`","key$":"total","index$":4}},"id":{"field":"id","name":"id"},"name":"tag","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /tag/{tag_value}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tag_value","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/tag/{tag_value}","q":{"exist":["id","page","size"]},"r":{"param":{"tag_value":"id"}},"s":[{"lit":"tag"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /tag","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/tag","q":{},"r":{},"s":[{"lit":"tag"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tag","name__orig":"tag","Name":"Tag","name_":"tag","name-":"tag","NAME":"TAG","index$":3}, {"active":true,"entity":"tag","key$":"BasicTagFlow","kind":"basic","name":"BasicTagFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tag_ref01","srcdatavar":"tag_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tag_ref01"}}],"index$":0}]}, 'Tag', {"GET /tag/{tag_value}":{"protocol":"http","operationId":"getQuotesByTag","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of quotes found","key$":"count","type":"integer"},"total":{"description":"Total number of quotes available","key$":"total","type":"integer"},"_embedded":{"key$":"_embedded","properties":{"quotes":{"items":{"properties":{"_embedded":{"key$":"_embedded","properties":{"author":{"items":{"properties":{"_links":{"description":"HATEOAS links related to the author","type":"object"},"author_id":{"description":"Unique identifier for the author","type":"string"},"bio":{"description":"Biography of the author","type":"string"},"name":{"description":"Name of the author","type":"string"},"slug":{"description":"URL-friendly slug for the author","type":"string"}},"type":"object","x-ref":"#/components/schemas/Author"},"type":"array"},"source":{"items":{"properties":{"_links":{"description":"HATEOAS links related to the source","type":"object"},"created_at":{"description":"The date and time when the source was created","format":"date-time","type":"string"},"filename":{"description":"Filename associated with the source","type":"string"},"source_id":{"description":"Unique identifier for the source","type":"string"},"updated_at":{"description":"The date and time when the source was last updated","format":"date-time","type":"string"},"url":{"description":"URL of the source","format":"uri","type":"string"}},"type":"object","x-ref":"#/components/schemas/Source"},"type":"array"}},"type":"object"},"_links":{"description":"HATEOAS links related to the quote","key$":"_links","type":"object"},"appeared_at":{"description":"The date and time when the quote appeared","format":"date-time","key$":"appeared_at","type":"string"},"created_at":{"description":"The date and time when the quote was created in the system","format":"date-time","key$":"created_at","type":"string"},"quote_id":{"description":"Unique identifier for the quote","key$":"quote_id","type":"string"},"tags":{"description":"Tags associated with the quote","items":{"type":"string"},"key$":"tags","type":"array"},"updated_at":{"description":"The date and time when the quote was last updated","format":"date-time","key$":"updated_at","type":"string"},"value":{"description":"The actual quote text","key$":"value","type":"string"}},"type":"object","x-ref":"#/components/schemas/Quote"},"type":"array"}},"type":"object"},"_links":{"description":"HATEOAS links for pagination","key$":"_links","type":"object"}},"x-ref":"#/components/schemas/QuoteSearchResponse","index$":0}}}},"404":{"description":"Tag not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"tag_value","in":"path","description":"The tag value to filter quotes","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":0},"index$":1},{"name":"size","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","default":25},"index$":2}],"securitySource":"unspecified"},"GET /tag":{"protocol":"http","operationId":"getAllTags","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of tags","key$":"count","type":"integer"},"total":{"description":"Total number of tags available","key$":"total","type":"integer"},"_embedded":{"key$":"_embedded","properties":{"tags":{"items":{"properties":{"_links":{"description":"HATEOAS links related to the tag","type":"object"},"value":{"description":"The tag value","type":"string"}},"type":"object","x-ref":"#/components/schemas/Tag"},"type":"array"}},"type":"object"},"_links":{"description":"HATEOAS links","key$":"_links","type":"object"}},"x-ref":"#/components/schemas/TagListResponse","index$":0}}}},"500":{"description":"Internal server error"}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tag_ref01_data = Object.values(setup.data.existing.tag)[0] as any

    // LOAD
    const tag_ref01_ent = client.Tag()
    const tag_ref01_match_dt0: any = {}
    tag_ref01_match_dt0.id = tag_ref01_data.id
    const tag_ref01_data_dt0 = (await tag_ref01_ent.load(tag_ref01_match_dt0)).data()
    assert(tag_ref01_data_dt0.id === tag_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tag/TagTestData.json')

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
    ['tag01','tag02','tag03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRONALDDUMP_TEST_TAG_ENTID': idmap,
    'TRONALDDUMP_TEST_LIVE': 'FALSE',
    'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRONALDDUMP_TEST_TAG_ENTID']

  const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRONALDDUMP_TEST_TAG_ENTID']
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
  
