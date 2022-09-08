export enum UserTypes {
  DEFAULT = 'default',
  PRO = 'pro',
}

export interface IUser {
  name: string,
  email: string,
  avatar?: string,
  password: string,
  userType: UserTypes,
}
