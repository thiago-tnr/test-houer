import { type Request, type Response } from 'express'
import { type Controller } from '../../../@seedwork/interfaces/controller-interface'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'

export class FindAllVacanciesController implements Controller {
  constructor (private readonly useCase: UseCase) { }
  async handle (request: Request, response: Response): Promise<Response> {
    const findAll = await this.useCase.execute()
    return response.json(findAll).send().status(200)
  }
}
