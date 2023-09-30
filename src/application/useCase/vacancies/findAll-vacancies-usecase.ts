import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { type VacanciesProps } from '../../../domain/vacancies/entity/vacancy'
import type VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository'

export class FindAllVacanciesUseCase implements UseCase {
  constructor (private readonly repository: VacanciesRepositoryInterface) { }
  async execute (): Promise<VacanciesProps[]> {
    const findVacancy = await this.repository.findAll()
    return findVacancy
  }
}
