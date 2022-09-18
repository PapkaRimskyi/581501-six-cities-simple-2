import { injectable } from 'inversify';
import pino, { Logger } from 'pino';

import { ILoggerService } from './interfaces/interface.js';

@injectable()
class LoggerService implements ILoggerService {
  private logger: Logger;

  constructor() {
    this.logger = pino();
  }

  public info(msg: string) {
    this.logger.info(msg);
  }

  public warn(msg: string) {
    this.logger.warn(msg);
  }

  public error(msg: string) {
    this.logger.error(msg);
  }

  public debug(msg: string) {
    this.logger.debug(msg);
  }
}

export default LoggerService;
