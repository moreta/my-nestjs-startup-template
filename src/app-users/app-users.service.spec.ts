import { faker } from "@faker-js/faker/locale/ja"
import { Test, TestingModule } from "@nestjs/testing"
import { Sequelize } from "sequelize-typescript"
import { CommonModule } from "../common/common.module"
import { SEQUELIZE_PROVIDER } from "../common/constants"
import { DatabaseModule } from "../database/database.module"
import { AppUserCreateInput, AppUserWhereUniqueInput } from "./app-users.dto"
import { AppUsersService } from "./app-users.service"

describe("AppUsersService", () => {
  let service: AppUsersService
  let sequelize: Sequelize

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule, DatabaseModule],
      providers: [AppUsersService],
    }).compile()

    service = module.get<AppUsersService>(AppUsersService)
    sequelize = module.get<Sequelize>(SEQUELIZE_PROVIDER)
    await sequelize.sync({ force: true })
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create new user ", async () => {
    const user: AppUserCreateInput = {
      email: "hello1@prisma.io",
      username: "Rich",
      acceptTermsAndConditions: true,
    }

    const createdUser = await service.create(user)
    expect(createdUser?.username).toEqual(user.username)
  })

  it("return one user by id", async () => {
    const user: AppUserCreateInput = {
      email: "hello1@prisma.io",
      username: "Rich",
      acceptTermsAndConditions: true,
    }
    const createdUser = await service.create(user)
    const input: AppUserWhereUniqueInput = {
      id: createdUser!.id,
    }
    const foundUser = await service.findOne(input)
    expect(foundUser!.id).toEqual(createdUser?.id)
  })

  it("return one user by email", async () => {
    const user: AppUserCreateInput = {
      email: "hello1@prisma.io",
      username: "Rich",
      acceptTermsAndConditions: true,
    }
    const createdUser = await service.create(user)
    const input: AppUserWhereUniqueInput = {
      email: user.email,
    }
    const foundUser = await service.findOne(input)
    expect(foundUser!.id).toEqual(createdUser?.id)
  })

  it("returns users", async () => {
    const allUserCount = 5
    for (const id of [...Array(allUserCount).keys()]) {
      const user: AppUserCreateInput = {
        email: faker.internet.email(),
        username: faker.name.fullName(),
        acceptTermsAndConditions: true,
      }
      await service.create(user)
    }
    const users = await service.findAll()
    expect(users.length).toBe(allUserCount)
  })
})
