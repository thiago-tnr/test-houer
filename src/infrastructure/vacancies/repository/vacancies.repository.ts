import { type PrismaClient } from '@prisma/client'
import Vacancies, { type VacanciesProps } from '../../../domain/vacancies/entity/vacancy'
import type VacanciesRepositoryInterface from './vacancies-interface.repository'
import type UniqueEntityId from '../../../@seedwork/uniqueEntityId.vo'

type CreateVacancies = VacanciesProps
export class VacanciesRepository implements VacanciesRepositoryInterface {
  constructor (
    private readonly prisma: PrismaClient) { }

  async create (entity: CreateVacancies): Promise<VacanciesProps> {
    const { ...props } = Vacancies.create(entity)
    const obj = await this.prisma.vacancy.create({
      data: {
        id: props.vacancy_id!,
        title: props.title,
        description: props.description,
        requirements: props.requirements,
        type: props.type,
        is_active: props.is_active!,
        created_at: props.created_at!
      }
    })
    return obj
  }

  async update (entity: VacanciesProps): Promise<void> {
    await this.prisma.vacancy.update({
      where: {
        id: entity.vacancy_id
      },
      data: {
        id: entity.vacancy_id,
        title: entity.title,
        description: entity.description,
        requirements: entity.requirements,
        type: entity.type,
        is_active: entity.is_active,
        created_at: entity.created_at
      }
    })
  }

  async delete (vacancy_id: string): Promise<string> {
    try {
      await this.prisma.vacancy.delete({
        where: {
          id: vacancy_id
        }
      })
    } catch (error) {
      return 'Vacancy already deleted'
    }
    return new Date() as unknown as string
  }

  async find (vacancy_id: string): Promise<Vacancies | null> {
    let findVacancy
    try {
      findVacancy = await this.prisma.vacancy.findFirst({
        where: {
          id: vacancy_id
        }
      })
    } catch (error) {
      console.log(error)
    }
    if (findVacancy === null || !findVacancy?.is_active) return null
    const vacancy = new Vacancies(findVacancy, vacancy_id as unknown as UniqueEntityId)
    return vacancy
  }

  async findAll (): Promise<VacanciesProps[]> {
    return await this.prisma.vacancy.findMany()
  }

  async findByEmail (email: string): Promise<Vacancies> {
    throw new Error('Method not implemented.')
  }

  enroll (user_id: string, vacancy_id: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
