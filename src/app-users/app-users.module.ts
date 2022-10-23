import { Module } from "@nestjs/common"
import { AppUsersController } from "./app-users.controller"
import { AppUsersService } from "./app-users.service"

@Module({
  controllers: [AppUsersController],
  providers: [AppUsersService],
  exports: [AppUsersService],
})
export class AppUsersModule {}
