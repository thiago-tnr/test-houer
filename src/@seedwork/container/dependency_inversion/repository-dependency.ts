import { PrismaClient } from '@prisma/client'
import { VacanciesRepository } from '../../../infrastructure/vacancies/repository/vacancies.repository'
import { UserRepository } from '../../../infrastructure/user/repository/user.repository'

export const vacanciesRepository = new VacanciesRepository(new PrismaClient())
export const userRepository = new UserRepository(new PrismaClient())
