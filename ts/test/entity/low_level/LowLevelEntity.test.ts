

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


describe('LowLevelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ACOUSTICBRAINZ_TEST_LIVE=TRUE.
  afterEach(liveDelay('ACOUSTICBRAINZ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AcousticbrainzSDK.test()
    const ent = testsdk.LowLevel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ACOUSTICBRAINZ_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'low_level.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"lowlevel","req":false,"short":"Low-level spectral and temporal features","type":"`$OBJECT`","index$":0},{"active":true,"name":"metadata","req":false,"short":"Metadata about the analysis","type":"`$OBJECT`","index$":1},{"active":true,"name":"rhythm","req":false,"short":"Rhythm features including BPM, beats, and danceability","type":"`$OBJECT`","index$":2},{"active":true,"name":"tonal","req":false,"short":"Tonal features including key, scale, chords, and harmonic characteristics","type":"`$OBJECT`","index$":3}],"name":"low_level","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"0dad432b-16cc-4bf0-8961-fd31d124b01b","kind":"param","name":"mbid","orig":"mbid","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"n","orig":"n","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /{mbid}/low-level","json":"{\"operationId\":\"getLowLevelData\",\"parameters\":[{\"description\":\"MusicBrainz ID (MBID) of the recording\",\"in\":\"path\",\"name\":\"mbid\",\"required\":true,\"schema\":{\"example\":\"0dad432b-16cc-4bf0-8961-fd31d124b01b\",\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Offset number for submissions (0 for most recent)\",\"in\":\"query\",\"name\":\"n\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Low-level acoustic features extracted from audio\",\"properties\":{\"lowlevel\":{\"description\":\"Low-level spectral and temporal features\",\"properties\":{\"hfc\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"melbands\":{\"description\":\"Multi-dimensional statistical descriptor\",\"properties\":{\"dmean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dmean2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"max\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"mean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"median\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"min\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"var\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"melbands_skewness\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"spectral_energyband_low\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"spectral_energyband_middle_low\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"metadata\":{\"description\":\"Metadata about the analysis\",\"properties\":{\"audio_properties\":{\"properties\":{\"bit_rate\":{\"description\":\"Bit rate in bits per second\",\"type\":\"integer\"},\"channels\":{\"description\":\"Number of audio channels\",\"type\":\"integer\"},\"codec\":{\"description\":\"Audio codec\",\"type\":\"string\"},\"length\":{\"description\":\"Length of audio in seconds\",\"type\":\"number\"},\"sample_rate\":{\"description\":\"Sample rate in Hz\",\"type\":\"integer\"}},\"type\":\"object\"},\"tags\":{\"properties\":{\"file_name\":{\"type\":\"string\"},\"musicbrainz_recordingid\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"version\":{\"properties\":{\"essentia\":{\"type\":\"string\"},\"essentia_git_sha\":{\"type\":\"string\"},\"extractor\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"rhythm\":{\"description\":\"Rhythm features including BPM, beats, and danceability\",\"properties\":{\"beats_count\":{\"description\":\"Number of detected beats\",\"example\":233,\"type\":\"integer\"},\"beats_loudness\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"beats_loudness_band_ratio\":{\"description\":\"Multi-dimensional statistical descriptor\",\"properties\":{\"dmean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dmean2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"max\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"mean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"median\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"min\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"var\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"beats_position\":{\"description\":\"Positions of detected beats in seconds\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"bpm\":{\"description\":\"Beats per minute\",\"example\":148.126449585,\"type\":\"number\"},\"bpm_histogram_first_peak_bpm\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"bpm_histogram_first_peak_spread\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"bpm_histogram_first_peak_weight\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"bpm_histogram_second_peak_bpm\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"bpm_histogram_second_peak_spread\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"bpm_histogram_second_peak_weight\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"danceability\":{\"description\":\"Danceability measure (0-1)\",\"example\":0.860110342503,\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"onset_rate\":{\"description\":\"Rate of note onsets\",\"type\":\"number\"}},\"type\":\"object\"},\"tonal\":{\"description\":\"Tonal features including key, scale, chords, and harmonic characteristics\",\"properties\":{\"chords_changes_rate\":{\"description\":\"Rate of chord changes\",\"type\":\"number\"},\"chords_histogram\":{\"description\":\"Histogram of chord occurrences\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"chords_key\":{\"description\":\"Key of detected chords\",\"example\":\"C#\",\"type\":\"string\"},\"chords_number_rate\":{\"description\":\"Number rate of chords\",\"type\":\"number\"},\"chords_scale\":{\"description\":\"Scale of detected chords\",\"enum\":[\"major\",\"minor\"],\"example\":\"minor\",\"type\":\"string\"},\"chords_strength\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"hpcp\":{\"description\":\"Multi-dimensional statistical descriptor\",\"properties\":{\"dmean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dmean2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"dvar2\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"max\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"mean\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"median\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"min\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"var\":{\"items\":{\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"hpcp_entropy\":{\"description\":\"Statistical descriptor with various measures\",\"properties\":{\"dmean\":{\"description\":\"Derivative mean\",\"type\":\"number\"},\"dmean2\":{\"description\":\"Second derivative mean\",\"type\":\"number\"},\"dvar\":{\"description\":\"Derivative variance\",\"type\":\"number\"},\"dvar2\":{\"description\":\"Second derivative variance\",\"type\":\"number\"},\"max\":{\"description\":\"Maximum value\",\"type\":\"number\"},\"mean\":{\"description\":\"Mean value\",\"type\":\"number\"},\"median\":{\"description\":\"Median value\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum value\",\"type\":\"number\"},\"var\":{\"description\":\"Variance\",\"type\":\"number\"}},\"type\":\"object\"},\"key_key\":{\"description\":\"Detected musical key\",\"example\":\"C#\",\"type\":\"string\"},\"key_scale\":{\"description\":\"Detected scale (major or minor)\",\"enum\":[\"major\",\"minor\"],\"example\":\"minor\",\"type\":\"string\"},\"key_strength\":{\"description\":\"Confidence of key detection\",\"example\":0.776947379112,\"type\":\"number\"},\"thpcp\":{\"description\":\"Tonal harmonic pitch class profile\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"tuning_diatonic_strength\":{\"description\":\"Strength of diatonic tuning\",\"type\":\"number\"},\"tuning_equal_tempered_deviation\":{\"description\":\"Deviation from equal temperament\",\"type\":\"number\"},\"tuning_frequency\":{\"description\":\"Detected tuning frequency in Hz\",\"example\":442.03793335,\"type\":\"number\"},\"tuning_nontempered_energy_ratio\":{\"description\":\"Ratio of non-tempered energy\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with low-level data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Recording not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{mbid}/low-level","segments":[{"var":"mbid"},{"lit":"low-level"}],"select":{"exist":["mbid","n"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"low_level","name__orig":"low_level","Name":"LowLevel","name_":"low_level","name-":"low-level","NAME":"LOW_LEVEL","index$":1}, {"active":true,"entity":"low_level","key$":"BasicLowLevelFlow","kind":"basic","name":"BasicLowLevelFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"low_level_ref01","srcdatavar":"low_level_ref01_data","suffix":"_dt0"},"match":{"id":"low_level01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-low_level_ref01"}}],"index$":0}]}, 'LowLevel')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let low_level_ref01_data = Object.values(setup.data.existing.low_level)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const low_level_ref01_ent = client.LowLevel()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/low_level/LowLevelTestData.json')

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
    ['low_level01','low_level02','low_level03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ACOUSTICBRAINZ_TEST_LOW_LEVEL_ENTID': idmap,
    'ACOUSTICBRAINZ_TEST_LIVE': 'FALSE',
    'ACOUSTICBRAINZ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ACOUSTICBRAINZ_TEST_LOW_LEVEL_ENTID']

  const live = 'TRUE' === env.ACOUSTICBRAINZ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ACOUSTICBRAINZ_TEST_LOW_LEVEL_ENTID']
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
  
