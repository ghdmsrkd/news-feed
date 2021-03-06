import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class DeleteAdminSchoolNewsBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  school_news_id: string
}

export class DeleteAdminSchoolNewsResponse {
  @ApiProperty({
    example: `{
          "school_news_id": "8c1a46a6-bd87-4109-855d-3b0352aa4b47",
          "created_at": 1655456318994,
          "school_code": "서울-서울초등학교",
          "context": "서울초등학교context3",
          "title": "서울초등학교title3"
    }`,
  })
  result
}
