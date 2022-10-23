import { Injectable, Inject, BadRequestException } from "@nestjs/common"
import { EntityRepository } from "../common/constants"
import { AppUser } from "../database/app-user.entity"
import { AppUserCreateInput, AppUserWhereUniqueInput } from "./app-users.dto"

// https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
@Injectable()
export class AppUsersService {
  constructor(
    @Inject(EntityRepository.APP_USERS)
    private appUsersRepository: typeof AppUser,
  ) {}

  async create(data: AppUserCreateInput): Promise<AppUser> {
    const result = await this.appUsersRepository.create<AppUser>({
      ...data,
    })
    return result
  }

  async findAll(): Promise<AppUser[]> {
    return this.appUsersRepository.findAll<AppUser>()
  }

  async findOne(uniqueInput: AppUserWhereUniqueInput): Promise<AppUser> {
    const appUser = await this.appUsersRepository.findOne({
      where: { ...uniqueInput },
    })
    if (!appUser) {
      throw new BadRequestException("Invalid params")
    }

    return appUser
  }
}
