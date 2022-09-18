export interface ILoggerService {
  info: (msg: string, ...rest: unknown[]) => void,
  warn: (msg: string, ...rest: unknown[]) => void,
  error: (msg: string, ...rest: unknown[]) => void,
  debug: (msg: string, ...rest: unknown[]) => void,
}
