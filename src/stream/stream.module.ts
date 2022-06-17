import { Module } from "@nestjs/common"
import { GlobalDDBModule } from "../common/database/ddb/ddb.module"

@Module({
  imports: [GlobalDDBModule],
})
export class StreamModule {}
