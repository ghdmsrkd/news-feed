import * as dynamoose from "dynamoose"
import { FeedNewsModel } from "./feed.model"
import { Model } from "dynamoose/dist/Model"
import { FeedSchema } from "./feed.schema"
import { Injectable } from "@nestjs/common"
import * as crypto from "crypto"
import { ISchoolNews } from "../school-news/school-news.model"

@Injectable()
export default class FeedRepository {
  private dbInstance: Model<FeedNewsModel>

  constructor() {
    const tableName = "CLASSTING_FEED"
    this.dbInstance = dynamoose.model<FeedNewsModel>(tableName, FeedSchema)
  }

  async createManyFeed(student_ids: Array<string>, school_news: ISchoolNews) {
    const newFeedDocumments = student_ids.map((id) => {
      const feed_id = crypto
        .createHash("sha256")
        .update(id + school_news.school_news_id)
        .digest("base64")
      return {
        feed_id: feed_id,
        student_id: id,
        updated: false,
        ...school_news,
      }
    })
    await this.dbInstance.batchPut(newFeedDocumments)
    return newFeedDocumments
  }

  async updateOneFeed(student_ids: Array<string>, school_news: ISchoolNews) {
    const newFeedDocumments = student_ids.map((id) => {
      const feed_id = crypto
        .createHash("sha256")
        .update(id + school_news.school_news_id)
        .digest("base64")
      return {
        feed_id: feed_id,
        student_id: id,
        updated: true,
        ...school_news,
      }
    })
    await this.dbInstance.batchPut(newFeedDocumments)
    return newFeedDocumments
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
