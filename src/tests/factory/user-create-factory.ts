import User from '../../domain/user/entity/user'

interface createUserFake {
  user_id: string
  name: string
  phone: string
  email: string
  document: string
  is_admin?: boolean
  createdAt?: Date
  updatedAt?: Date | null
}

export class CreateUserFactory {
  static create() {
    const userFake = {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      password: 'any_password',
      document: '12345',
    }
    return User.create(userFake) as User
  }
}