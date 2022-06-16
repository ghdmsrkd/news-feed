/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@nestjs/common"
import SchoolRepository from "../../../common/database/ddb/school/school.repo"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"

@Injectable()
export class AdminSchoolService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly schoolRepository: SchoolRepository,
  ) {}

  async createSchoolNews() {
    return await this.schoolRepository.querySchoolByAdminId("admin4")
  }

  async deleteSchoolNews() {
    return "학교 뉴스 삭제"
  }

  async updateSchoolNews() {
    return "학교 뉴스 수정"
  }

  async createSchool(admin_id: string, location: string, name: string) {
    // await this.adminRepository.createAdminById("admin6")
    const createSchoolResult = await this.schoolRepository.createSchool(
      admin_id,
      location,
      name,
    )
    console.log(createSchoolResult)
    return await this.schoolRepository.getSchoolByCode("인천-인천중학교")
  }
}
