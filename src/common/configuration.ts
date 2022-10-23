import process from "process"
import { Dialect } from "sequelize/types"

const env = process.env.NODE_ENV || "development"

// eslint-disable-next-line @typescript-eslint/no-var-requires
import sequelizeConfig from "../../sequelize/config/config.js"

export interface SequelizeConfig {
  dialect: Dialect
  protocol: string
  username: string
  password: string
  database: string
  host: string
  port?: number | undefined
  define: {
    underscored: boolean
  }
  dialectOptions: {
    ssl?: {
      require: boolean
      rejectUnauthorized: boolean
    }
  }
}

export default () => ({
  port: parseInt(process.env.PORT, 10),
  sequelizeConfig: sequelizeConfig[env],
})
