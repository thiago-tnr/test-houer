import { Router, request, response } from 'express';
import {
  createVacanciesController,
  deleteVacanciesController,
  findAllVacanciesController,
  findVacancyController,
  updateVacancyController
} from '../../../@seedwork/container/dependency_inversion/vacancies-dependency';
import { verifyToken, verifyTokenAndAdmin } from '../../../middleware/middleware';

export const vacanciesRoutes = Router()

vacanciesRoutes.post("/", verifyTokenAndAdmin,(request, response) => {
  return createVacanciesController.handle(request, response)
})
vacanciesRoutes.delete("/:vacancy_id", verifyTokenAndAdmin, (request, response) => {
  return deleteVacanciesController.handle(request, response)
})
vacanciesRoutes.get("/find/:vacancy_id", verifyToken, (request, response) => {
  return findVacancyController.handle(request, response)
})
vacanciesRoutes.patch("/update/:vacancy_id",verifyTokenAndAdmin,(request, response) => {
  return updateVacancyController.handle(request, response)
})
vacanciesRoutes.get("/find", verifyToken,(request, response) => {
  return findAllVacanciesController.handle(request, response)
})