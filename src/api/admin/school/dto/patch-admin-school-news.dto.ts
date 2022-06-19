import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class PatchAdminSchoolNewsBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  school_news_id: string

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  context?: string
}

export class PatchAdminSchoolNewsResponse {
  @ApiProperty({
    example: `{
          "school_news_id": "8c1a46a6-bd87-4109-855d-3b0352aa4b47",
          "context": "서울초등학교context3의 내용이 변경되었어요!",
          "title": "서울초등학교title3"
    }`,
  })
  result
}
