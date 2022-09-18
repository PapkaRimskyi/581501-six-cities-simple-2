import dayjs from 'dayjs';

import { getRandomData } from './get-random-data.js';

import { IConfigureData } from '../interfaces/interface.js';
import { TMockData } from '../../../ts/types/api-mock-data.type.js';

class ConfigureData implements IConfigureData {
  get(data: TMockData, n: string) {
    try {
      const counter = parseInt(n, 10);
      const generatedData= [];
      for (let i = 0; i < counter; i++) {
        const name = getRandomData(data.name);
        const description = getRandomData(data.description);
        const createdAt = dayjs().toISOString();
        const city = getRandomData(data.city);
        const imgPreview = getRandomData(data.imgPreview);
        const placePhotos = getRandomData(data.placePhotos);
        const isPremium = getRandomData(data.isPremium);
        const rating = getRandomData(data.rating);
        const apartmentType = getRandomData(data.apartmentType);
        const roomAmount = getRandomData(data.roomAmount);
        const guestsAmount = getRandomData(data.guestsAmount);
        const rentPrice = getRandomData(data.rentPrice);
        const apartmentGoods = getRandomData(data.apartmentGoods);
        const author = getRandomData(data.author);
        const coords = getRandomData(data.coords);
        generatedData.push(
          [
            name,
            description,
            createdAt,
            city,
            imgPreview,
            placePhotos.join(';'),
            isPremium,
            rating,
            apartmentType,
            roomAmount,
            guestsAmount,
            rentPrice,
            apartmentGoods.join(';'),
            author,
            coords,
          ]
        );
      }
      return generatedData;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}

export default ConfigureData;
