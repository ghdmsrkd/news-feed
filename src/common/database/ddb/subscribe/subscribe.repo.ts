import * as dynamoose from "dynamoose"
import { SubscribeModel } from "./subscribe.model"
import { Model } from "dynamoose/dist/Model"
import { SubscribeSchema } from "./subscribe.schema"
import { Injectable } from "@nestjs/common"
import { v4 as uuidv4 } from "uuid"

@Injectable()
export default class SubscribeRepository {
  private dbInstance: Model<SubscribeModel>

  constructor() {
    const tableName = "CLASSTING_SCHOOL_NEWS"
    this.dbInstance = dynamoose.model<SubscribeModel>(
      tableName,
      SubscribeSchema,
    )
  }

  async createOneSubscribe(school_code: string, studnet_id: string) {
    const newsHashId = uuidv4()
    return await this.dbInstance.create({
      subscribe_id: newsHashId,
      school_code: school_code,
      student_id: studnet_id,
    })
  }

  async deleteOneSubscribe(id: string) {
    const deletedShcoolNews = await this.getSubscribeById(id)
    await this.dbInstance.delete({
      school_news_id: id,
    })
    return deletedShcoolNews
  }

  async getSubscribeById(id: string) {
    return await this.dbInstance.get({ school_news_id: id })
  }

  async querySubscribeByStudentId(student_id: string) {
    return await this.dbInstance.query("student_id").eq(student_id).exec()
  }

  async querySubscribeBySChoolCode(school_code: string) {
    return await this.dbInstance.query("school_code").eq(school_code).exec()
  }
}
