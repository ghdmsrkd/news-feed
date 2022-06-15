import * as dynamoose from "dynamoose"

export const AdminSchema = new dynamoose.Schema({
  admin_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  admin_name: {
    type: String,
    required: true,
  },
})
