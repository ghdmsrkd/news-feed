import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../common/database/ddb/subscribe/subscribe.repo"
import SchoolNewsRepository from "../../common/database/ddb/school-news/school-news.repo"
import FeedRepository from "../../common/database/ddb/feed/feed.repo"
import { ISchoolNews } from "../../common/database/ddb/school-news/school-news.model"

@Injectable()
export class TaskService {
  constructor(
    private readonly schoolNewsRepository: SchoolNewsRepository,
    private readonly subscribeRepository: SubscribeRepository,
    private readonly feedRepository: FeedRepository,
  ) {}

  async insertFeedEachStudents(school_news: ISchoolNews) {
    // 학교기준 구독 리스트
    const schoolSubscribes =
      await this.subscribeRepository.querySubscribeBySChoolCode(
        school_news.school_code,
      )
    // 구독 리스트에서 학생 아이디들
    const subscribedStudentIds = schoolSubscribes.map(
      (subscribe) => subscribe.student_id,
    )
    // 구독한 학생들의 feed 생성
    return await this.feedRepository.createManyFeed(
      subscribedStudentIds,
      school_news,
    )
  }

  async updateFeedEachStudents(school_news: ISchoolNews) {
    // 학교기준 구독 리스트
    const schoolSubscribes =
      await this.subscribeRepository.querySubscribeBySChoolCode(
        school_news.school_code,
      )
    console.log(schoolSubscribes)
    // 구독 리스트에서 학생 아이디들
    const subscribedStudentIds = schoolSubscribes.map(
      (subscribe) => subscribe.student_id,
    )
    console.log(subscribedStudentIds)
    // 구독한 학생들의 feed 수정
    return await this.feedRepository.updateOneFeed(
      subscribedStudentIds,
      school_news,
    )
  }
}
