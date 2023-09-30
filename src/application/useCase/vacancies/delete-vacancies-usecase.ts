import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import type VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository'

export class DeleteVacanciesUseCase implements UseCase {
  constructor (private readonly repository: VacanciesRepositoryInterface) { }
  async execute (vacancies_id: string): Promise<Date> {
    const deleted = await this.repository.delete(vacancies_id)
    if (!deleted) throw new Error('Error to delete a vacancy')
    return deleted
  }
}
