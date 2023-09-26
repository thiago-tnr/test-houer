import { Request, Response } from 'express';
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { CreateUserSchema } from '../../../@seedwork/validate/zod-controller-validate';
import { ZodError } from 'zod';
import { ZodValidate } from '../../../@seedwork/errors/zod-validate.error';
import { UnexpectedError } from '../../../@seedwork/errors/unexpected.error';
import bcrypt from 'bcrypt';
import AppError from '../../../@seedwork/errors/app-error';

interface InputCreateUser {
  id?: string
  name: string
  phone: string
  email: string
  password: string
  document: string
  is_admin?: boolean
  created_at?: Date
}

export class CreateUserController implements Controller {
  constructor(private useCase: UseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const customerDto: InputCreateUser = CreateUserSchema.parse(request.body)
      const saltRounds  = parseInt('10')
      customerDto.password = await bcrypt.hash(customerDto.password, saltRounds)
      const created = await this.useCase.execute(customerDto)
      console.log('create' + created)
      return response.status(201).json(created)
    } catch (error) {
      if (error instanceof ZodError) return ZodValidate.validate(response, error)
      if (error instanceof AppError) return response.status(409).json(error.message)
    }
    return UnexpectedError.validate(response)
  }
}


