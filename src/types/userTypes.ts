import { EnumRoles } from 'types/enums';
import { IProduct, IPurchaseProduct, IUserDetail } from './shopTypes';

interface KeyValue {
  key: string;
  value: string;
}

export interface RatingsStats {
  entries: KeyValue[];
}

export interface Address {
  city: string;
  phoneNumber: string;
  street: string;
  zipCode: string;
}

export interface IUser {
  achievements: string[];
  address: Address;
  avatarURL: string;
  backgroundColor: string;
  backgroundImage: string;
  banned: boolean;
  bonuses: number;
  confidentLvl: number;
  email: string;
  emailConfirmDate: string;
  experience: number;
  id: string;
  isTwoFactorEnabled: boolean;
  level: number;
  qrCode: string;
  ratingsStats: RatingsStats;
  role: EnumRoles;
  stripeId: string;
  subscribed: boolean;
  userName: string;
}

export interface IReview {
  createdAt: string;
  createdBy: IUserDetail;
  id: string;
  rating: number;
  receivedBy: IUserDetail;
  text: string;
  updatedAt: string;
}

export interface ILoginUserResponse {
  loginUser: {
    token: string;
    message: string;
    user: IUser;
    userId: string;
  };
}

export interface IRegisterBuyerResponse {
  registerBuyer: {
    token: string;
    message: string;
    user: IUser;
  };
}

export interface IRegisterSellerResponse {
  registerSeller: {
    token: string;
    message: string;
    user: IUser;
  };
}

export interface IGetUserByIdResponse {
  getUserById: IUser;
}

export interface IChangeUserResponse {
  changeUser: {
    message: string;
    user: IUser;
  };
}

export interface IGetBoughtProductsResponse {
  getMyBoughtProducts: IPurchaseProduct[];
}

export interface IGetSoldProductsResponse {
  getMySoldProducts: IPurchaseProduct[];
}

export interface IGetMyProductsResponse {
  getMyProducts: IProduct[];
}

export interface IAchievementCriteria {
  field: string;
  count: number;
}

export interface IAchievement {
  bonusPoints: number;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  updatedAt: string;
  criteria: IAchievementCriteria[];
}

export interface IGetAllAchievementsResponse {
  getAllAchievements: IAchievement[];
}

export interface IGetUserAchievementsResponse {
  getUserAchievements: IAchievement[];
}

export interface IGetUserReviewsResponse {
  getUserReviews: IReview[];
}

export interface IGetAllReviewsResponse {
  getAllReviews: IReview[];
}

export interface IGenerateQrcodeResponse {
  sessionGenerateQrcode: {
    message: string;
    qrCodeUrl: string;
  };
}

export interface IScanQrcodeResponse {
  sessionScanQrcode: {
    message: string;
    user: IUser;
  };
}
