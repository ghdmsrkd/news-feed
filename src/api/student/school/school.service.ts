import { HttpStatus, Injectable } from "@nestjs/common"
import SubscribeRepository from "../../../common/database/ddb/subscribe/subscribe.repo"
import SchoolNewsRepository from "../../../common/database/ddb/school-news/school-news.repo"
import { NestError } from "../../../common/nest/exception/nest-error"

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

  async getSchoolSubscribeNews(school_code: string, student_id: string) {
    const subscribedList =
      await this.subscribeRepository.querySubscribeByStudentId(student_id)
    const filteredSubscribedList = subscribedList.filter(
      (subscribe) => subscribe.school_code === school_code,
    )
    // 요청한 학교를 구독 하지 않았을 때
    if (filteredSubscribedList.length < 1) {
      throw new NestError(
        HttpStatus.FORBIDDEN,
        "구독한 학교 페이지가 아닙니다.",
      )
    }
    return await this.schoolNewsRepository.querySchoolNewsBySchoolCode(
      school_code,
    )
  }

  async deleteSchoolSubscribe(subscribe_id: string, student_id: string) {
    const subscribesByStudentId =
      await this.subscribeRepository.querySubscribeByStudentId(student_id)
    const subscribe = subscribesByStudentId.filter(
      (subscribe) => subscribe.subscribe_id === subscribe_id,
    )
    if (subscribe.length < 1) {
      throw new NestError(
        HttpStatus.FORBIDDEN,
        `당신에게 ${subscribe_id}의 subscribe는 없습니다.`,
      )
    }
    return await this.subscribeRepository.deleteOneSubscribe(subscribe_id)
  }
}
