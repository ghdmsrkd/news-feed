import { Module } from "@nestjs/common"
import SchoolRepository from "../../../common/database/ddb/school/school.repo"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"
import { AdminSchoolController } from "./admin-school.controller"
import { AdminSchoolService } from "./admin-school.service"

@Module({
  imports: [],
  controllers: [AdminSchoolController],
  providers: [AdminSchoolService, AdminRepository, SchoolRepository],
})
export class AdminSchoolModule {}
