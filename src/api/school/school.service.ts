import { Injectable } from "@nestjs/common"
import AdminRepository from "../../common/database/ddb/admin/admin.repo"

@Injectable()
export class SchoolService {
  constructor() {}
  async getSchoolSubscribNews() {
    return "학교 구독 뉴스 전달"
  }
  async createSchoolSubscrib() {
    return "학교 구독 생성"
  }
  async getSchoolSubscrib() {
    const adminRepository = new AdminRepository()
    await adminRepository.createAdminById("admin2")
    return await adminRepository.getAdminById("admin2")
  }
  async deleteSchoolSubscrib() {
    return "학교 구독 삭제"
  }
}
