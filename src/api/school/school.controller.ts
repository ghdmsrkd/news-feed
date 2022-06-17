import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common"
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger"
import {
  PostSchoolSubscribeBody,
  PostSchoolSubscribeResponse,
} from "./dto/post-school-subscribe.dto"
import { SchoolService } from "./school.service"

@ApiTags("school 관련 API")
@Controller("school")
export class SchoolController {
  constructor(private readonly School: SchoolService) {}

  @ApiOperation({
    summary: "학교 구독",
    description: "학교를 구독합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: PostSchoolSubscribeResponse,
  })
  @Post("subscribe")
  async postSchoolSubscrib(student_id, @Body() body: PostSchoolSubscribeBody) {
    return await this.School.createSchoolSubscrib(body.school_code, student_id)
  }

  @ApiOperation({
    summary: "구독한 학교 리스트",
    description: "구독한 학교 리스트를 전달 합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Get("subscribe")
  async getSchoolSubscrib() {
    return await this.School.getSchoolSubscrib()
  }

  @ApiOperation({
    summary: "학교 구독 취소",
    description: "구독한 학교를 구독 취소합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Delete("subscribe")
  async deleteSchoolSubscrib() {
    return await this.School.deleteSchoolSubscrib()
  }

  @ApiOperation({
    summary: "구독한 학교 별 뉴스 리스트",
    description: "구독한 학교 별로 뉴스 리스트를 전달합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Get("subscribe/news")
  async getSchoolSubscribNews() {
    return await this.School.getSchoolSubscribNews()
  }
}
