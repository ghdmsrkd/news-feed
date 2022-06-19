import { HttpException, HttpStatus } from "@nestjs/common"

export class NestError extends HttpException {
  constructor(status: HttpStatus | number, message?: string) {
    super({ status, message }, status)
  }
}
