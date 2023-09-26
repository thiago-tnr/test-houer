import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { VacanciesProps } from '../../../domain/vacancies/entity/vacancy';
import VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository';

export class FindAllVacanciesUseCase implements UseCase {
  constructor(private readonly repository: VacanciesRepositoryInterface) { }
  async execute(): Promise<VacanciesProps[]> {
    const findVacancy = await this.repository.findAll()
    return findVacancy
  }
}