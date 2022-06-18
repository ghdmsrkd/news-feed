import { NestFactory } from "@nestjs/core"
import { StreamModule } from "../stream/stream.module"
import { TaskService } from "../stream/task/task.service"
import { mockEvent } from "../stream/mock-event"

exports.streamHandler = async (event) => {
  if (process.env.NODE_ENV === "dev") {
    event = mockEvent
  }

  const app = await NestFactory.createApplicationContext(StreamModule)
  const tasksService = app.get(TaskService)

  for (const recod of event.Records) {
    console.log(recod)
    if (recod.eventName === "INSERT") {
      const insertResult = await tasksService.insertFeedEachStudents("student2")
    } else if (recod.eventName === "UPDATE") {
      const updateResult = await tasksService.updateFeedEachStudents()
    } else {
      return null
    }
  }
}
