import { Global, Module } from "@nestjs/common"
import AdminRepository from "./admin/admin.repo"

@Global()
@Module({
  providers: [AdminRepository],
  exports: [AdminRepository],
})
export class GlobalDDBModule {}
