import { Controller, Get, Query, UseGuards } from "@nestjs/common"
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger"

import { StudentGuard } from "../../../common/nest/guard/student.guard"

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
    type: null,
  })
  @Get("")
  async getFeed(@Query() query) {
    return await this.feedService.getFeed()
  }
}
