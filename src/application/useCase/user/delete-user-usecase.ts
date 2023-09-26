import { UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository'

export class DeleteUserUseCase implements UseCase {
  constructor(private readonly repository: UserRepositoryInterface) { }
  async execute(user_id: string): Promise<Date> {
    const deleted = await this.repository.delete(user_id)
    if (!deleted) throw new Error('Error to delete a user')
    return deleted
  }
}