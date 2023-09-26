import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { Controller } from '../../../@seedwork/interfaces/controller-interface';
import { UseCase } from '../../../@seedwork/interfaces/usecase-interface';
import { LoginValidate } from '../../../@seedwork/validate/zod-controller-validate';

export class LoginUserController implements Controller {
    constructor(private usecase: UseCase){}
    async handle(request: Request, response: Response) {
        const {email, password} = LoginValidate.parse(request.body)
        const user = await this.usecase.execute({email, password})

        const token = jwt.sign({
            id: user.id,
            is_admin: user.is_admin
        }, process.env.JWT_SECRET_KEY!,
        {expiresIn: "1h"})

        const refreshToken = jwt.sign({
            id: user.id,
        }, process.env.REFRESH_JWT_SEC!,
        {expiresIn: "12h"})

        return response.status(200).json({token, refreshToken}); 
    }
}