
import RepositoryInterface from '../../../@seedwork/repository/repository-interface';
import Vacancies, { VacanciesProps } from '../../../domain/vacancies/entity/vacancy';

export default interface VacanciesRepositoryInterface
  extends RepositoryInterface<VacanciesProps, Vacancies> { }