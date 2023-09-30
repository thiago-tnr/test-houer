import AppError from '../../../@seedwork/errors/app-error'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import type User from '../../../domain/user/entity/user'
import { type UserRepository } from '../../../infrastructure/user/repository/user.repository'
import bcrypt from 'bcrypt'

interface Request {
  email: string
  password: string
  token?: string
}

export default class LoginUserUseCase implements UseCase {
  constructor (private readonly repository: UserRepository) {}
  public async execute ({ email, password }: Request): Promise<User | null> {
    try {
      if (email && password) {
        const userLogin = await this.repository.findByEmail(email)
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        if (!userLogin) throw new AppError('User Notfound', 404)

        const hashedPassword = userLogin.password
        const compareHashedPassword = await bcrypt.compare(password, hashedPassword)

        if (!compareHashedPassword) {
          return null
        }

        return userLogin
      } else {
        throw new AppError('Email or password wrong, try again', 403)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
