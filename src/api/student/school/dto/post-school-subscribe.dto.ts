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
    example: `{
          "subscribe_id": "RqJjWjpIg5JMezD1bQP+8o+yKrZX5Po1OeBUtY8BOeM=",
          "school_code": "서울-서울초등학교",
          "student_id": "student3"
    }`,
  })
  result
}
