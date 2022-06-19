import * as dynamoose from "dynamoose"
import { SchoolModel } from "./school.model"
import { Model } from "dynamoose/dist/Model"
import { SchoolSchema } from "./school.schema"
import { HttpStatus, Injectable } from "@nestjs/common"
import { NestError } from "../../../../common/nest/exception/nest-error"

@Injectable()
export default class SchoolRepository {
  private dbInstance: Model<SchoolModel>

  constructor() {
    const tableName = "CLASSTING_SCHOOL"
    this.dbInstance = dynamoose.model<SchoolModel>(tableName, SchoolSchema)
  }

  async createOneSchool(admin_id: string, location: string, name: string) {
    const school_code = `${location}-${name}`
    await this.checkItem(school_code)
    return await this.dbInstance.create({
      school_code: school_code,
      admin_id: admin_id,
      location: location,
      name: name,
    })
  }

  async deleteSchoolByCode(code: string) {
    return await this.dbInstance.delete({ school_code: code })
  }

  async getSchoolByCode(code: string) {
    return await this.dbInstance.get({ school_code: code })
  }

  async checkItem(id: string) {
    if (await this.getSchoolByCode(id)) {
      throw new NestError(HttpStatus.FORBIDDEN, "해당 항목이 이미 존제 합니다.")
    }
  }

  async querySchoolByAdminId(admin_id: string) {
    return await this.dbInstance.query("admin_id").eq(admin_id).exec()
  }
}
