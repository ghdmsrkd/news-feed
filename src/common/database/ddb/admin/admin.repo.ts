import * as dynamoose from "dynamoose"
import { AdminModel } from "./admin.model"
import { Model } from "dynamoose/dist/Model"
import { AdminSchema } from "./admin.schema"

export default class AdminRepository {
  private dbInstance: Model<AdminModel>

  constructor() {
    const tableName = "CLASSTING_ADMIN"
    this.dbInstance = dynamoose.model<AdminModel>(tableName, AdminSchema)
  }

  createAdminById = async (id: string) => {
    return await this.dbInstance.create({
      admin_id: id,
      admin_name: id + "name",
    })
  }

  getAdminById = async (id: string) => {
    return await this.dbInstance.get({ admin_id: id })
  }
}
