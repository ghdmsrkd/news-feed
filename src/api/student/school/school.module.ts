import { Module } from "@nestjs/common"
import SubscribeRepository from "../../../common/database/ddb/subscribe/subscribe.repo"
import StudentRepository from "../../../common/database/ddb/student/student.repo"
import { SchoolController } from "./school.controller"
import { SchoolService } from "./school.service"

@Module({
  imports: [],
  controllers: [SchoolController],
  providers: [SchoolService, StudentRepository, SubscribeRepository],
})
export class SchoolModule {}
