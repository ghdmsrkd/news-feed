export const modifyMockEvent = {
  Records: [
    {
      eventID: "3b053546b908232e818aa620c3c77df7",
      eventName: "MODIFY",
      eventVersion: "1.1",
      eventSource: "aws:dynamodb",
      awsRegion: "ap-northeast-2",
      dynamodb: {
        ApproximateCreationDateTime: 1655572891,
        Keys: {
          school_news_id: {
            S: "65ebdb6d-624a-4885-883f-d9e91d91da46",
          },
        },
        NewImage: {
          school_code: {
            S: "서울-서울초등학교",
          },
          context: {
            S: "서울초등학교context3의 내용이 변경되었어요!",
          },
          created_at: {
            N: "1655456311463",
          },
          title: {
            S: "서울초등학교title2",
          },
          school_news_id: {
            S: "65ebdb6d-624a-4885-883f-d9e91d91da46",
          },
        },
        SequenceNumber: "10503400000000011363382218",
        SizeBytes: 249,
        StreamViewType: "NEW_IMAGE",
      },
      eventSourceARN:
        "arn:aws:dynamodb:ap-northeast-2:458027456759:table/CLASSTING_SCHOOL_NEWS/stream/2022-06-17T09:55:34.326",
    },
  ],
}
