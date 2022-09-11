import fs from 'fs/promises';
import dayjs from 'dayjs';

import GetData from '../../helpers/get-data.js';
import { getRandomData } from './helpers/get-random-data.js';

import { CliCommand } from '../../interfaces/cli-command.js';
import { TMockData } from '../../../@types/api-mock-data.js';

class Generate implements CliCommand {
  public name = '--generate';

  async run(n: string, filepath: string, url: string) {
    const getData = new GetData(url);
    const data = await getData.get<TMockData>();
    if (data) {
      const createdData = this.configureMockData(data, n);
      this.createFile(createdData, filepath);
    }
  }

  configureMockData(data: TMockData, n: string) {
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
        // return [
        //   name,
        //   description,
        //   createdAt,
        //   city,
        //   imgPreview,
        //   placePhotos.join(';'),
        //   isPremium,
        //   rating,
        //   apartmentType,
        //   roomAmount,
        //   guestsAmount,
        //   rentPrice,
        //   apartmentGoods.join(';'),
        //   author,
        //   coords,
        // ];
      }
      return generatedData;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  createFile<T>(data: Array<Array<T>>, filepath: string) {
    data.forEach(async(item) => {
      await fs.appendFile(filepath, `${(item).join('\t')}${'\n'}`);
    });
  }
}

export default Generate;
