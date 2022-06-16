import { Module } from "@nestjs/common"
import SchoolRepository from "../../../common/database/ddb/school/school.repo"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"
import { AdminSchoolController } from "./admin-school.controller"
import { AdminSchoolService } from "./admin-school.service"
import SchoolNewsRepository from "../../../common/database/ddb/school-news/school-news.repo"

@Module({
  imports: [],
  controllers: [AdminSchoolController],
  providers: [
    AdminSchoolService,
    AdminRepository,
    SchoolRepository,
    SchoolNewsRepository,
  ],
})
export class AdminSchoolModule {}
