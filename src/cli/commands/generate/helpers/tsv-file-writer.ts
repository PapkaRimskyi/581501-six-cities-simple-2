import { createWriteStream } from 'fs';

import { ITsvFileWriter } from '../interfaces/interface.js';
import { CHARACTER_ENCODING } from '../../../const/const.js';

class TsvFileWriter implements ITsvFileWriter {
  constructor(public data: (string | number | boolean | string[])[][], public filepath: string) {}

  public async write() {
    const stream = createWriteStream(this.filepath, { highWaterMark: 16384, autoClose: true, encoding: CHARACTER_ENCODING });

    try {
      for await (const item of this.data) {
        const buffer = Buffer.from(item.join('\t'));

        if (!stream.write(`${buffer}\n`)) {
          await new Promise((resolve) => stream.once('drain', resolve));
        }
      }

      stream.close(() => console.log('All data were written. File created!'));
    } catch (e) {
      console.error('Error happened', e);
    }
  }
}

export default TsvFileWriter;
