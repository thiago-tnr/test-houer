import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { type Controller } from '../../../@seedwork/interfaces/controller-interface'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { LoginValidate } from '../../../@seedwork/validate/zod-controller-validate'
import AppError from '../../../@seedwork/errors/app-error'
import { ZodError } from 'zod'
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error'

export class LoginUserController implements Controller {
  constructor (private readonly usecase: UseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = LoginValidate.parse(request.body)
      const user = await this.usecase.execute({ email, password })
      console.log(user)
      if (!user) return response.status(404).json({ error: 'User not Found or email or password is wrong' })
      console.log(user.user_id)
      const token = jwt.sign({
        id: user.user_id,
        is_admin: user.is_admin
      }, process.env.JWT_SECRET_KEY!,
      { expiresIn: '1h' })

      const refreshToken = jwt.sign({
        id: user.user_id
      }, process.env.REFRESH_JWT_SEC!,
      { expiresIn: '12h' })

      return response.status(200).json({ token, refreshToken })
    } catch (error) {
      if (error instanceof ZodError) return await ZodValidate.validate(response, error)
      if (error instanceof AppError) return response.status(error.statusCode).json(error.message)
      console.error(error)
    }
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}
