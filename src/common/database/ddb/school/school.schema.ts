import * as dynamoose from "dynamoose"

export const SchoolSchema = new dynamoose.Schema({
  school_code: {
    type: String,
    hashKey: true,
    required: true,
  },
  admin_id: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
