import { ApiProperty } from "@nestjs/swagger"

export class GetFeedResponse {
  @ApiProperty({
    example: [
      {
        school_news_id: "2b43008f-6adf-482e-b9aa-bb335e73f28f",
        updated: true,
        created_at: 1655644403004,
        context: "서울초등학교context의 내용이 변경되었어요!!!",
        student_id: "student3",
        school_code: "서울-서울초등학교",
        title: "서울초등학교title4",
        feed_id: "G3yyt5O2ZCdjWtntvf9/j9nrrT03jKDZAc1rBxb/U9A=",
      },
      {
        school_news_id: "b4ee81d8-db96-424d-9d90-d0a42a7c67fc",
        updated: false,
        created_at: 1655644389364,
        context: "서울초등학교context4",
        student_id: "student3",
        school_code: "서울-서울초등학교",
        title: "서울초등학교title4",
        feed_id: "biOuD8QtHzdS5aPvC+QF4uM3erTmEUk3ZwrZ0jI9WSI=",
      },
    ],
  })
  result
}
