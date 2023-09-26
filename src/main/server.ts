import { NextFunction, Request, Response } from 'express';
import { app } from './express';
import { router } from './routes';
import AppError from '../@seedwork/errors/app-error';

const port: number = Number(process.env.PORT) || 3030;

app.use(router)
app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{
  if(err instanceof AppError){
      return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
      })
  }
  
  return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
  })
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
