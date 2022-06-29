import * as request from "supertest"
import { getTestRequest } from "../../../util/test-request"

describe("Student/Feed (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  const studentToken = "studentTest"

  beforeAll(async () => {
    testRequest = await getTestRequest()
  })

  describe("GET /student/feed", () => {
    const baseRouter = "/student/feed"

    it("/ (GET) 200", () => {
      return testRequest
        .get(baseRouter)
        .set("Authorization", `Bearer ${studentToken}`)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })

  afterAll(async () => {})
})
