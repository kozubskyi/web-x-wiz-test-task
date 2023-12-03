import { IProduct } from 'types/shopTypes';
import { StaticImageData } from 'next/image';
import { IUser } from './userTypes';

export interface GetTopSeller {
  achievements: string[];
  avatarURL: string | StaticImageData;
  userName: string;
}

export interface IGetAllSellers {
  avatarURL: string;
  email: string;
  id: string;
  userName: string;
}

export interface GetTopSellersData {
  getTopSellers: GetTopSeller[];
}

export interface IGetAllSellersResponse {
  getAllSellers: IUser[];
}

export interface IGetSellerProductsResponse {
  getSellerProducts: IProduct[];
}
