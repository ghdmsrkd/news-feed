import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../common/database/ddb/subscribe/subscribe.repo"
import SchoolNewsRepository from "../../common/database/ddb/school-news/school-news.repo"
import FeedRepository from "../../common/database/ddb/feed/feed.repo"

@Injectable()
export class TaskService {
  constructor(
    private readonly schoolNewsRepository: SchoolNewsRepository,
    private readonly subscribeRepository: SubscribeRepository,
    private readonly feedRepository: FeedRepository,
  ) {}

  async insertFeedEachStudents(student_id: string) {
    const subscribedSchoolIds =
      await this.subscribeRepository.querySubscribeByStudentId(student_id)
    return subscribedSchoolIds
  }

  async updateFeedEachStudents() {
    return
  }
}
