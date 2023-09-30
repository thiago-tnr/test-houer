import { type NextFunction, type Request, type Response } from 'express'
import Jwt from 'jsonwebtoken'
import AppError from '../@seedwork/errors/app-error'

// Estendendo a interface Request
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        is_admin: boolean
      }
    }
  }
}

export const refreshToken = (req: Request, res: Response, next: NextFunction): void => {
  const refreshToken: any = req.body.refreshToken
  if (refreshToken) {
    Jwt.verify(refreshToken, process.env.REFRESH_JWT_SEC as string, (err: any, user: any) => {
      if (err) {
        throw new AppError('Invalid Token', 403)
      } else {
        const tokenRefreshed = Jwt.sign({ name: user.name }, process.env.JWT_SECRET_KEY!, { expiresIn: '60s' })
        return res.status(200).json({ message: 'Token refreshed successfully', tokenRefreshed })
      }
    })
  } else {
    throw new AppError('You are not authenticated', 401)
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader: any = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    Jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err: any, user: any) => {
      if (err) {
        res.status(403).json('Invalid Token')
      } else {
        req.user = user
        next()
      }
    })
  } else {
    throw new AppError('You are not authenticated', 401)
  }
}

export const verifyTokenAndAuthorization = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user!.id === req.params.id || req.user!.is_admin) {
      next()
    } else {
      throw new AppError('You are not allowed to do that!', 403)
    }
  })
}

export const verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user!.is_admin) {
      next()
    } else {
      throw new AppError('Only admins alowed to do that!', 403)
    }
  })
}
