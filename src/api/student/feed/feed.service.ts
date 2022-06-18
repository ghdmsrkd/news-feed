import { Injectable } from "@nestjs/common"
import FeedRepository from "../../../common/database/ddb/feed/feed.repo"

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}

  async getFeed(student_id: string) {
    return this.feedRepository.queryFeedByStudentId(student_id)
  }
}
