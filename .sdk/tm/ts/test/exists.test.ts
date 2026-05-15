
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AcousticbrainzSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AcousticbrainzSDK.test()
    equal(null !== testsdk, true)
  })

})
