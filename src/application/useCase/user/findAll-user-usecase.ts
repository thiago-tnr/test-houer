import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { type UserProps } from '../../../domain/user/entity/user'
import type UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository'

export class FindAllUsersUseCase implements UseCase {
  constructor (private readonly repository: UserRepositoryInterface) { }
  async execute (): Promise<UserProps[]> {
    const findUser = await this.repository.findAll()
    return findUser
  }
}
