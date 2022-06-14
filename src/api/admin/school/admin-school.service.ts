import { Injectable } from "@nestjs/common"

@Injectable()
export class AdminSchoolService {
  constructor() {}
  async createSchoolNews() {
    return "학교 뉴스 생성"
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
