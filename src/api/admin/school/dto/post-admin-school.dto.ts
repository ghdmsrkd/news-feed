import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class PostAdminSchoolBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  admin_id: string

  @ApiProperty({
    type: String,
  })
  @IsString()
  location: string

  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string
}

export class PostAdminSchoolBodyResponse {
  @ApiProperty({
    example: {},
  })
  result
}
