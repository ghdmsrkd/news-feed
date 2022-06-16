import { Injectable } from "@nestjs/common"
import StudentRepository from "../../common/database/ddb/student/student.repo"

@Injectable()
export class SchoolService {
  constructor(private readonly studentRepository: StudentRepository) {}
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
