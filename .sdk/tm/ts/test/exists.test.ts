
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TronalddumpSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TronalddumpSDK.test()
    equal(null !== testsdk, true)
  })

})
