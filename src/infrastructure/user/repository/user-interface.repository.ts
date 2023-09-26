
import RepositoryInterface from '../../../@seedwork/repository/repository-interface';
import User, { UserProps } from '../../../domain/user/entity/user';

export type UserPropsInputInterface = Partial<UserProps>
export default interface UserRepositoryInterface
  extends RepositoryInterface<UserProps, User> { }