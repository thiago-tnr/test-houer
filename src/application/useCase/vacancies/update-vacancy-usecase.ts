import { type UseCase } from '../../../@seedwork/interfaces/usecase-interface'
import { type VacanciesProps } from '../../../domain/vacancies/entity/vacancy'
import type VacanciesRepositoryInterface from '../../../infrastructure/vacancies/repository/vacancies-interface.repository'

type VacanciesPropsToUpdate = Partial<VacanciesProps> | null
type UpdateVacanciesProps = { vacancy: VacanciesPropsToUpdate, vacancy_id: string }
export class UpdateVacancyUseCase implements UseCase {
  constructor (private readonly repository: VacanciesRepositoryInterface) { }
  async execute (data: UpdateVacanciesProps): Promise<VacanciesPropsToUpdate> {
    const findVacancy = await this.repository.find(data.vacancy_id)

    if (!findVacancy) return null

    findVacancy.changeTitle(data.vacancy!.title ?? findVacancy.title)
    findVacancy.changeRequirements(data.vacancy!.requirements ?? findVacancy.requirements)
    findVacancy.changeType(data.vacancy!.type ?? findVacancy.type)
    findVacancy.changeDescription(data.vacancy!.description ?? findVacancy.description)
    data.vacancy!.is_active ? findVacancy.activate() : findVacancy.deactivate()

    await this.repository.update(findVacancy)

    return {
      vacancy_id: findVacancy.vacancy_id,
      title: findVacancy.title,
      description: findVacancy.description,
      requirements: findVacancy.requirements,
      type: findVacancy.type,
      is_active: findVacancy.is_active,
      created_at: findVacancy.created_at
    }
  }
}
