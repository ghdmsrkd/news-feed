import { Module } from "@nestjs/common";
import { AdminSchoolController } from "./admin-school.controller";
import { AdminSchoolService } from "./admin-school.service";

@Module({
  imports:[],
  controllers:[AdminSchoolController],
  providers:[AdminSchoolService],
})
export class AdminSchoolModule {}