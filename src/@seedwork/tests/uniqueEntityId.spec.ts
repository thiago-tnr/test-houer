import UniqueEntityId from '../uniqueEntityId.vo'
import { validate as uuidValidate } from 'uuid'
describe('Unique Entity Id', () => {
  it('should return a uuid', () => {
    const uuid = new UniqueEntityId()
    expect(uuid).toBeTruthy()
  })

  it('should be a validate uuid', () => {
    const uuid = new UniqueEntityId()
    const isValid = uuidValidate(uuid.id!)
    expect(isValid).toBeTruthy()
  })
  it.skip('should be throw if uuid is invalid', () => {
    const uuid = new UniqueEntityId('any_id')
    const isValid = uuidValidate(uuid.id!)
    expect(isValid).toBeFalsy()
  })
})
