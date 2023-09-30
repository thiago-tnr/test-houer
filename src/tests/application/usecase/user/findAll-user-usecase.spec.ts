import { FindAllUsersUseCase } from '../../../../application/useCase/user/findAll-user-usecase'
import { type UserProps } from '../../../../domain/user/entity/user'
import { MockUserRepository } from '../../../factory/repository'
import { CreateUserFactory } from '../../../factory/user-create-factory'

describe('FindAllUsersUseCase', () => {
  const create = CreateUserFactory.create()
  const userRepository = new MockUserRepository()
  it('should find all users successfully', async () => {
    const mockUsers: UserProps[] = []
    const numberOfTimes = 10

    for (let i = 0; i < numberOfTimes; i++) {
      mockUsers.push(create)
    }

    userRepository.findAll = jest.fn().mockResolvedValue(mockUsers)

    const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
    const foundUsers = await findAllUsersUseCase.execute()

    expect(userRepository.findAll).toHaveBeenCalled()
    expect(foundUsers).toEqual(mockUsers)
  })

  it('should return an empty array if no users are found', async () => {
    userRepository.findAll = jest.fn().mockResolvedValue([])

    const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)

    const foundUsers = await findAllUsersUseCase.execute()

    expect(userRepository.findAll).toHaveBeenCalled()
    expect(foundUsers).toEqual([])
  })
})
