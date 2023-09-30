
import type RepositoryInterface from '../../../@seedwork/repository/repository-interface'
import { type UserProps } from '../../../domain/user/entity/user'
import type User from '../../../domain/user/entity/user'

export type UserPropsInputInterface = Partial<UserProps>
export default interface UserRepositoryInterface
  extends RepositoryInterface<UserProps, User> { }
