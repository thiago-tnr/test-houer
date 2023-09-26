import { v4 as uuid, validate as uuidValidate } from 'uuid'
import InvalidUuidError from './errors/invalid-uuid.error'


export default class UniqueEntityId {
  constructor(readonly id?: string) {
    this.id = id || uuid()
    this.validate()
  }

  private validate() {
    try {
      const isValid = uuidValidate(this.id!);
      if (!isValid) throw new InvalidUuidError();
    } catch (error) {
      console.error(error)
    }
  }
}