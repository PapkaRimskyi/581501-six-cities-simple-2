import { createReadStream } from 'fs';

import { IReadFile } from '../interfaces/interface.js';
import { ApartmentEnum, ApartmentGoodsEnum } from '../../../ts/types/arenda-suggestion.type.js';

import { CHARACTER_ENCODING } from '../../../const/const.js';

class TsvFileReader implements IReadFile {
  lineCollection: string[] = [];

  constructor(public fileName: string) {
    this.pushLineToCollection = this.pushLineToCollection.bind(this);
  }

  public async read() {
    try {
      const readStream = createReadStream(this.fileName, { encoding: CHARACTER_ENCODING, highWaterMark: 16384 });

      readStream.on('line', this.pushLineToCollection);

      let line = '';
      let endLinePosition = -1;

      for await (const chunk of readStream) {
        line += chunk.toString();

        while((endLinePosition = line.indexOf('\n')) >= 0) {
          const completeRow = line.slice(0, endLinePosition + 1);
          line = line.slice(endLinePosition + 1);

          readStream.emit('line', completeRow);
        }
      }
      readStream.close();
      const readedCollection = this.transformToCollection(this.lineCollection.toString());
      console.log(readedCollection);
      console.log('Длина:', readedCollection.length);
    } catch (e) {
      console.log(e);
      console.error('Ошибка при чтении файла');
    }
  }

  public pushLineToCollection(line: string) {
    this.lineCollection.push(line);
  }

  private transformToCollection(readedFile: string) {
    return readedFile
      .split('\n')
      .filter((item) => item.trim())
      .map((row) => row.split('\t'))
      .map(([name, description, createdAt, city, imgPreview, placePhotos, isPremium, rating, apartmentType, roomAmount, guestsAmount, rentPrice, apartmentGoods, author, coords]) => (
        {
          name,
          description,
          createdAt: new Date(createdAt),
          city,
          imgPreview,
          placePhotos: placePhotos.split(';'),
          isPremium: Boolean(isPremium),
          rating: Number(rating),
          apartmentType: apartmentType as ApartmentEnum,
          roomAmount: Number(roomAmount),
          guestsAmount: Number(guestsAmount),
          rentPrice: Number(rentPrice),
          apartmentGoods: apartmentGoods.split(';') as ApartmentGoodsEnum[],
          author,
          coords,
        }
      ));
  }
}

export default TsvFileReader;
