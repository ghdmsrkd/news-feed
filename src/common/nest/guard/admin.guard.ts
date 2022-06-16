import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from "@nestjs/common"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    @Inject(AdminRepository) private readonly adminRepository: AdminRepository,
  ) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest()

    // jwt 토큰을 발급 하진 않았지만 admin_id를 jwt 토큰이라고 가정하고 인증 과정을 거친다.
    const token = request.headers.authorization?.split("Bearer ")[1]
    const adminModel = await this.adminRepository.getAdminById("admin4")
    return token === adminModel.admin_id ? true : false
  }
}
