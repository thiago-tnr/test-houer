import { type ErrorResponseValidate } from '../interfaces/error-response-validate'
import { type Response } from 'express'

export class UnexpectedError implements ErrorResponseValidate {
  static validate (response: Response<any, Record<string, any>>): Response<any, Record<string, any>> | PromiseLike<Response<any, Record<string, any>>> {
    return response.status(500).json({ error: 'unexpected error' })
  }
}
