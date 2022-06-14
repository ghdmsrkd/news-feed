import { Injectable } from "@nestjs/common"

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
    return "학교 구독 전달"
  }
  async deleteSchoolSubscrib() {
    return "학교 구독 삭제"
  }
}
