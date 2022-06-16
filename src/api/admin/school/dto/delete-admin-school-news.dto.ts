import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class DeleteAdminSchoolNewsBody {
  @IsString()
  school_news_id: string
}

export class DeleteAdminSchoolNewsResponse {
  @ApiProperty({
    example: {},
  })
  result
}
