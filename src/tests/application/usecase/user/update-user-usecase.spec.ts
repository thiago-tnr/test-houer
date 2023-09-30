import { CreateUserUseCase } from '../../../../application/useCase/user/create-user-usecase'
import { UpdateUserUseCase } from '../../../../application/useCase/user/update-user-usecase'
import { type UserProps } from '../../../../domain/user/entity/user'
import { MockUserRepository } from '../../../factory/repository'
import { CreateUserFactory } from '../../../factory/user-create-factory'

describe('UpdateUserUseCase', () => {
  const mockUserRepository = new MockUserRepository()
  const userId = '3122600b-9bc4-4cbb-af83-061fe7cbd364'
  it('should update a user successfully', async () => {
    const userToUpdate: Partial<UserProps> = {
      user_id: userId,
      name: 'Updated Name'
    }
    const mockUser = CreateUserFactory.create()
    await mockUserRepository.create(mockUser)
    // eslint-disable-next-line no-new
    new CreateUserUseCase(mockUserRepository)
    const updateUserUseCase = new UpdateUserUseCase(mockUserRepository)

    const updatedUser = await updateUserUseCase.execute({ user: userToUpdate, user_id: mockUser._id })

    expect(updatedUser).toMatchObject({
      name: 'Updated Name'
    })
  })

  it('should throw an error if user update fails', async () => {
    const create = jest.spyOn(mockUserRepository, 'update')
      .mockRejectedValue(new Error('Cannot find a User'))
    await expect(create).rejects.toThrow('Cannot find a User')
  })
})
