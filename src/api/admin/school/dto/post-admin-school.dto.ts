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

export class PostAdminSchoolResponse {
  @ApiProperty({
    example: `{
      "status": 200,
      "timestamp": "2022-06-17T08:55:04.928Z",
      "result": {
          "school_code": "서울-서울초등학교",
          "admin_id": "admin4",
          "location": "서울",
          "name": "서울초등학교"
      }
  }`,
  })
  result
}
