import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { type Controller } from '../../../@seedwork/interfaces/controller-interface'
import { EnrollValidate } from '../../../@seedwork/validate/zod-controller-validate'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { ZodError } from 'zod'
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error'
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error'

export class EnrollUserInVacancyController implements Controller {
  constructor (private readonly useCase: UseCase) {}
  async handle (request: Request, response: Response): Promise<any> {
    try {
      const authHeader: any = request.headers.authorization
      const token = authHeader.split(' ')[1]
      const decodedToken: any = jwt.decode(token)
      const user_id = decodedToken.id!
      console.log(decodedToken)
      const { vacancy_id } = EnrollValidate.parse(request.body)
      const enrolled = await this.useCase.execute({ user_id, vacancy_id })
      console.log(enrolled)
      return response.json(enrolled).status(201).send()
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) return await ZodValidate.validate(response, error)
    }
    return await UnexpectedError.validate(response)
  }
}
