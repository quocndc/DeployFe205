import { IResponse } from 'src/types'

export type IToken = {
  tokenType: string
  expiresIn: number
  accessToken: string
  refreshToken: string
}
export type ITokenResponse = IResponse<IToken>
