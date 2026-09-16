

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AcousticbrainzSDK, BaseFeature, stdutil } from '../../..'

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


describe('HighLevelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ACOUSTICBRAINZ_TEST_LIVE=TRUE.
  afterEach(liveDelay('ACOUSTICBRAINZ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AcousticbrainzSDK.test()
    const ent = testsdk.HighLevel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ACOUSTICBRAINZ_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'high_level.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"highlevel","req":false,"short":"High-level semantic descriptors","type":"`$OBJECT`","index$":0},{"active":true,"name":"metadata","req":false,"type":"`$OBJECT`","index$":1}],"name":"high_level","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"0dad432b-16cc-4bf0-8961-fd31d124b01b","kind":"param","name":"mbid","orig":"mbid","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"n","orig":"n","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /{mbid}/high-level","json":"{\"operationId\":\"getHighLevelData\",\"parameters\":[{\"description\":\"MusicBrainz ID (MBID) of the recording\",\"in\":\"path\",\"name\":\"mbid\",\"required\":true,\"schema\":{\"example\":\"0dad432b-16cc-4bf0-8961-fd31d124b01b\",\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Offset number for submissions (0 for most recent)\",\"in\":\"query\",\"name\":\"n\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"High-level semantic music features\",\"properties\":{\"highlevel\":{\"additionalProperties\":{\"properties\":{\"all\":{\"additionalProperties\":{\"type\":\"number\"},\"type\":\"object\"},\"probability\":{\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"High-level semantic descriptors\",\"type\":\"object\"},\"metadata\":{\"properties\":{\"audio_properties\":{\"properties\":{\"bit_rate\":{\"type\":\"integer\"},\"codec\":{\"type\":\"string\"},\"length\":{\"type\":\"number\"},\"sample_rate\":{\"type\":\"integer\"}},\"type\":\"object\"},\"tags\":{\"properties\":{\"musicbrainz_recordingid\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"version\":{\"properties\":{\"essentia\":{\"type\":\"string\"},\"models_essentia_git_sha\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with high-level data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Recording not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{mbid}/high-level","segments":[{"var":"mbid"},{"lit":"high-level"}],"select":{"exist":["mbid","n"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"high_level","name__orig":"high_level","Name":"HighLevel","name_":"high_level","name-":"high-level","NAME":"HIGH_LEVEL","index$":0}, {"active":true,"entity":"high_level","key$":"BasicHighLevelFlow","kind":"basic","name":"BasicHighLevelFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"high_level_ref01","srcdatavar":"high_level_ref01_data","suffix":"_dt0"},"match":{"id":"high_level01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-high_level_ref01"}}],"index$":0}]}, 'HighLevel')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let high_level_ref01_data = Object.values(setup.data.existing.high_level)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const high_level_ref01_ent = client.HighLevel()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/high_level/HighLevelTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AcousticbrainzSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['high_level01','high_level02','high_level03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ACOUSTICBRAINZ_TEST_HIGH_LEVEL_ENTID': idmap,
    'ACOUSTICBRAINZ_TEST_LIVE': 'FALSE',
    'ACOUSTICBRAINZ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ACOUSTICBRAINZ_TEST_HIGH_LEVEL_ENTID']

  const live = 'TRUE' === env.ACOUSTICBRAINZ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ACOUSTICBRAINZ_TEST_HIGH_LEVEL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AcousticbrainzSDK(merge([
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
    explain: 'TRUE' === env.ACOUSTICBRAINZ_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
