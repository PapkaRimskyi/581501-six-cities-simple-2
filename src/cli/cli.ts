#!/usr/bin/env node

import CliController from './cli-controller.js';

import Version from './commands/version.js';
import Import from './commands/import/import.js';
import Help from './commands/help.js';

const cliController = new CliController();
cliController.setCommands([new Version(), new Import(), new Help()]);
cliController.processCommand(process.argv);
