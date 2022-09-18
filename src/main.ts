import { Container } from 'inversify';
import 'reflect-metadata';

import LoggerService from './logger-service/logger-service.js';
import Application from './application/application.js';
import EnvService from './env-service/env-service.js';

import { ILoggerService } from './logger-service/interfaces/interface.js';
import { IEnvService } from './env-service/interfaces/interface.js';

import TYPES from './ioc-types.js';

const iocContainer = new Container();
iocContainer.bind<ILoggerService>(TYPES.ILoggerService).to(LoggerService).inSingletonScope();
iocContainer.bind<IEnvService>(TYPES.IEnvService).to(EnvService).inSingletonScope();
iocContainer.bind<Application>(TYPES.Application).to(Application).inSingletonScope();

const application = iocContainer.get<Application>(TYPES.Application);

application.init();
