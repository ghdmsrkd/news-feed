import { Controller, Delete, Patch, Post } from "@nestjs/common"
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger"
import { AdminSchoolService } from "./admin-school.service"

@ApiTags("admin/school 관련 API")
@Controller("admin/school")
export class AdminSchoolController {
  constructor(private readonly adminSchool: AdminSchoolService) {}

  @ApiOperation({
    summary: "관리자가 하나의 학교 페이지 생성",
    description: "관리자가 지역과, 학교명을 받아 하나의 학교 페이지 생성합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Post("")
  async postAdminSchool() {
    return await this.adminSchool.createSchool()
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 페이지 생성",
    description: "관리자가 지역과, 학교명을 받아 하나의 학교 페이지 생성합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Post("news")
  async postAdminSchoolNews() {
    return await this.adminSchool.createSchoolNews()
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 페이지 생성",
    description: "관리자가 지역과, 학교명을 받아 하나의 학교 페이지 생성합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Delete("news")
  async deleteAdminSchoolNews() {
    return await this.adminSchool.deleteSchoolNews()
  }

  @ApiOperation({
    summary: "관리자가 하나의 학교 페이지 생성",
    description: "관리자가 지역과, 학교명을 받아 하나의 학교 페이지 생성합니다.",
  })
  @ApiCreatedResponse({
    description: "완료",
    type: null,
  })
  @Patch("news")
  async patchAdminSchoolNews() {
    return await this.adminSchool.updateSchoolNews()
  }
}
