import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class PostAdminSchoolNewsBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  school_code: string

  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string

  @ApiProperty({
    type: String,
  })
  @IsString()
  context: string
}

export class PostAdminSchoolNewsResponse {
  @ApiProperty({
    example: `{
      "status": 200,
      "timestamp": "2022-06-17T08:56:35.506Z",
      "result": {
          "school_news_id": "80206ce7-0045-41be-9405-e3dd32e52ac2",
          "created_at": 1655456195511,
          "school_code": "서울-서울초등학교",
          "title": "서울초등학교title1",
          "context": "서울초등학교context1"
      }
  }`,
  })
  result
}
