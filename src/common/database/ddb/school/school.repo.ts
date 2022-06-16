import * as dynamoose from "dynamoose"
import { SchoolModel } from "./school.model"
import { Model } from "dynamoose/dist/Model"
import { SchoolSchema } from "./school.schema"
import { Injectable } from "@nestjs/common"

@Injectable()
export default class SchoolRepository {
  private dbInstance: Model<SchoolModel>

  constructor() {
    const tableName = "CLASSTING_SCHOOL"
    this.dbInstance = dynamoose.model<SchoolModel>(tableName, SchoolSchema)
  }

  async createOneSchool(admin_id: string, location: string, name: string) {
    return await this.dbInstance.create({
      school_code: `${location}-${name}`,
      admin_id: admin_id,
      location: location,
      name: name,
    })
  }

  async getSchoolByCode(code: string) {
    return await this.dbInstance.get({ school_code: code })
  }

  async querySchoolByAdminId(admin_id: string) {
    return await this.dbInstance.query("admin_id").eq(admin_id).exec()
  }
}
