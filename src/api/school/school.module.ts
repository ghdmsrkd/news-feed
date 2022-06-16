import { Module } from "@nestjs/common"
import StudentRepository from "../../common/database/ddb/student/student.repo"
import { SchoolController } from "./school.controller"
import { SchoolService } from "./school.service"

@Module({
  imports: [],
  controllers: [SchoolController],
  providers: [SchoolService, StudentRepository],
})
export class SchoolModule {}
