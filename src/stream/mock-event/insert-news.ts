export const mockEvent = {
  Records: [
    {
      eventID: "9b353fc61e53755b33c0b5ed592da994",
      eventName: "INSERT",
      eventVersion: "1.1",
      eventSource: "aws:dynamodb",
      awsRegion: "ap-northeast-2",
      dynamodb: {
        ApproximateCreationDateTime: 1655460477,
        Keys: {
          school_news_id: {
            S: "abe94aba-5b1b-49d6-b080-f2a0c71b5757",
          },
        },
        NewImage: {
          school_code: {
            S: "서울-서울초등학교",
          },
          context: {
            S: "서울초등학교context3",
          },
          created_at: {
            N: "1655460477076",
          },
          title: {
            S: "서울초등학교title3",
          },
          school_news_id: {
            S: "abe94aba-5b1b-49d6-b080-f2a0c71b5757",
          },
        },
        SequenceNumber: "5015200000000011444098749",
        SizeBytes: 216,
        StreamViewType: "NEW_IMAGE",
      },
      eventSourceARN:
        "arn:aws:dynamodb:ap-northeast-2:458027456759:table/CLASSTING_SCHOOL_NEWS/stream/2022-06-17T09:55:34.326",
    },
  ],
}
