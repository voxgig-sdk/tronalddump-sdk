
import { Context } from './Context'


class TronalddumpError extends Error {

  isTronalddumpError = true

  sdk = 'Tronalddump'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TronalddumpError
}

