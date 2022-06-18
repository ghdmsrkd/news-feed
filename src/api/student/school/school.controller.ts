import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common"
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger"
import { Student } from "../../../common/nest/decorator/student.decorator"
import { TStudnetPayload } from "src/types/express"
import { StudentGuard } from "../../../common/nest/guard/student.guard"
import {
  PostSchoolSubscribeBody,
  PostSchoolSubscribeResponse,
} from "./dto/post-school-subscribe.dto"
import { SchoolService } from "./school.service"
import {
  DeleteSchoolSubscribeBody,
  DeleteSchoolSubscribeResponse,
} from "./dto/delete-school-subscribe.dto"
import { GetSchoolSubscribeResponse } from "./dto/get-school-subscribe.dto"
import {
  GetSchoolSubscribeNewsQuery,
  GetSchoolSubscribeNewsResponse,
} from "./dto/get-school-subscribe-news.dto"

@UseGuards(StudentGuard)
@ApiTags("student/school 관련 API")
@Controller("student/school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @ApiOperation({
    summary: "학교 구독",
    description: "학교를 구독합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: PostSchoolSubscribeResponse,
  })
  @Post("subscribe")
  async postSchoolSubscrib(
    @Student() student: TStudnetPayload,
    @Body() body: PostSchoolSubscribeBody,
  ) {
    return await this.schoolService.createSchoolSubscribe(
      body.school_code,
      student.student_id,
    )
  }

  @ApiOperation({
    summary: "구독한 학교 리스트",
    description: "구독한 학교 리스트를 전달 합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: GetSchoolSubscribeResponse,
  })
  @Get("subscribe")
  async getSchoolSubscribe(@Student() student: TStudnetPayload) {
    return await this.schoolService.getSchoolSubscribe(student.student_id)
  }

  @ApiOperation({
    summary: "학교 구독 취소",
    description: "구독한 학교를 구독 취소합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: DeleteSchoolSubscribeResponse,
  })
  @Delete("subscribe")
  async deleteSchoolSubscribe(@Body() body: DeleteSchoolSubscribeBody) {
    return await this.schoolService.deleteSchoolSubscribe(body.subscribe_id)
  }

  @ApiOperation({
    summary: "구독한 학교 별 뉴스 리스트",
    description: "구독한 학교 별로 뉴스 리스트를 전달합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: GetSchoolSubscribeNewsResponse,
  })
  @Get("subscribe/news")
  async getSchoolSubscribeNews(@Query() query: GetSchoolSubscribeNewsQuery) {
    return await this.schoolService.getSchoolSubscribeNews(query.school_code)
  }
}
