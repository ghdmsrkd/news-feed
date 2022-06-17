import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class DeleteSchoolSubscribeBody {
  @ApiProperty({
    type: String,
  })
  @IsString()
  subscribe_id: string
}

export class DeleteSchoolSubscribeResponse {
  @ApiProperty({
    example: {},
  })
  result
}
