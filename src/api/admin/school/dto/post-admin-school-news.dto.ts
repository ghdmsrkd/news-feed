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
    example: {},
  })
  result
}
