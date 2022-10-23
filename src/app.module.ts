import { Module } from "@nestjs/common"
import { AppUsersModule } from "./app-users/app-users.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CommonModule } from "./common/common.module"

@Module({
  imports: [CommonModule, AppUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
