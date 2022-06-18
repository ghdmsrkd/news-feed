import { ApiProperty } from "@nestjs/swagger"

export class GetSchoolSubscribeResponse {
  @ApiProperty({
    example: `[
          {
              "student_id": "student3",
              "school_code": "인천-인천초등학교",
              "subscribe_id": "m7jbxh2E3GXmAHQx68TZg8kIQ2PYFUch9DxfZKOyXHo="
          },
          {
              "student_id": "student3",
              "school_code": "서울-서울초등학교",
              "subscribe_id": "RqJjWjpIg5JMezD1bQP+8o+yKrZX5Po1OeBUtY8BOeM="
          }
    ]`,
  })
  result
}
