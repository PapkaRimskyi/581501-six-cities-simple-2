import { ILoggerService } from '../logger-service/interfaces/interface.js';

class Application {
  private logger: ILoggerService;

  constructor(logger: ILoggerService) {
    this.logger = logger;
  }

  public init() {
    this.logger.info('Application was settled');
  }
}

export default Application;


