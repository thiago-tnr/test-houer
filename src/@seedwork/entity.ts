import UniqueEntityId from './uniqueEntityId.vo'

export abstract class Entity<Props> {
  protected uniqueEntityId: UniqueEntityId

  constructor(public readonly props: Props, id?: UniqueEntityId) {
    this.uniqueEntityId = id || new UniqueEntityId()
  }

  get id(): string {
    return this.uniqueEntityId.id!
  }

  toJSON(): Required<{id: string} & Props> {
    return {
      id: this.id,
    } as  Required<{id: string} & Props>
  }
}