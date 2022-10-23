import { Controller, Get, Body, Post, Param, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AppUser } from "../database/app-user.entity"
import { AppUserCreateInput } from "./app-users.dto"
import { AppUsersService } from "./app-users.service"

@ApiTags("users")
@Controller("users")
export class AppUsersController {
  constructor(private appUserService: AppUsersService) {}

  @Get()
  async getAppUserAll(): Promise<AppUser[]> {
    return await this.appUserService.findAll()
  }

  @Post()
  async createAppUser(@Body() input: AppUserCreateInput): Promise<AppUser> {
    return await this.appUserService.create(input)
  }

  @Get(":id")
  async getAppUser(@Param("id") appUserId: string): Promise<AppUser> {
    return await this.appUserService.findOne({ id: appUserId })
  }

  @Get()
  async getAppUserFindBy(@Query("username") username: string): Promise<AppUser> {
    return await this.appUserService.findOne({ username: username })
  }
}
