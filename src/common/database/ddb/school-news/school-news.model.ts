import { Document } from "dynamoose/dist/Document"

export interface ISchoolNews {
  school_news_id: string
  created_at: number
  school_code: string
  title: string
  context: string
}
export class SchoolNewsModel extends Document implements ISchoolNews {
  school_news_id = ""
  created_at = 0
  school_code = ""
  title = ""
  context = ""
}
