import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { EnrollValidate } from '../../../@seedwork/validate/zod-controller-validate';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { ZodError } from 'zod';
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error';
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error';

export class EnrollUserInVacancyController implements Controller {
  constructor(private readonly useCase: UseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { user_id, vacancy_id} = EnrollValidate.parse(request.body)
      const enrolled = await this.useCase.execute({user_id, vacancy_id})
      console.log(enrolled)
      return response.json(enrolled).status(201).send()
    } catch (error) {
      if (error instanceof ZodError) return ZodValidate.validate(response, error)
    }
    return UnexpectedError.validate(response)
  }
}
