import getRandomNumber from '../../../../helpers/get-random-number.js';

export const getRandomData = <T>(data: Array<T>): T => {
  const randomNumber = getRandomNumber(0, data.length - 1);
  return data[randomNumber];
};
