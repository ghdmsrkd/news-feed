import { Module } from "@nestjs/common"
import { AdminModule } from "./api/admin/admin.module"
import { SchoolModule } from "./api/school/school.module"

@Module({
  imports: [AdminModule, SchoolModule],
})
export class AppModule {}
