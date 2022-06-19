import * as request from "supertest"
import { getTestRequest } from "../../../util/test-request"

describe("AppController (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  const adminToken = "admin4"

  beforeAll(async () => {
    testRequest = await getTestRequest()
  })

  describe("POST /admin/school", () => {
    const baseRouter = "/admin/school"

    const testBody = {
      location: "테스트",
      name: "테스트대학교",
    }

    it("/ (POST) 202", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .expect(201)
    })

    it("/ (POST) 403", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .expect(403)
    })
  })

  describe("POST /admin/school/news", () => {
    const baseRouter = "/admin/school/news"

    const testBody = {
      school_code: "테스트-테스트대학교",
      title: "테스트대학교title",
      context: "테스트대학교context",
    }

    it("/ (POST) 202", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .expect(201)
    })
  })
})
