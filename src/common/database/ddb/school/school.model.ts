import { Document } from "dynamoose/dist/Document"

export class SchoolModel extends Document {
  school_code = ""
  admin_id = ""
  location = ""
  name = ""
}
