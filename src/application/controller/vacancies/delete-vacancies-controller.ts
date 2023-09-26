import { Request, Response } from 'express';
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { GetEntityId } from '../../../@seedwork/validate/zod-controller-validate';
import { ZodError } from 'zod';
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error';
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error';

export class DeleteVacanciesController implements Controller {
  constructor(private readonly usaCase: UseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const vacancy_id = GetEntityId.parse(request.params.vacancy_id)
      const vacancyDeleted = await this.usaCase.execute(vacancy_id)
      return response.json({ 'delete_at': vacancyDeleted }).send()
    } catch (error) {
      if (error instanceof ZodError) return ZodValidate.validate(response, error)
    }
    return UnexpectedError.validate(response)
  }
}
