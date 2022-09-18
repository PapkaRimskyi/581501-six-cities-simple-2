export type IConfigSchema = {
  PORT: number,
  DB_ADDRESS: string,
  SALT: string,
}

export interface IEnvService {
  get<T extends keyof IConfigSchema>(key: T): IConfigSchema[T],
}
