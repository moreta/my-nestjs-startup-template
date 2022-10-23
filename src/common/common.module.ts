import { Module, Global } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { DatabaseModule } from "../database/database.module"
import configuration from "./configuration"
import { getEnvFilePath } from "./env.helper"

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  exports: [DatabaseModule],
})
export class CommonModule {}
