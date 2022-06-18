import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../../common/database/ddb/subscribe/subscribe.repo"
import StudentRepository from "../../../common/database/ddb/student/student.repo"
import SchoolNewsRepository from "../../../common/database/ddb/school-news/school-news.repo"

@Injectable()
export class SchoolService {
  constructor(
    private readonly schoolNewsRepository: SchoolNewsRepository,
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

  async getSchoolSubscribeNews(school_code: string) {
    return await this.schoolNewsRepository.querySchoolNewsBySchoolCode(
      school_code,
    )
  }

  async deleteSchoolSubscribe(subscribe_id: string) {
    return this.subscribeRepository.deleteOneSubscribe(subscribe_id)
  }
}
