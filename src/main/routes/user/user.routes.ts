import { Router } from 'express'
import { createUserController, deleteUserController, findAllUserController, findUserController, updateUserController } from '../../../@seedwork/container/dependency_inversion/user-dependency'

export const userRoutes = Router()

userRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response)
})
userRoutes.delete('/:user_id', (request, response) => {
  return deleteUserController.handle(request, response)
})
userRoutes.get('/find/:user_id', (request, response) => {
  return findUserController.handle(request, response)
})
userRoutes.patch('/update/:user_id', (request, response) => {
  return updateUserController.handle(request, response)
})
userRoutes.get('/find', (request, response) => {
  return findAllUserController.handle(request, response)
})
