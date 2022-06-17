import * as dynamoose from "dynamoose"
import { SubscribeModel } from "./subscribe.model"
import { Model } from "dynamoose/dist/Model"
import { SubscribeSchema } from "./subscribe.schema"
import { Injectable } from "@nestjs/common"
import * as crypto from "crypto"

@Injectable()
export default class SubscribeRepository {
  private dbInstance: Model<SubscribeModel>

  constructor() {
    const tableName = "CLASSTING_SUBSCRIBE"
    this.dbInstance = dynamoose.model<SubscribeModel>(
      tableName,
      SubscribeSchema,
    )
  }

  async createOneSubscribe(school_code: string, studnet_id: string) {
    // id가 랜덤으로 들오가져 중복된 구독 내용이 들어감, studnet_id + school_code를 해시 한 값을 id 로 사용
    const newsHashId = crypto
      .createHash("sha256")
      .update(studnet_id + school_code)
      .digest("base64")
    return await this.dbInstance.create({
      subscribe_id: newsHashId,
      school_code: school_code,
      student_id: studnet_id,
    })
  }

  async deleteOneSubscribe(id: string) {
    const deletedShcoolNews = await this.getSubscribeById(id)
    await this.dbInstance.delete({
      subscribe_id: id,
    })
    return deletedShcoolNews
  }

  async getSubscribeById(id: string) {
    return await this.dbInstance.get({ subscribe_id: id })
  }

  async querySubscribeByStudentId(student_id: string) {
    return await this.dbInstance.query("student_id").eq(student_id).exec()
  }

  async querySubscribeBySChoolCode(school_code: string) {
    return await this.dbInstance.query("school_code").eq(school_code).exec()
  }
}
