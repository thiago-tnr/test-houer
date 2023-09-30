import { EnrollUserInVacancyController } from '../../../application/controller/enroll/enroll-user-in-vacancy-controller'
import { EnrollUserInVacancyUseCase } from '../../../application/useCase/enroll/enroll-user-in-vacancy-usecase'
import { userRepository, vacanciesRepository } from './repository-dependency'

const enrollUserInVacancyUseCase = new EnrollUserInVacancyUseCase(userRepository, vacanciesRepository)
export const enrollUserInVacancyController = new EnrollUserInVacancyController(enrollUserInVacancyUseCase)
