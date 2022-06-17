import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../common/database/ddb/subscribe/subscribe.repo"
import StudentRepository from "../../common/database/ddb/student/student.repo"

@Injectable()
export class SchoolService {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly subscribeRepository: SubscribeRepository,
  ) {}

  async getSchoolSubscribe(student_id: string) {
    const subscribedSchoolIds =
      await this.subscribeRepository.querySubscribeByStudentId(student_id)
    return subscribedSchoolIds
  }

  async createSchoolSubscribe(school_code: string, student_id: string) {
    return await this.subscribeRepository.createOneSubscribe(
      school_code,
      student_id,
    )
  }

  async getSchoolSubscribeNews() {
    return "학교 구독 전달"
  }

  async deleteSchoolSubscribe(subscribe_id: string) {
    return this.subscribeRepository.deleteOneSubscribe(subscribe_id)
  }
}
