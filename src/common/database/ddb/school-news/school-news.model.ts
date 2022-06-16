import { Document } from "dynamoose/dist/Document"

export class SchoolNewsModel extends Document {
  school_news_id = ""
  created_at = 0
  school_code = ""
  title = ""
  context = ""
}
