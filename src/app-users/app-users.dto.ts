import { IsEmail, IsNotEmpty } from "class-validator"

export class AppUserCreateInput {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  acceptTermsAndConditions: boolean
}

export class AppUserWhereUniqueInput {
  id?: string
  email?: string
  username?: string
}
