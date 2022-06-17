import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class PostSchoolSubscribeBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  school_code: string
}

export class PostSchoolSubscribeResponse {
  @ApiProperty({
    example: {},
  })
  result
}
