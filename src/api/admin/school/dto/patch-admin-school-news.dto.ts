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
    example: {},
  })
  result
}
