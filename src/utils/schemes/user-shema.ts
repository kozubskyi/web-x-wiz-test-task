import { EnumLanguage, EnumPlatforms } from 'types/enums';
import * as yup from 'yup';

export const userShema = {
  changeUser: yup.object({
    userName: yup.string(),
    email: yup.string().email('email_format'),
    zipCode: yup.string(),
  }),

  changePassword: yup.object({
    current_password: yup.string().required(' '),
    new_password: yup
      .string()
      .min(8, 'min_length')
      .matches(/^(?=.*[a-z])/, 'min_one_lower')
      .matches(/\d+/, 'min_one_num')
      .required(' '),
    repeat_new_password: yup
      .string()
      .oneOf([yup.ref('new_password')], 'not_match')
      .required(' '),
  }),

  sendReview: yup.object({
    review: yup.string().required(' '),
  }),

  paymentSearch: yup.object({
    transaction_code: yup.string(),
    date_from: yup.string(),
    date_to: yup.string(),
  }),

  offersSearch: yup.object({
    search_offer: yup.string(),
    price_from: yup.string(),
    price_to: yup.string(),
  }),

  salesOffersSearch: yup.object({
    search_offer: yup.string(),
    date_from: yup.string(),
    date_to: yup.string(),
  }),

  salesSearch: yup.object({
    search: yup.string(),
    date_from: yup.string(),
    date_to: yup.string(),
  }),

  productForm: yup.object({
    quantity: yup.number().required(' '),
    category: yup.string().required(' '),
    subcategory: yup.string().required(' '),
    price: yup.number().required(' '),
    platform: yup.string().oneOf(Object.values(EnumPlatforms)).required(' '),
    short_description_language: yup
      .string()
      .oneOf(Object.values(EnumLanguage))
      .required(' '),
    description_language: yup
      .string()
      .oneOf(Object.values(EnumLanguage))
      .required(' '),
    short_description: yup.string().required(' '),
    description: yup.string().required(' '),
  }),
};
