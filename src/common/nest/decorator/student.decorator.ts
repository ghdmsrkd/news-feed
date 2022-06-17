import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Request } from "express"

export const Student = createParamDecorator(
  async (_: any, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest()

    return request.payload.student
  },
)
