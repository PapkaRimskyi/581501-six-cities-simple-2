import GetData from '../../helpers/get-data.js';
import ConfigureData from './helpers/configure-data.js';
import TsvFileWriter from './helpers/tsv-file-writer.js';

import { ICliCommand } from '../../ts/interfaces/interface.js';
import { TMockData } from '../../ts/types/api-mock-data.type.js';

class Generate implements ICliCommand {
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
