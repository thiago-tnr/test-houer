import { Router } from 'express'
import { enrollUserInVacancyController } from '../../../@seedwork/container/dependency_inversion/enroll-dependency'

export const enrollRoutes = Router()

enrollRoutes.post('/', (request, response) => {
  return enrollUserInVacancyController.handle(request, response)
})
