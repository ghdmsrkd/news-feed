import { Test, TestingModule } from "@nestjs/testing"
import { INestApplication, ValidationPipe } from "@nestjs/common"
import * as request from "supertest"
import * as dotenv from "dotenv"
dotenv.config({ path: "./test.env" })
import { AppModule } from "../src/api/app.module"
import * as dynamoose from "dynamoose"
import { ddb } from "../src/common/database/ddb"

dynamoose.aws.ddb.set(ddb)

describe("AppController (e2e)", () => {
  let app: INestApplication
  const adminToken = "admin4"
  const studentToken = "student2"

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    await app.init()
  })

  // /admin/school
  describe("POST /admin/school", () => {
    const baseRouter = "/admin/school"

    it("/ (POST) 403", () => {
      return request(app.getHttpServer())
        .post(baseRouter)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          location: "서울",
          name: "서울대학교",
        })
        .expect(403)
    })
  })
})
