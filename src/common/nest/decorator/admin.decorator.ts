import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export type TAdminPayload = {
  admin_id: string
}

export const Admin = createParamDecorator(
  async (_: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    return request.payload.admin
  },
)
