import { type Request, type Response } from 'express'
import { type Controller } from '../../../@seedwork/interfaces/controller-interface'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { GetEntityId, UpdateUserSchema } from '../../../@seedwork/validate/zod-controller-validate'
import { ZodError } from 'zod'
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error'
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error'

export class UpdateUserController implements Controller {
  constructor (private readonly useCase: UseCase) { }
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const user_id = GetEntityId.parse(request.params.user_id)
      const user = UpdateUserSchema.parse(request.body)
      const update = await this.useCase.execute({ user, user_id })
      if (!update) return response.status(404).json({ error: 'Cannot found a User' })
      return response.json(update)
    } catch (error) {
      if (error instanceof ZodError) return await ZodValidate.validate(response, error)
    }
    return await UnexpectedError.validate(response)
  }
}
