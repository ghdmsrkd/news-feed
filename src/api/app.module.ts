import { Module } from "@nestjs/common"
import { AdminModule } from "./admin/admin.module"
import { SchoolModule } from "./student/school/school.module"
import { GlobalDDBModule } from "../common/database/ddb/ddb.module"

@Module({
  imports: [AdminModule, SchoolModule, GlobalDDBModule],
})
export class AppModule {}
