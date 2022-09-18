import got from 'got';

import { IGetData } from '../ts/interfaces/interface.js';

class GetData implements IGetData {
  constructor(public pathname: string) {}

  async get<T>() {
    try {
      const data = await got.get(this.pathname).then((res): T  => JSON.parse(res.body));
      return data;
    } catch (e) {
      console.error(`Error during request. ${e}`);
      return null;
    }
  }
}

export default GetData;
