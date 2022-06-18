import { Injectable } from "@nestjs/common"
import SubscribeRepository from "../../../common/database/ddb/subscribe/subscribe.repo"
import SchoolNewsRepository from "../../../common/database/ddb/school-news/school-news.repo"

@Injectable()
export class FeedService {
  constructor(
    private readonly schoolNewsRepository: SchoolNewsRepository,
    private readonly subscribeRepository: SubscribeRepository,
  ) {}

  getFeed() {
    throw new Error("Method not implemented.")
  }
}
