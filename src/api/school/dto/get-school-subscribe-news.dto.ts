import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class GetSchoolSubscribeNewsQuery {
  @ApiProperty({
    type: String,
  })
  @IsString()
  school_code: string
}

export class GetSchoolSubscribeNewsResponse {
  @ApiProperty({
    example: `{
      "status": 200,
      "timestamp": "2022-06-17T09:19:40.369Z",
      "result": [
          {
              "school_news_id": "65ebdb6d-624a-4885-883f-d9e91d91da46",
              "school_code": "서울-서울초등학교",
              "created_at": 1655456311463,
              "context": "서울초등학교context2",
              "title": "서울초등학교title2"
          },
          {
              "school_news_id": "80206ce7-0045-41be-9405-e3dd32e52ac2",
              "school_code": "서울-서울초등학교",
              "created_at": 1655456195511,
              "context": "서울초등학교context1의 내용이 변경되었어요!",
              "title": "서울초등학교title1"
          }
      ]
  }`,
  })
  result
}
