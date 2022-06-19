import * as dynamoose from "dynamoose"
import { StudentModel } from "./student.model"
import { Model } from "dynamoose/dist/Model"
import { StudentSchema } from "./student.schema"
import { Injectable } from "@nestjs/common"

@Injectable()
export default class StudentRepository {
  private dbInstance: Model<StudentModel>

  constructor() {
    const tableName = "CLASSTING_STUDENT"
    this.dbInstance = dynamoose.model<StudentModel>(tableName, StudentSchema)
  }

  createStudentById = async (id: string) => {
    return await this.dbInstance.create({
      student_id: id,
      name: id + "name",
    })
  }

  getStudentById = async (id: string) => {
    return await this.dbInstance.get({ student_id: id })
  }
}
