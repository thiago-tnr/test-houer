export abstract class ErrorResponseValidate {
  static validate: (response:any, error?: Error) => Promise<any>
}