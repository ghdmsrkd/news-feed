import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Request } from "express"

export type TStudnetPayload = {
  student_id: string
}

export const Student = createParamDecorator(
  async (_: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    return request.payload.student
  },
)
