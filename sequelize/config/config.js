// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv-flow").config()

let database = process.env.DB_NAME
let username = process.env.DB_USER
let password = process.env.DB_PASSWORD
let host = process.env.DB_HOST || "localhost"
let port = process.env.DB_PORT || "5432"

module.exports = {
  development: {
    dialect: "postgres",
    protocol: "postgres",
    database: database,
    username: username,
    password: password,
    host: host,
    port: port,
    define: {
      underscored: true,
    },
    dialectOptions: {},
  },
  test: {
    dialect: "postgres",
    protocol: "postgres",
    database: database,
    username: username,
    password: password,
    host: host,
    port: port,
    define: {
      underscored: true,
    },
    dialectOptions: {},
  },
  production: {
    dialect: "postgres",
    protocol: "postgres",
    database: database,
    username: username,
    password: password,
    host: host,
    port: port,
    define: {
      underscored: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
}
