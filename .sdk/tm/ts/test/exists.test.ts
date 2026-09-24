
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TronalddumpSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TronalddumpSDK.test()
    equal(testsdk instanceof TronalddumpSDK, true,
      'TronalddumpSDK.test() must return a client synchronously')
  })

})
