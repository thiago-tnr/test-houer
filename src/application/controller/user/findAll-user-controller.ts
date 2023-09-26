import { Request, Response } from 'express';
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';

export class FindAllUsersController implements Controller {
  constructor(private readonly useCase: UseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const findAll = await this.useCase.execute()
    return response.json(findAll).send()
  }
}
