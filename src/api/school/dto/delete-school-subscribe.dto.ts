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
    example: `{
      "status": 200,
      "timestamp": "2022-06-17T09:16:51.548Z",
      "result": {
          "student_id": "student3",
          "school_code": "서울-서울초등학교",
          "subscribe_id": "RqJjWjpIg5JMezD1bQP+8o+yKrZX5Po1OeBUtY8BOeM="
      }
  }`,
  })
  result
}
