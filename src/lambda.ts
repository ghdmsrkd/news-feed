import { Handler, Context } from "aws-lambda"
import { Server } from "http"
import { createServer, proxy } from "aws-serverless-express"
import { eventContext } from "aws-serverless-express/middleware"

import { NestFactory } from "@nestjs/core"
import { ExpressAdapter } from "@nestjs/platform-express"
import { AppModule } from "./app.module"

import express = require("express")
import { setupSwagger } from "./common/nest/swagger"

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
    nestApp.setGlobalPrefix("api")
    setupSwagger(nestApp)
    await nestApp.init()
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes)
  }
  return cachedServer
}

export const handler: Handler = async (event: any, context: Context) => {
  if (event.path === "/api") {
    event.path = "/api/"
  }
  event.path = event.path.includes("swagger-ui")
    ? `/api${event.path}`
    : event.path
  cachedServer = await bootstrapServer()
  return proxy(cachedServer, event, context, "PROMISE").promise
}
