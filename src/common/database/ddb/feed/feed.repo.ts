import * as dynamoose from "dynamoose"
import { FeedNewsModel } from "./feed.model"
import { Model } from "dynamoose/dist/Model"
import { FeedSchema } from "./feed.schema"
import { Injectable } from "@nestjs/common"
import { v4 as uuidv4 } from "uuid"

@Injectable()
export default class FeedRepository {
  private dbInstance: Model<FeedNewsModel>

  constructor() {
    const tableName = "CLASSTING_FEED"
    this.dbInstance = dynamoose.model<FeedNewsModel>(tableName, FeedSchema)
  }

  async createOneFeed() {
    return
  }

  async updateOneFeed() {
    return
  }

  async getFeedById(id: string) {
    return await this.dbInstance.get({ school_news_id: id })
  }

  async queryFeedByStudentId(student_id: string) {
    return await this.dbInstance
      .query("student_id")
      .eq(student_id)
      .sort("descending")
      .exec()
  }
}
