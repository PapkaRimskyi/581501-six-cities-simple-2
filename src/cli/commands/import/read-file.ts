import { readFile } from 'fs/promises';

import { IReadFile } from '../../@types/read-file.js';
import { ApartmentEnum, ApartmentGoods, IArendaSuggestion } from '../../../@types/arenda-suggestion.js';

import { CHARACTER_ENCODING } from '../../const/const.js';

class ReadFile implements IReadFile {
  constructor(public fileName: string) {}

  public async read(): Promise<IArendaSuggestion[]> {
    try {
      const readedFile = await readFile(this.fileName, { encoding: CHARACTER_ENCODING });
      const result = this.transformToCollection(readedFile);
      console.log(result);
      return result;
    } catch(e) {
      console.error('Произошла ошибка во время чтения файла');
      return [];
    }
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
          placePhotos: placePhotos.split(', '),
          isPremium: Boolean(isPremium),
          rating: Number(rating),
          apartmentType: apartmentType as ApartmentEnum,
          roomAmount: Number(roomAmount),
          guestsAmount: Number(guestsAmount),
          rentPrice: Number(rentPrice),
          apartmentGoods: apartmentGoods.split(', ') as ApartmentGoods[],
          author,
          coords,
        }
      ));
  }
}

export default ReadFile;
