import { ILoggerService } from '../logger-service/interfaces/interface.js';
import { IEnvService } from '../env-service/interfaces/interface.js';

class Application {
  private loggerService: ILoggerService;
  private envService: IEnvService;

  constructor(loggerService: ILoggerService, envService: IEnvService) {
    this.loggerService = loggerService;
    this.envService = envService;
  }

  public init() {
    this.loggerService.info('Application was settled');
    this.loggerService.info(String(this.envService.get('PORT')));
  }
}

export default Application;


