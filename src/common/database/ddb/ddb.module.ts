import { Global, Module } from "@nestjs/common"
import AdminRepository from "./admin/admin.repo"
import SchoolNewsRepository from "./school-news/school-news.repo"
import SchoolRepository from "./school/school.repo"

@Global()
@Module({
  providers: [AdminRepository, SchoolRepository, SchoolNewsRepository],
  exports: [AdminRepository, SchoolRepository, SchoolNewsRepository],
})
export class GlobalDDBModule {}
