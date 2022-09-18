import { TMockData } from '../../../ts/types/api-mock-data.type.js';

export interface IConfigureData {
  get: (data: TMockData, n: string) => void,
}

export interface ITsvFileWriter {
  data: (string | number | boolean | string[])[][],
  filepath: string,
  write: () => void,
}
