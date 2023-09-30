import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import type UserRepositoryInterface from '../../../infrastructure/user/repository/user-interface.repository'
import type VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository'

interface EnrollInput {
  user_id: string
  vacancy_id: string
}
export class EnrollUserInVacancyUseCase implements UseCase {
  constructor (
    private readonly userRepository: UserRepositoryInterface,
    private readonly vacancyRepository: VacanciesRepositoryInterface
  ) {}

  async execute (data: EnrollInput): Promise<any> {
    const user = await this.userRepository.find(data.user_id)
    const vacancy = await this.vacancyRepository.find(data.vacancy_id)
    if (!user || !vacancy) {
      throw new Error('User or vacancy not found')
    }
    const result = await this.userRepository.enroll(user.user_id!, vacancy.vacancy_id!)
    return result
  }
}
