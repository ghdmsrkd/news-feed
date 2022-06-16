import * as dynamoose from "dynamoose"

export const StudentSchema = new dynamoose.Schema({
  student_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
