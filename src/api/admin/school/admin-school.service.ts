/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable } from "@nestjs/common"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"

@Injectable()
export class AdminSchoolService {
  constructor(private readonly adminRepository: AdminRepository) {}
  async createSchoolNews() {
    // return await this.adminRepository.getAdminById("admin4")
  }
  async deleteSchoolNews() {
    return "학교 뉴스 삭제"
  }
  async updateSchoolNews() {
    return "학교 뉴스 수정"
  }
  async createSchool() {
    return "학교 생성"
  }
}
