import {
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common"
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger"
import { AdminGuard } from "../../../common/nest/guard/admin.guard"

import { AdminSchoolService } from "./admin-school.service"
import {
  DeleteAdminSchoolNewsBody,
  DeleteAdminSchoolNewsResponse,
} from "./dto/delete-admin-school-news.dto"
import {
  PatchAdminSchoolNewsBody,
  PatchAdminSchoolNewsResponse,
} from "./dto/patch-admin-school-news.dto"
import {
  PostAdminSchoolNewsBody,
  PostAdminSchoolNewsResponse,
} from "./dto/post-admin-school-news.dto"
import {
  PostAdminSchoolBody,
  PostAdminSchoolResponse,
} from "./dto/post-admin-school.dto"

@UseGuards(AdminGuard)
@ApiTags("admin/school 관련 API")
@Controller("admin/school")
export class AdminSchoolController {
  constructor(private readonly adminSchool: AdminSchoolService) {}

  @ApiOperation({
    summary: "관리자가 하나의 학교 페이지 생성",
    description:
      "관리자가 지역과, 학교명을 받아 하나의 학교 페이지 생성합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: PostAdminSchoolResponse,
  })
  @Post("")
  async postAdminSchool(@Body() body: PostAdminSchoolBody) {
    return await this.adminSchool.createSchool(
      body.admin_id,
      body.location,
      body.name,
    )
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 소식을 생성",
    description:
      "관리자가 학교 code와 소식 정보를 받아 하나의 학교 소식을 생성합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: PostAdminSchoolNewsResponse,
  })
  @Post("news")
  async postAdminSchoolNews(@Body() body: PostAdminSchoolNewsBody) {
    return await this.adminSchool.createSchoolNews(
      body.school_code,
      body.title,
      body.context,
    )
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 소식을 삭제",
    description: "관리자가 소식 id를 받아 하나의 학교 소식을 삭제합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: DeleteAdminSchoolNewsResponse,
  })
  @Delete("news")
  async deleteAdminSchoolNews(@Body() body: DeleteAdminSchoolNewsBody) {
    return await this.adminSchool.deleteSchoolNews(body.school_news_id)
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 소식을 수정",
    description:
      "관리자가 소식 id, 수정 내용을 받아 하나의 학교 소식을 수정합니다.",
  })
  @ApiOkResponse({
    description: "완료",
    type: PatchAdminSchoolNewsResponse,
  })
  @Patch("news")
  async patchAdminSchoolNews(@Body() body: PatchAdminSchoolNewsBody) {
    return await this.adminSchool.updateSchoolNews(body.school_news_id, {
      title: body.title,
      context: body.context,
    })
  }
}
