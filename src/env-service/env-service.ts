import dotenv from 'dotenv';

import { IConfigSchema, IEnvService } from './interfaces/interface.js';
import { ILoggerService } from '../logger-service/interfaces/interface.js';

import configSchema from './shema.js';

class EnvService implements IEnvService {
  private config: IConfigSchema;
  private logger: ILoggerService;

  constructor(logger: ILoggerService) {
    this.logger = logger;
    const envParsedOutput = dotenv.config();

    if (envParsedOutput.error) {
      throw new Error('Error during .env file parse');
    }

    configSchema.load({});
    configSchema.validate({ allowed: 'strict', output: this.logger.info });

    this.config = configSchema.getProperties();
    this.logger.info('.env filed was red');
  }

  get<T extends keyof IConfigSchema>(key: T) {
    return this.config[key];
  }
}

export default EnvService;
