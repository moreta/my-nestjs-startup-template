import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  // openapi (swagger)
  const config = new DocumentBuilder()
    .setTitle("My Nestjs API")
    .setDescription("My Nestjs API spec")
    .setVersion("0.1")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(configService.get<number>("PORT")!)
  console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
