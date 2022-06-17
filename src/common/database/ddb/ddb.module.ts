import { Global, Module } from "@nestjs/common"
import AdminRepository from "./admin/admin.repo"
import SchoolNewsRepository from "./school-news/school-news.repo"
import SchoolRepository from "./school/school.repo"
import StudentRepository from "./student/student.repo"
import SubscribeRepository from "./subscribe/subscribe.repo"

@Global()
@Module({
  providers: [
    AdminRepository,
    SchoolRepository,
    SchoolNewsRepository,
    StudentRepository,
    SubscribeRepository,
  ],
  exports: [
    AdminRepository,
    SchoolRepository,
    SchoolNewsRepository,
    StudentRepository,
    SubscribeRepository,
  ],
})
export class GlobalDDBModule {}
