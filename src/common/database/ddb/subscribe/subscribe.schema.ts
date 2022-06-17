import * as dynamoose from "dynamoose"

export const SubscribeSchema = new dynamoose.Schema({
  subscribe_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  school_code: {
    type: String,
    index: {
      name: "school_code-index",
      global: true,
    },
  },
  student_id: {
    type: String,
    index: {
      name: "student_id-index",
      global: true,
    },
  },
})
