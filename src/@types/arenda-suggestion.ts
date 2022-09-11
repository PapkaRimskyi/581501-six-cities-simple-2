// import { TUser } from './user.js';

export type PlacePhotoType = string;

export enum ApartmentEnum {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  ROOM = 'room',
  HOTEL = 'hotel',
}

export enum ApartmentGoodsEnum {
  BREAKFAST = 'Breakfast',
  AIR_CONDITIONING = 'Air conditioning',
  LAPTOP_FRIENDLY_WORKSPACE = 'Laptop friendly workspace',
  BABY_SEAT = 'Baby seat',
  WASHER = 'Washer',
  TOWELS = 'Towels',
  FRIDGE = 'Fridge',
}

export type TPlaceCoords = {
  latitude: number,
  longitude: number,
}

export type TArendaSuggestion = {
  name: string,
  description: string,
  createdAt: Date,
  city: string,
  imgPreview: string,
  placePhotos: PlacePhotoType[],
  isPremium: boolean,
  rating: number,
  apartmentType: ApartmentEnum,
  roomAmount: number,
  guestsAmount: number,
  rentPrice: number,
  apartmentGoods: ApartmentGoodsEnum[],
  author: string,
  coords: string,
}
