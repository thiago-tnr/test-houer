import { PrismaClient } from '@prisma/client';
import UniqueEntityId from '../../../@seedwork/uniqueEntityId.vo';
import User, { UserProps } from '../../../domain/user/entity/user';
import UserRepositoryInterface from './user-interface.repository';
import AppError from '../../../@seedwork/errors/app-error';

type CreateUser = UserProps

export class UserRepository implements UserRepositoryInterface {
  constructor(
    private readonly prisma: PrismaClient) { }

  async create(entity: CreateUser): Promise<UserProps> {
    const { ...props } = User.create(entity)
    console.log(props)
    const obj = await this.prisma.user.create({
      data: {
        id: props.user_id!,
        name: props.name,
        phone: props.phone,
        email: props.email,
        password: props.password,
        document: props.document,
        is_admin: props.is_admin,
        created_at: props.created_at!
      }
    }) as UserProps
    return obj
  }

  async update(entity: UserProps): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: entity.user_id,
      },
      data: {
        id: entity.user_id!,
        name: entity.name,
        phone: entity.phone,
        email: entity.email,
        document: entity.document,
        is_admin: entity.is_admin,
        updated_at: entity.updated_at
      }
    })
  }

  async delete(user_id: string): Promise<string> {
    try {
      await this.prisma.user.delete({
        where: {
          id: user_id,
        },
      })
    } catch (error) {
      return 'User already deleted'
    }
    return new Date() as unknown as string
  }

  async find(user_id: string): Promise<User | null> {
    let findUser
    try {
      findUser = await this.prisma.user.findUnique({
        where: {
          id: user_id
        }
      }) as User
    } catch (error) {
      console.log(error)
    }

    if (findUser === null) return null

    const user = new User(findUser!, user_id as unknown as UniqueEntityId)
    return user
  }

  async findAll(): Promise<UserProps[]> {
    return await this.prisma.user.findMany()
  }

  async findByEmail(email: string): Promise<User | null> {
    let findUser
    try {
      findUser = await this.prisma.user.findUnique({
        where: {
          email
        }
      }) as User
    } catch (error) {
      console.log('Cannot find a User')
    }

    if (findUser === null) return null

    const user = new User(findUser!, findUser!.user_id as unknown as UniqueEntityId)
    return user
  }

  async enroll(user_id: string, vacancy_id: string): Promise<string> {
    await this.prisma.user.update({
      where: { id: user_id },
      data: { vacancies: { connect: { id: vacancy_id } } },
    })
    return "User enrolled in vacancy successfully";
  }
}