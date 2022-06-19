import * as AWS from "aws-sdk"

export const StreamEventName = {
  INSERT: "INSERT",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
}

export const convertNewImageToSchoolNews = (newImage: any) => {
  const unmarshalled = AWS.DynamoDB.Converter.unmarshall(newImage)
  return unmarshalled
}
