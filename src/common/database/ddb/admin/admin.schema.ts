import * as dynamoose from "dynamoose"

export type admin_info = {
    name: string
}

export const AdminSchema = new dynamoose.Schema({
  admin_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  admin_name: {
    type: String,
    required: true
  },
})
