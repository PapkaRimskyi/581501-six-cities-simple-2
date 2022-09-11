import GetData from '../../helpers/get-data.js';

import { CliCommand } from '../../interfaces/cli-command.js';
import { TMockData } from '../../../@types/api-mock-data.js';

class Generate implements CliCommand {
  public name = '--generate';

  async run(n: string, filepath: string, url: string) {
    console.log(n, filepath);
    const getData = new GetData(url);
    const data = await getData.get<TMockData>();
    if (data) {
      console.log(data);
    }
  }
}

export default Generate;
