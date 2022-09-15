import GetData from '../../helpers/get-data.js';
import ConfigureData from './helpers/configure-data.js';
import TsvFileWriter from './helpers/tsv-file-writer.js';

import { CliCommand } from '../../ts/interfaces/cli-command.js';
import { TMockData } from '../../ts/types/api-mock-data.js';

class Generate implements CliCommand {
  public name = '--generate';

  async run(n: string, filepath: string, url: string) {
    const getData = new GetData(url);
    const data = await getData.get<TMockData>();
    if (data) {
      const configureData = new ConfigureData();
      const configuredData = configureData.get(data, n);
      const tsvFileWriter = new TsvFileWriter(configuredData, filepath);
      await tsvFileWriter.write();
    }
  }
}

export default Generate;
