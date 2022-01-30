export interface IApartments {
  id: string;
  country: string;
  city: string;
  region: string;
  type: RoomType;
  number_of_rooms: number;
  number_of_beds: number;
  amount_of_places: number;
  star_rating: number;
  description: string;
  approve: boolean;
  user_id: string;
  photo: string[];
  price: number;

}

export enum RoomType {
  FLAT = 'flat',
  HOUSE = 'house',
  HOUSE_HOTEL = 'house-hotel'
}
