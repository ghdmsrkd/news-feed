import * as dynamoose from "dynamoose"

export const SchoolNewsSchema = new dynamoose.Schema({
  school_news_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  created_at: {
    type: Number,
    rangeKey: true,
    required: true,
  },
  school_code: {
    type: String,
    index: {
      name: "school_code-created_at-index",
      global: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
})
