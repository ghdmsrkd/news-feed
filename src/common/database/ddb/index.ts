import * as dynamoose from "dynamoose"

const ddb = new dynamoose.aws.sdk.DynamoDB({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: "ap-northeast-2",
})

dynamoose.aws.ddb.set(ddb)
