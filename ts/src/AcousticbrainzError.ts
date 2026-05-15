
import { Context } from './Context'


class AcousticbrainzError extends Error {

  isAcousticbrainzError = true

  sdk = 'Acousticbrainz'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AcousticbrainzError
}

