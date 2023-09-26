import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { UserProps } from '../../../domain/user/entity/user';
import UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository';

export class FindUserUseCase implements UseCase {
  constructor(private readonly repository: UserRepositoryInterface) { }
  async execute(user_id: string): Promise<UserProps | null> {
    const findUser = await this.repository.find(user_id)
    if (!findUser) return null
    return findUser
  }
}