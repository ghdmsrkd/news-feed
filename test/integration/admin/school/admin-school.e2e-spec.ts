import { INestApplication } from "@nestjs/common"
import SchoolRepository from "../../../../src/common/database/ddb/school/school.repo"
import * as request from "supertest"
import { getTestModule, getTestRequest } from "../../../util/test-request"
import SchoolNewsRepository from "../../../../src/common/database/ddb/school-news/school-news.repo"

describe("Admin/School (e2e)", () => {
  let testRequest: request.SuperTest<request.Test>
  let testModule: INestApplication
  const adminToken = "admin4"
  let testSchoolNewsId: string

  beforeAll(async () => {
    testModule = await getTestModule()
    const mockSchoolNews = await testModule
      .get(SchoolNewsRepository)
      .createOneSchoolNews(
        "테스트-테스트학교",
        "테스트학교title",
        "테스트학교context",
      )
    testRequest = await getTestRequest()
    testSchoolNewsId = mockSchoolNews.school_news_id
  })

  describe("POST /admin/school", () => {
    const baseRouter = "/admin/school"

    const testBody = {
      location: "테스트",
      name: "테스트학교",
    }

    it("/ (POST) 201", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(201)
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
      school_code: "테스트-테스트학교",
      title: "테스트학교title",
      context: "테스트학교context",
    }

    it("/ (POST) 202", () => {
      return testRequest
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(201)
        })
    })
  })

  describe("PATCH /admin/school/news", () => {
    const baseRouter = "/admin/school/news"

    it("/ (PATCH) 202", () => {
      const testBody = {
        school_news_id: testSchoolNewsId,
        context: "테스트학교context의 내용이 변경되었어요!!!",
      }
      return testRequest
        .patch(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })

  describe("DELTE /admin/school/news", () => {
    const baseRouter = "/admin/school/news"

    it("/ (DELTE) 202", () => {
      const testBody = {
        school_news_id: testSchoolNewsId,
      }
      return testRequest
        .delete(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send(testBody)
        .then((res) => {
          expect(res.statusCode).toBe(200)
        })
    })
  })
  afterAll(async () => {
    await testModule
      .get(SchoolRepository)
      .deleteSchoolByCode(`테스트-테스트학교`)
  })
})
