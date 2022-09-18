import TsvFileReader from './helpers/tsv-file-reader.js';

import { ICliCommand } from '../../ts/interfaces/interface.js';

class Import implements ICliCommand {
  public name = '--import';

  public async run(fileName: string) {
    const readFile = new TsvFileReader(fileName);
    await readFile.read();
  }
}

export default Import;
