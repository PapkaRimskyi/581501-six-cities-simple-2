export interface CliCommand {
  name: string,
  run: (...args: string[]) => void,
}
