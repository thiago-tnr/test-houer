
import type RepositoryInterface from '../../../@seedwork/repository/repository-interface'
import { type VacanciesProps } from '../../../domain/vacancies/entity/vacancy'
import type Vacancies from '../../../domain/vacancies/entity/vacancy'

export default interface VacanciesRepositoryInterface
  extends RepositoryInterface<VacanciesProps, Vacancies> { }
