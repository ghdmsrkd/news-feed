import { Module } from "@nestjs/common"
import { AdminModule } from "./admin/admin.module"
import { GlobalDDBModule } from "../common/database/ddb/ddb.module"
import { StudentModule } from "./student/student.module"

@Module({
  imports: [AdminModule, StudentModule, GlobalDDBModule],
})
export class AppModule {}
