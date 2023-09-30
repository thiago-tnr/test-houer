/* eslint-disable @typescript-eslint/consistent-type-assertions */
import UniqueEntityId from './uniqueEntityId.vo'

export abstract class Entity<Props> {
  protected uniqueEntityId: UniqueEntityId

  constructor (public readonly props: Props, id?: UniqueEntityId) {
    this.uniqueEntityId = id ?? new UniqueEntityId()
  }

  get _id (): string {
    return this.uniqueEntityId.id!
  }

  toJSON (): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props
    } as Required<{ id: string } & Props>
  }
}
