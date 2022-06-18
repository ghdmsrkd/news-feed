import { Document } from "dynamoose/dist/Document"

export class FeedNewsModel extends Document {
  feed_id = ""
  student_id = ""
  updated = false
  school_news_id = ""
  created_at = 0
  school_code = ""
  title = ""
  context = ""
}
