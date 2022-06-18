import { mockEvent } from "../stream/mock-event"

exports.streamHandler = async (event) => {
  if (process.env.NODE_ENV === "dev") {
    event = mockEvent
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  }
  return response
}
