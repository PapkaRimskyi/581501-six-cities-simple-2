import ReadFile from './read-file.js';

import { CliCommand } from '../../@types/cli-command.js';

class Import implements CliCommand {
  public name = '--import';

  public async run(fileName: string) {
    const readFile = new ReadFile(fileName);
    await readFile.read();
  }
}

export default Import;
