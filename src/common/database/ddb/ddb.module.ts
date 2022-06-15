import { Global, Module } from "@nestjs/common"
import AdminRepository from "./admin/admin.repo"
import SchoolRepository from "./school/school.repo"

@Global()
@Module({
  providers: [AdminRepository, SchoolRepository],
  exports: [AdminRepository, SchoolRepository],
})
export class GlobalDDBModule {}
