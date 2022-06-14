import { Module } from "@nestjs/common"
import { AdminSchoolModule } from "./school/admin-school.module"

@Module({
  imports: [AdminSchoolModule],
})
export class AdminModule {}
