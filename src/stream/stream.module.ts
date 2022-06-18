import { Module } from "@nestjs/common"
import { GlobalDDBModule } from "../common/database/ddb/ddb.module"
import { TaskModule } from "./task/task.module"

@Module({
  imports: [GlobalDDBModule, TaskModule],
})
export class StreamModule {}
