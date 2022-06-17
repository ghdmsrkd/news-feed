import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common"

import { Request } from "express"

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request: Request = ctx.getRequest()
    const error: HttpException | Error =
      exception instanceof HttpException ? exception : <Error>exception

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    console.error(error)
    try {
      response.status(status).json({
        result: false,
        code: status,
        message:
          error instanceof HttpException &&
          typeof error.getResponse() === "object"
            ? (<{ [key: string]: any }>error.getResponse()).message
            : error.message,
        timestamp: new Date().toISOString(),
        method: request.method,
        path: request.url,
      })
    } catch (err) {
      response.status(500).json({
        result: false,
        code: 500,
        message: "something wrong when server is running",
        timestamp: new Date().toISOString(),
        method: request.method,
        path: request.url,
      })
    }
  }
}
