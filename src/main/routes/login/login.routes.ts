import { Router } from 'express'
import { loginUserController } from '../../../@seedwork/container/dependency_inversion/user-dependency'

export const loginRoutes = Router()

loginRoutes.post('/', (request, response) => {
  return loginUserController.handle(request, response)
})
