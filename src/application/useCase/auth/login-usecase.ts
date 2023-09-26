import AppError from '../../../@seedwork/errors/app-error'
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { UserRepository } from '../../../infrastructure/user/repository/user.repository'
import bcrypt from 'bcrypt';

interface Request {
    email: string,
    password: string,
    token?:string
}

export default class LoginUserUseCase implements UseCase{
  constructor( private readonly repository: UserRepository) {}
    public async execute({email, password}: Request){
        if (email && password) {
            const userLogin = await this.repository.findByEmail(email) 

            if (!userLogin) {
                throw new AppError("Email or password wrong, or user not found, try again", 403)
            }

            const hashedPassword = userLogin.password
            
            const compareHashedPassword = await bcrypt.compare(password, hashedPassword)

            if (!compareHashedPassword) {
                throw new AppError("Email or password wrong, try again", 403)
            }

        return userLogin;
        } else {
            throw new AppError("Email or password wrong, try again", 403)
        }
    }
}