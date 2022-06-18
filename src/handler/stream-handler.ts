import { NestFactory } from "@nestjs/core"
import { StreamModule } from "../stream/stream.module"
import { TaskService } from "../stream/task/task.service"
import { mockEvent } from "../stream/mock-event"
import * as AWS from "aws-sdk"
import { ISchoolNews } from "../common/database/ddb/school-news/school-news.model"

exports.streamHandler = async (event) => {
  if (process.env.NODE_ENV === "dev") {
    event = mockEvent
  }

  const app = await NestFactory.createApplicationContext(StreamModule)
  const tasksService = app.get(TaskService)

  for (const record of event.Records) {
    console.log(record)

    const schoolNews = convertNewImageToSchoolNews(
      record.dynamodb.NewImage,
    ) as ISchoolNews

    if (record.eventName === "INSERT") {
      // 새로운 학교 뉴스가 생성 되었을 때
      const insertResult = await tasksService.insertFeedEachStudents(schoolNews)
    } else if (record.eventName === "MODIFY") {
      // 기존 학교 뉴스가 수정 되어 을 때
      const updateResult = await tasksService.updateFeedEachStudents(schoolNews)
    } else {
      // 학교 뉴스가 삭제 되었을 때
      continue
    }
  }
}

const convertNewImageToSchoolNews = (newImage: any) => {
  const unmarshalled = AWS.DynamoDB.Converter.unmarshall(newImage)
  console.log(unmarshalled)
  return unmarshalled
}
