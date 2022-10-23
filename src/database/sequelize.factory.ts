import { Inject } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Sequelize } from "sequelize-typescript"
import { SEQUELIZE_PROVIDER } from "../common/constants"
import { SequelizeConfig } from "../common/configuration"
import { AppUser } from "./app-user.entity"

export const InjectSequelize = Inject(SEQUELIZE_PROVIDER)

export const sequelizeFactory = {
  provide: SEQUELIZE_PROVIDER,
  useFactory: async (configService: ConfigService) => {
    const sequelizeConfig =
      configService.get<SequelizeConfig>("sequelizeConfig")!
    const sequelize = new Sequelize(sequelizeConfig)
    sequelize.addModels([AppUser])
    await sequelize.sync()
    return sequelize
  },
  inject: [ConfigService],
}
