export interface ICliCommand {
  name: string,
  run: (...args: string[]) => void,
}

export interface IGetData {
  readonly pathname: string,
  get: () => void,
}
