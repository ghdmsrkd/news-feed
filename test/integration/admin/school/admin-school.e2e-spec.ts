import * as request from "supertest"
import { getTestRequest } from "../../../util/test-request"

describe("AppController (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  const adminToken = "admin4"

  beforeAll(async () => {
    testRequest = await getTestRequest()
  })

  // /admin/school
  describe("POST /admin/school", () => {
    const baseRouter = "/admin/school"

    it("/ (POST) 403", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          location: "서울",
          name: "서울대학교",
        })
        .expect({ status: 403, message: "해당 항목이 이미 존제 합니다." })
    })
  })
})
