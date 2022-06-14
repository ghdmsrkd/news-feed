import { Module } from "@nestjs/common"
import { AdminModule } from "./api/admin/admin.module";

@Module({
  imports: [AdminModule]
})
export class AppModule {}
