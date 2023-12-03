import { IAchievement, RatingsStats } from 'types/userTypes';
import { EnumPayment, EnumPaymentStatus, EnumPlatforms } from './enums';

export interface ISection {
  name: string;
  id: string;
  imageUrl: string;
  logoUrl: string;
  categories: [
    {
      _id: string;
      name: string;
    },
  ];
  filters: {
    selects: {
      placeholder: string;
      field: string;
      values: string[];
    };
    inputFields: {
      placeholder: string;
      field: string;
    };
    minMax: {
      field: string;
    };
  };
  description: string;
}

export interface ICategory {
  _id: string;
  name: string;
  section: {
    _id: string;
    name: string;
  };
}

export interface ICategoryMini {
  _id: string;
  name: string;
}

export interface IOneCategory {
  _id: string;
  name: string;
  sectionId: string;
  products: IProductForCategory[];
}

export interface ILanguages {
  sh: string;
  pt: string;
  ru: string;
  en: string;
  ar: string;
  es: string;
}

export interface IUserDetail {
  avatarURL: string;
  userName: string;
}

export interface IUserDetailWithStats {
  avatarURL: string;
  email: string;
  id: string;
  payPalInfo: {
    paypalId: string;
    confirmed: string;
  };
  ratingsStats: RatingsStats;
  stripeId: string;
  userName: string;
}

export interface IProduct {
  categoryName: string;
  createdAt: string;
  id: string;
  createdBy: IUserDetailWithStats;
  imageUrl: string;
  platform: EnumPlatforms;
  price: number;
  quantity: string;
  sectionName: string;
  shortDescription: ILanguages;
  description: ILanguages;
  sold: boolean;
  stripePriceId: string;
}

export interface IProductForCategory {
  _id: string;
  createdAt: string;
  createdBy: IUserDetail;
  imageUrl: string;
  platform: EnumPlatforms;
  price: number;
  quantity: string;
  shortDescription: ILanguages;
  sold: boolean;
  stripePriceId: string;
}

export interface IPurchaseProduct {
  acceptedAt: string;
  boughtBy: IUserDetail;
  id: string;
  payment: {
    method: EnumPayment;
    paymentCode?: string;
  };
  price: number;
  productId: {
    id: string;
    shortDescription: ILanguages;
  };
  received: boolean;
  soldBy: IUserDetail;
  status: EnumPaymentStatus;
}

export interface IGetAllSectionsResponse {
  getAllSections: ISection[];
}

export interface IGetOneSectionResponse {
  getOneSection: ISection;
}

export interface IGetAllCategoriesResponse {
  getAllCategories: ICategory[];
}

export interface IGetOneCategoryResponse {
  getOneCategory: IOneCategory;
}

export interface IGetAllProductsResponse {
  getAllProducts: IProduct[];
}

export interface IGetOneProductResponse {
  getOneProduct: IProduct;
}
