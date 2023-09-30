import { type Request, type Response } from 'express'
import { type Controller } from '../../../@seedwork/interfaces/controller-interface'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { CreateVacancySchema } from '../../../@seedwork/validate/zod-controller-validate'
import { ZodError } from 'zod'
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error'
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error'

interface InputCreateVacancies {
  id?: string
  title: string
  description: string
  requirements: string
  type: string
  is_active?: boolean
  created_at?: Date
}

export class CreateVacanciesController implements Controller {
  constructor (private readonly useCase: UseCase) { }
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const customerDto: InputCreateVacancies = CreateVacancySchema.parse(request.body)
      const created = await this.useCase.execute(customerDto)
      return response.json(created).status(201).send()
    } catch (error) {
      if (error instanceof ZodError) return await ZodValidate.validate(response, error)
    }
    return await UnexpectedError.validate(response)
  }
}
