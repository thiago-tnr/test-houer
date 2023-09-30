import { Entity } from '../../../@seedwork';
import UniqueEntityId from '../../../@seedwork/uniqueEntityId.vo';

export interface UserProps {
  user_id?: string
  name: string
  phone: string
  email: string
  password: string
  document: string
  is_admin?: boolean
  created_at?: Date
  updated_at?: Date | null
}

export default class User extends Entity<UserProps> {
  user_id?: string
  name: string
  phone: string
  email: string
  password: string
  document: string
  is_admin: boolean
  created_at?: Date
  updated_at: Date | null
  constructor(props: UserProps, id?: UniqueEntityId) {
    super(props, id)
    this.user_id = this._id ?? id
    this.name = props.name
    this.document = props.document
    this.phone = props.phone
    this.email = props.email
    this.password = props.password
    this.is_admin = props.is_admin ?? false
    this.created_at = props.created_at ?? new Date()
    this.updated_at = props.updated_at ?? null
  }

  changeName(name: string) {
    this.name = name
  }

  changeDocument(document: string) {
    this.document = document
  }

  changePhone(phone: string) {
    this.phone = phone
  }

  changeEmail(email: string) {
    this.email = email
  }

  changePassword(password: string) {
    this.password = password
  }

  adminActivate() {
    this.is_admin = true
  }

  adminDeactivate() {
    this.is_admin = false
  }

  static create(props: UserProps, id?: UniqueEntityId): User {
    return new User(props, id!)
  }
}