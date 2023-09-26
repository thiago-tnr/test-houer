import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { VacanciesProps } from '../../../domain/vacancies/entity/vacancy';
import VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository';

export class FindVacancyUseCase implements UseCase {
  constructor(private readonly repository: VacanciesRepositoryInterface) { }
  async execute(vacancy_id: string): Promise<VacanciesProps | null> {
    const findVacancy = await this.repository.find(vacancy_id)
    if (!findVacancy) return null
    return findVacancy
  }
}