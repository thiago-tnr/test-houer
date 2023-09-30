import { LoginUserController } from '../../../application/controller/auth/login-controller'
import { CreateUserController } from '../../../application/controller/user/create-user-controller'
import { DeleteUserController } from '../../../application/controller/user/delete-user-controller'
import { FindUserController } from '../../../application/controller/user/find-user-controller'
import { FindAllUsersController } from '../../../application/controller/user/findAll-user-controller'
import { UpdateUserController } from '../../../application/controller/user/update-user-controller'
import LoginUserUseCase from '../../../application/useCase/auth/login-usecase'
import { CreateUserUseCase } from '../../../application/useCase/user/create-user-usecase'
import { DeleteUserUseCase } from '../../../application/useCase/user/delete-user-usecase'
import { FindUserUseCase } from '../../../application/useCase/user/find-user-usecase'
import { FindAllUsersUseCase } from '../../../application/useCase/user/findAll-user-usecase'
import { UpdateUserUseCase } from '../../../application/useCase/user/update-user-usecase'
import { userRepository } from './repository-dependency'

const createUserUseCase = new CreateUserUseCase(userRepository)
export const createUserController = new CreateUserController(createUserUseCase)

const deleteUserUseCase = new DeleteUserUseCase(userRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)

const findUserUseCase = new FindUserUseCase(userRepository)
export const findUserController = new FindUserController(findUserUseCase)

const updateUserUseCase = new UpdateUserUseCase(userRepository)
export const updateUserController = new UpdateUserController(updateUserUseCase)

const findAllUserUseCase = new FindAllUsersUseCase(userRepository)
export const findAllUserController = new FindAllUsersController(findAllUserUseCase)

const loginUserUseCase = new LoginUserUseCase(userRepository)
export const loginUserController = new LoginUserController(loginUserUseCase)
