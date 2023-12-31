import AppError from '../../../@seedwork/errors/app-error'
import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { type UserProps } from '../../../domain/user/entity/user'
import type UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository'

interface InputUseCaseCreateUser {
  user_id: string
  name: string
  phone: string
  email: string
  password: string
  document: string
  is_admin?: boolean
  created_at?: Date
  updated_at?: Date | null
}

export class CreateUserUseCase implements UseCase {
  constructor (private readonly repository: UserRepositoryInterface) { }
  async execute (entity: InputUseCaseCreateUser): Promise<UserProps> {
    const checkEmail = await this.repository.findByEmail(entity.email)
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    if (checkEmail) throw new AppError('Email already exists', 409)
    const created = await this.repository.create(entity)
    if (!created) throw new Error('Not possible to create a user')
    return created
  }
}
