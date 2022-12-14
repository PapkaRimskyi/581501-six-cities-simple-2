import { readFile } from 'fs/promises';
import chalk from 'chalk';

import { CliCommand  } from '../ts/interfaces/cli-command.js';

import { CHARACTER_ENCODING } from '../const/const.js';

class Version implements CliCommand {
  public name = '--version';

  public async run() {
    return await this.parsePackageFile();
  }

  private async parsePackageFile() {
    try {
      const parsedPackageJson = await readFile('./package.json', CHARACTER_ENCODING)
        .then((res) => JSON.parse(res));
      console.log(`Версия проекта - ${chalk.red(parsedPackageJson.version)}`);
    } catch {
      console.error('Ошибка в определении версии');
    }
  }
}

export default Version;
