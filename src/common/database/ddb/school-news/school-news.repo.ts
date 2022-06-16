import * as dynamoose from "dynamoose"
import { SchoolNewsModel } from "./school-news.model"
import { Model } from "dynamoose/dist/Model"
import { SchoolNewsSchema } from "./school-news.schema"
import { Injectable } from "@nestjs/common"
import { v4 as uuidv4 } from "uuid"

export type TUpdateOption = {
  title?: string
  context?: string
}
@Injectable()
export default class SchoolNewsRepository {
  private dbInstance: Model<SchoolNewsModel>

  constructor() {
    const tableName = "CLASSTING_SCHOOL_NEWS"
    this.dbInstance = dynamoose.model<SchoolNewsModel>(
      tableName,
      SchoolNewsSchema,
    )
  }

  async createOneSchoolNews(
    school_code: string,
    title: string,
    context: string,
  ) {
    const newsHashId = uuidv4()
    const nowToNumber = +new Date()
    return await this.dbInstance.create({
      school_news_id: newsHashId,
      created_at: nowToNumber,
      school_code: school_code,
      title: title,
      context: context,
    })
  }

  async deleteOneSchoolNews(id: string) {
    const deletedShcoolNews = await this.getSchoolNewsById(id)
    await this.dbInstance.delete({
      school_news_id: id,
    })
    return deletedShcoolNews
  }

  async updateOneSchoolNews(id: string, option: TUpdateOption) {
    const curentSchoolNews = await this.getSchoolNewsById(id)

    //update의 set 기능이 작동을 안해서 임시 적으로 수동 검증 해준다.
    const updateParm = {
      title: option.title ?? curentSchoolNews.title,
      context: option.context ?? curentSchoolNews.context,
    }
    const updatedSchoolNews = this.dbInstance.update(
      {
        school_news_id: id,
      },
      {
        ...updateParm,
      },
    )
    return updatedSchoolNews
  }

  async getSchoolNewsById(id: string) {
    return await this.dbInstance.get({ school_news_id: id })
  }

  async querySchoolNewsBySchoolCode(school_code: string) {
    return await this.dbInstance.query("school_code").eq(school_code).exec()
  }
}
