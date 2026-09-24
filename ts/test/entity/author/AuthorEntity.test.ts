

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


describe('AuthorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRONALDDUMP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TronalddumpSDK.test()
    const ent = testsdk.Author()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'author.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Total number of authors","t":"`$INTEGER`","key$":"count","index$":0},"embedded":{"a":true,"h":"Embedded","n":"embedded","r":false,"t":"`$OBJECT`","key$":"embedded","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"HATEOAS links","t":"`$OBJECT`","key$":"links","index$":3},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of authors available","t":"`$INTEGER`","key$":"total","index$":4}},"id":{"field":"id","name":"id"},"name":"author","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /author/{author_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"author_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/author/{author_id}","q":{"exist":["id"]},"r":{"param":{"author_id":"id"}},"s":[{"lit":"author"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body._links`"},"index$":0},{"a":true,"co":{"id":"GET /author","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/author","q":{},"r":{},"s":[{"lit":"author"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"author","name__orig":"author","Name":"Author","name_":"author","name-":"author","NAME":"AUTHOR","index$":0}, {"active":true,"entity":"author","key$":"BasicAuthorFlow","kind":"basic","name":"BasicAuthorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"author_ref01","srcdatavar":"author_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-author_ref01"}}],"index$":0}]}, 'Author', {"GET /author/{author_id}":{"protocol":"http","operationId":"getAuthorById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"author_id":{"description":"Unique identifier for the author","type":"string"},"name":{"description":"Name of the author","type":"string"},"slug":{"description":"URL-friendly slug for the author","type":"string"},"bio":{"description":"Biography of the author","type":"string"},"_links":{"description":"HATEOAS links related to the author","type":"object"}},"x-ref":"#/components/schemas/Author"}}}},"404":{"description":"Author not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"author_id","in":"path","description":"The unique identifier of the author","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /author":{"protocol":"http","operationId":"getAllAuthors","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of authors","key$":"count","type":"integer"},"total":{"description":"Total number of authors available","key$":"total","type":"integer"},"_embedded":{"key$":"_embedded","properties":{"authors":{"items":{"properties":{"_links":{"description":"HATEOAS links related to the author","type":"object"},"author_id":{"description":"Unique identifier for the author","type":"string"},"bio":{"description":"Biography of the author","type":"string"},"name":{"description":"Name of the author","type":"string"},"slug":{"description":"URL-friendly slug for the author","type":"string"}},"type":"object","x-ref":"#/components/schemas/Author"},"type":"array"}},"type":"object"},"_links":{"description":"HATEOAS links","key$":"_links","type":"object"}},"x-ref":"#/components/schemas/AuthorListResponse","index$":0}}}},"500":{"description":"Internal server error"}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let author_ref01_data = Object.values(setup.data.existing.author)[0] as any

    // LOAD
    const author_ref01_ent = client.Author()
    const author_ref01_match_dt0: any = {}
    author_ref01_match_dt0.id = author_ref01_data.id
    const author_ref01_data_dt0 = (await author_ref01_ent.load(author_ref01_match_dt0)).data()
    assert(author_ref01_data_dt0.id === author_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/author/AuthorTestData.json')

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
    ['author01','author02','author03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRONALDDUMP_TEST_AUTHOR_ENTID': idmap,
    'TRONALDDUMP_TEST_LIVE': 'FALSE',
    'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRONALDDUMP_TEST_AUTHOR_ENTID']

  const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRONALDDUMP_TEST_AUTHOR_ENTID']
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
  
