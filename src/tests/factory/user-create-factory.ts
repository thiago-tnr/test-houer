import User from '../../domain/user/entity/user'

export class CreateUserFactory {
  static create (): User {
    const userFake = {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      password: 'any_password',
      document: '12345'
    }
    return User.create(userFake) as User
  }
}
