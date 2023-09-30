
export default interface RepositoryInterface<T, I> {
  create: (entity: T) => Promise<T>
  update: (entity: T) => Promise<any | null >
  delete: (vacancy_id: string) => Promise<any>
  find: (vacancy_id: string) => Promise<I | null>
  findAll: () => Promise<T[]>
  findByEmail: (email: string) => Promise<I | null>
  enroll: (user_id: string, vacancy_id: string) => Promise<string>
}
