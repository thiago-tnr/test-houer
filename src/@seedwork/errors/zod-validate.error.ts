import { Response } from 'express';
import { ZodError } from 'zod';
import { ErrorResponseValidate } from '../interfaces/error-response-validate';

export class ZodValidate implements ErrorResponseValidate {
    static validate(response: Response<any, Record<string, any>>, error: Error): Response<any, Record<string, any>> | PromiseLike<Response<any, Record<string, any>>> {
    return response.status(400).json({ error: error });
  }
}
