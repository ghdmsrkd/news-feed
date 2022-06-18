import { Controller, Get, Query, UseGuards } from "@nestjs/common"
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger"
import { TStudnetPayload } from "../../../common/nest/decorator/student.decorator"
import { Student } from "../../../common/nest/decorator/student.decorator"
import { StudentGuard } from "../../../common/nest/guard/student.guard"
import { GetFeedResponse } from "./dto/get-feed.dto"

import { FeedService } from "./feed.service"

@UseGuards(StudentGuard)
@ApiTags("student/feed 관련 API")
@Controller("student/feed")
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @ApiOperation({
    summary: "구독한 학교의 소식으로 피드로 전달",
    description: "구독한 학교의 소식으로 피드로 전달합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: GetFeedResponse,
  })
  @Get("")
  async getFeed(@Student() student: TStudnetPayload) {
    return await this.feedService.getFeed(student.student_id)
  }
}
