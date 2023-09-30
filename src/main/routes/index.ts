import { Router } from 'express'
import { vacanciesRoutes } from './vacancies/vacancies.routes'
import { userRoutes } from './user/user.routes'
import { loginRoutes } from './login/login.routes'
import { enrollRoutes } from './enroll/enroll.routes'

export const router = Router()

router.use('/vacancies', vacanciesRoutes)
router.use('/user', userRoutes)
router.use('/login', loginRoutes)
router.use('/enroll', enrollRoutes)
