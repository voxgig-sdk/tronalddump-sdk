

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


describe('SourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRONALDDUMP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TronalddumpSDK.test()
    const ent = testsdk.Source()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Total number of sources","t":"`$INTEGER`","key$":"count","index$":0},"embedded":{"a":true,"h":"Embedded","n":"embedded","r":false,"t":"`$OBJECT`","key$":"embedded","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"HATEOAS links","t":"`$OBJECT`","key$":"links","index$":3},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of sources available","t":"`$INTEGER`","key$":"total","index$":4}},"id":{"field":"id","name":"id"},"name":"source","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /source/{source_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/source/{source_id}","q":{"exist":["id"]},"r":{"param":{"source_id":"id"}},"s":[{"lit":"source"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body._links`"},"index$":0},{"a":true,"co":{"id":"GET /source","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/source","q":{},"r":{},"s":[{"lit":"source"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"source","name__orig":"source","Name":"Source","name_":"source","name-":"source","NAME":"SOURCE","index$":2}, {"active":true,"entity":"source","key$":"BasicSourceFlow","kind":"basic","name":"BasicSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"source_ref01","srcdatavar":"source_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-source_ref01"}}],"index$":0}]}, 'Source', {"GET /source/{source_id}":{"protocol":"http","operationId":"getSourceById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"source_id":{"description":"Unique identifier for the source","type":"string"},"url":{"description":"URL of the source","format":"uri","type":"string"},"filename":{"description":"Filename associated with the source","type":"string"},"created_at":{"description":"The date and time when the source was created","format":"date-time","type":"string"},"updated_at":{"description":"The date and time when the source was last updated","format":"date-time","type":"string"},"_links":{"description":"HATEOAS links related to the source","type":"object"}},"x-ref":"#/components/schemas/Source"}}}},"404":{"description":"Source not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"source_id","in":"path","description":"The unique identifier of the source","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /source":{"protocol":"http","operationId":"getAllSources","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of sources","key$":"count","type":"integer"},"total":{"description":"Total number of sources available","key$":"total","type":"integer"},"_embedded":{"key$":"_embedded","properties":{"sources":{"items":{"properties":{"_links":{"description":"HATEOAS links related to the source","type":"object"},"created_at":{"description":"The date and time when the source was created","format":"date-time","type":"string"},"filename":{"description":"Filename associated with the source","type":"string"},"source_id":{"description":"Unique identifier for the source","type":"string"},"updated_at":{"description":"The date and time when the source was last updated","format":"date-time","type":"string"},"url":{"description":"URL of the source","format":"uri","type":"string"}},"type":"object","x-ref":"#/components/schemas/Source"},"type":"array"}},"type":"object"},"_links":{"description":"HATEOAS links","key$":"_links","type":"object"}},"x-ref":"#/components/schemas/SourceListResponse","index$":0}}}},"500":{"description":"Internal server error"}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let source_ref01_data = Object.values(setup.data.existing.source)[0] as any

    // LOAD
    const source_ref01_ent = client.Source()
    const source_ref01_match_dt0: any = {}
    source_ref01_match_dt0.id = source_ref01_data.id
    const source_ref01_data_dt0 = (await source_ref01_ent.load(source_ref01_match_dt0)).data()
    assert(source_ref01_data_dt0.id === source_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/source/SourceTestData.json')

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
    ['source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRONALDDUMP_TEST_SOURCE_ENTID': idmap,
    'TRONALDDUMP_TEST_LIVE': 'FALSE',
    'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRONALDDUMP_TEST_SOURCE_ENTID']

  const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRONALDDUMP_TEST_SOURCE_ENTID']
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
  
