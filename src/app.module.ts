import { Module } from "@nestjs/common"
import { AdminModule } from "./api/admin/admin.module"
import { SchoolModule } from "./api/school/school.module"
import { GlobalDDBModule } from "./common/database/ddb/ddb.module"

@Module({
  imports: [AdminModule, SchoolModule, GlobalDDBModule],
})
export class AppModule {}
