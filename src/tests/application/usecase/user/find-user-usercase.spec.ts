import { FindUserUseCase } from '../../../../application/useCase/user/find-user-usecase'
import { MockUserRepository } from '../../../factory/repository'
import { CreateUserFactory } from '../../../factory/user-create-factory'

describe('FindUserUseCase', () => {
  const mockUser = CreateUserFactory.create()
  const userRepository = new MockUserRepository()

  it('should find a user successfully', async () => {
    userRepository.find = jest.fn().mockResolvedValue(mockUser)

    const findUserUseCase = new FindUserUseCase(userRepository)
    const foundUser = await findUserUseCase.execute(mockUser._id!)

    expect(userRepository.find).toHaveBeenCalledWith(mockUser._id!)
    expect(foundUser).toEqual(mockUser)
  })

  it('should return null if user is not found', async () => {
    userRepository.find = jest.fn().mockResolvedValue(null)

    const findUserUseCase = new FindUserUseCase(userRepository)
    const foundUser = await findUserUseCase.execute(mockUser._id!)

    expect(userRepository.find).toHaveBeenCalledWith(mockUser._id!)
    expect(foundUser).toBeNull()
  })
})
