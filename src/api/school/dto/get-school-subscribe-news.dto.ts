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
    example: {},
  })
  result
}
