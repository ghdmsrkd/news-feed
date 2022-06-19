import { INestApplication } from "@nestjs/common"
import SchoolRepository from "../../../../src/common/database/ddb/school/school.repo"
import * as request from "supertest"
import { getTestModule, getTestRequest } from "../../../util/test-request"

describe("AppController (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  let testModule: INestApplication
  const adminToken = "admin4"
  let testSchoolNewsId: string

  beforeAll(async () => {
    testRequest = await getTestRequest()
    testModule = await getTestModule()
  })

  describe("POST /admin/school", () => {
    const baseRouter = "/admin/school"

    const testBody = {
      location: "테스트",
      name: "테스트대학교",
    }

    it("/ (POST) 201", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then(async (res) => {
          expect(res.statusCode).toBe(201)
          const result = await testModule
            .get(SchoolRepository)
            .deleteSchoolByCode(`${testBody.location}-${testBody.name}`)
          console.log(result)
        })
    })

    it("/ (POST) 403", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(403)
        })
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
        .then((res) => {
          expect(res.statusCode).toBe(201)
          // 새로 생성한 학교 뉴스 아이디 할당
          testSchoolNewsId = res.body.school_news_id
          console.log(testSchoolNewsId)
        })
    })
  })

  describe("PATCH /admin/school/news", () => {
    const baseRouter = "/admin/school/news"
    console.log(testSchoolNewsId)
    const testBody = {
      school_news_id: testSchoolNewsId,
      context: "테스트대학교context의 내용이 변경되었어요!!!",
    }

    it("/ (PATCH) 202", () => {
      return testRequest
        .patch(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(200)
          console.log(res)
        })
    })
  })

  describe("DELTE /admin/school/news", () => {
    const baseRouter = "/admin/school/news"

    const testBody = {
      school_news_id: testSchoolNewsId,
    }

    it("/ (DELTE) 202", () => {
      return testRequest
        .delete(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })
})
