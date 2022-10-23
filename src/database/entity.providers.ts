import { EntityRepository } from "../common/constants"
import { AppUser } from "./app-user.entity"

export const entityProviders = [
  {
    provide: EntityRepository.APP_USERS,
    useValue: AppUser,
  }
]
