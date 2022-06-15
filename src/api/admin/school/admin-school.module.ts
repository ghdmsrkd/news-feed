import { Module } from "@nestjs/common"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"
import { AdminSchoolController } from "./admin-school.controller"
import { AdminSchoolService } from "./admin-school.service"

@Module({
  imports: [],
  controllers: [AdminSchoolController],
  providers: [AdminSchoolService, AdminRepository],
})
export class AdminSchoolModule {}
