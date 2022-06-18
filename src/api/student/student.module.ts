import { Module } from "@nestjs/common"
import { FeedModule } from "./feed/feed.module"
import { SchoolModule } from "./school/school.module"

@Module({
  imports: [SchoolModule, FeedModule],
})
export class StudentModule {}
