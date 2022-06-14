import { Module } from "@nestjs/common";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
  imports:[],
  controllers:[SchoolController],
  providers:[SchoolService],
})
export class SchoolModule {}