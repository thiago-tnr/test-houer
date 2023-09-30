import { CreateUserUseCase } from '../../../../application/useCase/user/create-user-usecase'
import { MockUserRepository } from '../../../factory/repository'
import { CreateUserFactory } from '../../../factory/user-create-factory'

interface UserProps {
  user_id: string
  name: string
  phone: string
  email: string
  password: string
  document: string
  is_admin?: boolean
  createdAt?: Date
  updatedAt?: Date | null
}

describe('CreateUserUseCase', () => {
  const mockRepository = new MockUserRepository()
  const mockUser = CreateUserFactory.create()
  it('should create a user successfully', async () => {
    await mockRepository.create(mockUser)

    const useCase = new CreateUserUseCase(mockRepository)

    const createdUser = await useCase.execute(mockUser as UserProps)

    expect(createdUser).toMatchObject({
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      document: '12345'
    })
  })

  it('should throw an error if user creation fails', async () => {
    const create = jest.spyOn(mockRepository, 'create')
      .mockRejectedValue(new Error('not possible to create a user'))
    await expect(create).rejects.toThrow('not possible to create a user')
  })
})
