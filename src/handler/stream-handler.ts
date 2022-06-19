import { NestFactory } from "@nestjs/core"
import { StreamModule } from "../stream/stream.module"
import { TaskService } from "../stream/task/task.service"
import { insertMockEvent, modifyMockEvent } from "../stream/mock-event"
import { ISchoolNews } from "../common/database/ddb/school-news/school-news.model"
import {
  convertNewImageToSchoolNews,
  StreamEventName,
} from "../common/database/stream"

exports.streamHandler = async (event) => {
  if (process.env.NODE_ENV === "dev") {
    event = insertMockEvent
  }

  const app = await NestFactory.createApplicationContext(StreamModule)
  const tasksService = app.get(TaskService)

  console.log(JSON.stringify(event.Records))
  for (const record of event.Records) {
    console.log(record)

    const schoolNews = convertNewImageToSchoolNews(
      record.dynamodb.NewImage,
    ) as ISchoolNews

    if (record.eventName === StreamEventName.INSERT) {
      // 새로운 학교 뉴스가 생성 되었을 때
      const insertResult = await tasksService.insertFeedEachStudents(schoolNews)
      console.log(insertResult)
    } else if (record.eventName === StreamEventName.MODIFY) {
      // 기존 학교 뉴스가 수정 되어 을 때
      const updateResult = await tasksService.updateFeedEachStudents(schoolNews)
      console.log(updateResult)
    } else {
      // 학교 뉴스가 삭제 되었을 때
      continue
    }
  }
}
