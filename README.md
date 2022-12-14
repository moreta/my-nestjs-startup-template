# nestjs startup template

* nestjs

### db

* timescaledb
* sequelize - currently sequelize is only option to use timescaledb on node

### package & type & lint

* pnpm
* typescript

### api spec

* openapi (swagger)

### test

* jest
* database reset 

## Installation

```bash
pnpm install
```

## Running the app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

# sequelize


### db create

```bash
pnpm run db:setup:test
pnpm run db:setup:dev
```

### create migration - create table

```bash
pnpm exec sequelize model:generate --name page_loads --attributes userAgent:string,time:date
```

### create migration - update column

```bash
pnpm exec sequelize migration:generate --name add_app_users_email_unique
```


### run migration

exec migration

```bash
pnpm exec sequelize db:migrate
```

