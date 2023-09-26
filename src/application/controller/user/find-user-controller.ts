import { Request, Response } from 'express';
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { GetEntityId } from '../../../@seedwork/validate/zod-controller-validate';
import { ZodError } from 'zod';
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error';
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error';

export class FindUserController implements Controller {
  constructor(private readonly useCase: UseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = GetEntityId.parse(request.params.user_id)
      const find = await this.useCase.execute(user_id)
      if (!find) response.status(404).json({error: 'User not found'})
      return response.json(find.props).send()
    } catch (error) {
      if (error instanceof ZodError) return ZodValidate.validate(response, error)
    }
    return UnexpectedError.validate(response)
  }

}