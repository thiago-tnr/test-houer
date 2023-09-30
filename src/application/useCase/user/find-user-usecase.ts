import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { type UserProps } from '../../../domain/user/entity/user'
import type UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository'

export class FindUserUseCase implements UseCase {
  constructor (private readonly repository: UserRepositoryInterface) { }
  async execute (user_id: string): Promise<UserProps | null> {
    const find = await this.repository.find(user_id)
    if (!find) return null
    return find
  }
}
