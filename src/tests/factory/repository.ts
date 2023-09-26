import User, { UserProps } from '../../domain/user/entity/user';
import UserRepositoryInterface from '../../infrastructure/user/repository/user-interface.repository';

export class MockUserRepository implements UserRepositoryInterface {
  private data: UserProps[] = [];

  async create(entity: UserProps): Promise<UserProps> {
    this.data.push(entity);
    return entity;
  }

  async update(entity: UserProps): Promise<void> {
    const existingUserIndex = this.data.findIndex((user) => user.user_id === entity.user_id);
    if (!existingUserIndex) console.log('not find user')
    if (existingUserIndex !== -1) {
      this.data[existingUserIndex] = entity;
    }
  }

  async delete(user_id: string): Promise<string> {
    const existingUserIndex = this.data.findIndex((user) => user.user_id === user_id);

    if (existingUserIndex !== -1) {
      this.data.splice(existingUserIndex, 1);
    }

    return 'User deleted';
  }

  async find(user_id: string): Promise<User> {
    const find = this.data.find((user) => user.user_id === user_id);
    if (!find) console.log('Cannot find a User')
    const user = new User(find!)
    return user
  }

  async findAll(): Promise<UserProps[]> {
    return this.data;
  }

  async findByEmail(email: string): Promise<User> {
    const find = this.data.find((user) => user.email === email);
    if (!find) console.log('Cannot find a User')
    const user = new User(find!)
    return user
  }

}
