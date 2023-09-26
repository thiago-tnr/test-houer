import { CreateVacanciesController } from '../../../application/controller/vacancies/create-vacancies-controller';
import { DeleteVacanciesController } from '../../../application/controller/vacancies/delete-vacancies-controller';
import { FindVacancyController } from '../../../application/controller/vacancies/find-vacancies-controller';
import { FindAllVacanciesController } from '../../../application/controller/vacancies/findAll-vacancies-controller';
import { UpdateVacancyController } from '../../../application/controller/vacancies/update-vacancies-controller';
import { CreateVacanciesUseCase } from '../../../application/useCase/vacancies/create-vacancies-usecase';
import { DeleteVacanciesUseCase } from '../../../application/useCase/vacancies/delete-vacancies-usecase';
import { FindVacancyUseCase } from '../../../application/useCase/vacancies/find-vacancies-usecase';
import { FindAllVacanciesUseCase } from '../../../application/useCase/vacancies/findAll-vacancies-usecase';
import { UpdateVacancyUseCase } from '../../../application/useCase/vacancies/update-vacancy-usecase';
import { vacanciesRepository } from './repository-dependency';

const createVacanciesUseCase = new CreateVacanciesUseCase(vacanciesRepository)
export const createVacanciesController = new CreateVacanciesController(createVacanciesUseCase)

const deleteVacanciesUseCase = new DeleteVacanciesUseCase(vacanciesRepository)
export const deleteVacanciesController = new DeleteVacanciesController(deleteVacanciesUseCase)

const findVacancyUseCase = new FindVacancyUseCase(vacanciesRepository)
export const findVacancyController = new FindVacancyController(findVacancyUseCase)

const updateVacancyUseCase = new UpdateVacancyUseCase(vacanciesRepository)
export const updateVacancyController = new UpdateVacancyController(updateVacancyUseCase)

const findAllVacanciesUseCase = new FindAllVacanciesUseCase(vacanciesRepository)
export const findAllVacanciesController = new FindAllVacanciesController(findAllVacanciesUseCase)