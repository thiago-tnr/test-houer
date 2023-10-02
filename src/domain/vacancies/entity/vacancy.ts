import { Entity } from '../../../@seedwork'
import type UniqueEntityId from '../../../@seedwork/uniqueEntityId.vo'

export interface VacanciesProps {
  vacancy_id?: string
  title: string
  description: string
  requirements: string
  type: string
  is_active?: boolean
  created_at?: Date
}

export type UpdateVacancy = Partial<VacanciesProps>

export default class Vacancies extends Entity<VacanciesProps> {
  vacancy_id?: string
  title: string
  description: string
  requirements: string
  type: string
  is_active?: boolean
  created_at?: Date

  constructor (props: VacanciesProps, id?: UniqueEntityId) {
    super(props, id)
    this.vacancy_id = this._id ?? id
    this.title = props.title
    this.requirements = props.requirements
    this.type = props.type
    this.description = props.description
    this.is_active = props.is_active ?? true
    this.created_at = props.created_at ?? new Date()
  }

  changeTitle (title: string): void {
    this.title = title
  }

  changeRequirements (requirements: string): void {
    this.requirements = requirements
  }

  changeType (type: string): void {
    this.type = type
  }

  changeDescription (description: string): void {
    this.description = description
  }

  activate (): void {
    this.is_active = true
  }

  deactivate (): void {
    this.is_active = false
  }

  static create (props: VacanciesProps, id?: UniqueEntityId): Vacancies {
    return new Vacancies(props, id)
  }
}
