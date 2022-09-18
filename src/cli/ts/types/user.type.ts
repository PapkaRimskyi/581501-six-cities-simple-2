export enum UserTypesEnum {
  DEFAULT = 'default',
  PRO = 'pro',
}

export type TUser = {
  name: string,
  email: string,
  avatar?: string,
  password: string,
  userType: UserTypesEnum,
}
