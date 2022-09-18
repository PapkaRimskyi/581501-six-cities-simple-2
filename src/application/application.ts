import {inject, injectable} from 'inversify';

import { ILoggerService } from '../logger-service/interfaces/interface.js';
import { IEnvService } from '../env-service/interfaces/interface.js';

import TYPES from '../ioc-types.js';

@injectable()
class Application {
  private loggerService: ILoggerService;
  private envService: IEnvService;

  constructor(@inject(TYPES.ILoggerService) loggerService: ILoggerService, @inject(TYPES.IEnvService) envService: IEnvService) {
    this.loggerService = loggerService;
    this.envService = envService;
  }

  public init() {
    this.loggerService.info('Application was settled');
    this.loggerService.info(String(this.envService.get('PORT')));
  }
}

export default Application;


