import TsvFileReader from './helpers/tsv-file-reader.js';

import { CliCommand } from '../../ts/interfaces/cli-command.js';

class Import implements CliCommand {
  public name = '--import';

  public async run(fileName: string) {
    const readFile = new TsvFileReader(fileName);
    await readFile.read();
  }
}

export default Import;
