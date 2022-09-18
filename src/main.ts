import LoggerService from './logger-service/logger-service.js';
import Application from './application/application.js';

const logger = new LoggerService();

const application = new Application(logger);

application.init();
