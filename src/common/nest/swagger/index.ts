import { INestApplication } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("News Feed API")
    .setDescription("News Feed REST API documentation")
    .setVersion("1.0.0")
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api", app, document)
}
