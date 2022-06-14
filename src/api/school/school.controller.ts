import { Controller, Delete, Get, Patch, Post } from "@nestjs/common"
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger"
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
    type: null,
  })
  @Post("subscribe")
  async postSchoolSubscrib() {
    return await this.School.createSchoolSubscrib()
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
