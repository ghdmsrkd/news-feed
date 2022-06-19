import { INestApplication } from "@nestjs/common"
import * as request from "supertest"
import { getTestModule, getTestRequest } from "../../../../util/test-request"
import SubscribeRepository from "../../../../../src/common/database/ddb/subscribe/subscribe.repo"

describe("Student/School/Subscribe (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  let testModule: INestApplication
  const studentToken = "studentTest"
  let testSubscribeId: string

  beforeAll(async () => {
    testModule = await getTestModule()

    const hashId = testModule
      .get(SubscribeRepository)
      .createNewHashId("테스트-테스트학교", studentToken)

    testRequest = await getTestRequest()
    testSubscribeId = hashId
  })

  describe("POST /student/school/subscribe", () => {
    const baseRouter = "/student/school/subscribe"

    it("/ (POST) 201", () => {
      const testBody = {
        school_code: "테스트-테스트학교",
      }
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${studentToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(201)
        })
    })

    it("/ (POST) 403", () => {
      const testBody = {
        school_code: "테스트-테스트학교",
      }
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${studentToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(403)
        })
    })
  })

  describe("GET /student/school/subscribe", () => {
    const baseRouter = "/student/school/subscribe"

    it("/ (GET) 200", () => {
      return testRequest
        .get(baseRouter)
        .set("Authorization", `Bearer ${studentToken}`)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })

  describe("GET /student/school/subscribe/news", () => {
    const baseRouter = "/student/school/subscribe/news"

    it("/ (GET) 200", () => {
      const testQuery = { school_code: "테스트-테스트학교" }
      return testRequest
        .get(baseRouter)
        .query(testQuery)
        .set("Authorization", `Bearer ${studentToken}`)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })

  describe("DELETE /student/school/subscribe/news", () => {
    const baseRouter = "/student/school/subscribe"

    it("/ (DELETE) 200", () => {
      const testBody = { subscribe_id: testSubscribeId }
      return testRequest
        .delete(baseRouter)
        .send(testBody)
        .set("Authorization", `Bearer ${studentToken}`)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })

  afterAll(async () => {})
})
