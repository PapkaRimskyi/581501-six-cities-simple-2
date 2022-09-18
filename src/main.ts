import LoggerService from './logger-service/logger-service.js';
import Application from './application/application.js';
import EnvService from './env-service/env-service.js';

const loggerService = new LoggerService();
const envService = new EnvService(loggerService);

const application = new Application(loggerService, envService);

application.init();
