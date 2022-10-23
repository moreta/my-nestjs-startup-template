import { Module } from "@nestjs/common"
import { entityProviders } from "./entity.providers"
import { sequelizeFactory } from "./sequelize.factory"

@Module({
  providers: [sequelizeFactory, ...entityProviders],
  exports: [sequelizeFactory, ...entityProviders],
})
export class DatabaseModule {}
