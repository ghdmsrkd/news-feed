import * as dynamoose from "dynamoose"

export const FeedSchema = new dynamoose.Schema({
  feed_id: {
    type: String,
    hashKey: true,
    required: true,
  },
  student_id: {
    type: String,
    index: {
      name: "student_id-created_at-index",
      global: true,
    },
  },
  // school news 관련 데이터들
  school_news_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Number,
    required: true,
  },
  school_code: {
    type: String,
    required: true,
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
