import { Handler, Context } from "aws-lambda"
import { Server } from "http"
import { createServer, proxy } from "aws-serverless-express"
import { eventContext } from "aws-serverless-express/middleware"

import { NestFactory } from "@nestjs/core"
import { ExpressAdapter } from "@nestjs/platform-express"
import { AppModule } from "../api/app.module"

import express = require("express")
import { setupSwagger } from "../common/nest/swagger"
import { ValidationPipe } from "@nestjs/common"
import { GlobalExceptionsFilter } from "../common/nest/filter/global-exception-filter"
import { GlobalResponseInterceptor } from "../common/nest/interceptor/global-response-interceptor"

const binaryMimeTypes: string[] = []

let cachedServer: Server

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express()
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    )
    nestApp.use(eventContext())
    nestApp.useGlobalFilters(new GlobalExceptionsFilter())
    nestApp.useGlobalInterceptors(new GlobalResponseInterceptor())
    nestApp.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    nestApp.setGlobalPrefix("api")
    setupSwagger(nestApp)
    await nestApp.init()
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes)
  }
  return cachedServer
}

export const apiHandler: Handler = async (event: any, context: Context) => {
  if (event.path === "/api") {
    event.path = "/api/"
  }
  event.path = event.path.includes("swagger-ui")
    ? `/api${event.path}`
    : event.path
  console.log(`Method : ${event.httpMethod} > Path: ${event.path}`)
  cachedServer = await bootstrapServer()
  return proxy(cachedServer, event, context, "PROMISE").promise
}
