import { Sequelize } from "sequelize"
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Unique,
  Default,
} from "sequelize-typescript"

// https://github.com/thomasmost/hackspeed/blob/d01b85dd51e2720175f384f290d578e907094da1/server/models/event.model.ts
@Table({ tableName: "app_users", underscored: true })
export class AppUser extends Model {
  @Default(Sequelize.literal("gen_random_uuid()"))
  @PrimaryKey
  @Column
  id: string

  @Unique
  @Column
  email: string

  @Column
  username: string

  @Column
  acceptTermsAndConditions: boolean
}
