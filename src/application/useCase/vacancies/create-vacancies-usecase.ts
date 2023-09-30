import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import type VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository'

interface InputUseCaseCreateVacancies {
  id: string
  title: string
  description: string
  requirements: string
  type: string
  is_active: boolean
  created_at: Date
}

export class CreateVacanciesUseCase implements UseCase {
  constructor (private readonly repository: VacanciesRepositoryInterface) { }
  async execute (entity: InputUseCaseCreateVacancies): Promise<any> {
    const created = await this.repository.create(entity)
    if (!created) throw new Error('not possible to create a vacancy')
    return created
  }
}
