import AppError from '../../../@seedwork/errors/app-error';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { UserProps } from '../../../domain/user/entity/user';
import UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository';

type UserPropsToUpdate = Partial<UserProps> | null
type UpdateUsersProps = { user: UserPropsToUpdate, user_id: string }
export class UpdateUserUseCase implements UseCase {
  constructor(private readonly repository: UserRepositoryInterface) { }
  async execute(data: UpdateUsersProps): Promise<UserPropsToUpdate> {
    const findUser = await this.repository.find(data.user_id!)
    console.log(findUser)
    if(!findUser) return null

    findUser.updated_at = new Date()
    findUser.changeName(data.user!.name ?? findUser.name)
    findUser.changePhone(data.user!.phone ?? findUser.phone)
    findUser.changeEmail(data.user!.email ?? findUser.email)
    findUser.changeDocument(data.user!.document ?? findUser.document)
    data.user!.is_admin ? findUser.adminActivate() : findUser.adminDeactivate()

    await this.repository.update(findUser)

    return {
      user_id: findUser.user_id,
      name: findUser.name,
      phone: findUser.phone,
      email: findUser.email,
      document: findUser.document,
      is_admin: findUser.is_admin,
      updated_at: findUser.updated_at
    }
  }

}