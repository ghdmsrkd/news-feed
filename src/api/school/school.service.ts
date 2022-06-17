import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../common/database/ddb/subscribe/subscribe.repo"
import StudentRepository from "../../common/database/ddb/student/student.repo"

@Injectable()
export class SchoolService {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly subscribeRepository: SubscribeRepository,
  ) {}
  async getSchoolSubscribNews() {
    return "학교 구독 뉴스 전달"
  }
  async createSchoolSubscrib() {
    return await this.studentRepository.createStudentById("student2")
  }
  async getSchoolSubscrib() {
    return "학교 구독 전달"
  }
  async deleteSchoolSubscrib() {
    return "학교 구독 삭제"
  }
}
