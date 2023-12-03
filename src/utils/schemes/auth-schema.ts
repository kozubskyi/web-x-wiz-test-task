import * as yup from 'yup';

export const userAuthShema = {
  login: yup.object({
    userLogin: yup.string().required(' '),
    password: yup.string().required(' '),
  }),

  registerBuyer: yup.object({
    email: yup.string().email('email_format').required(' '),
    password: yup
      .string()
      .min(8, 'min_length')
      .matches(/^(?=.*[a-z])/, 'min_one_lower')
      .matches(/\d+/, 'min_one_num')
      .required(' '),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'not_match')
      .required(' '),
  }),

  registerSeller: yup.object({
    userName: yup.string().required(' '),
    email: yup.string().email('email_format').required(' '),
    zipCode: yup.string().required(' '),
    password: yup
      .string()
      .min(8, 'min_length')
      .matches(/^(?=.*[a-z])/, 'min_one_lower')
      .matches(/\d+/, 'min_one_num')
      .required(' '),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'not_match')
      .required(' '),
  }),

  reset: yup.object({
    userLogin: yup.string().required(' '),
  }),

  updatePassword: yup.object({
    code: yup.string().required(' '),
    password: yup
      .string()
      .min(8, 'min_length')
      .matches(/^(?=.*[a-z])/, 'min_one_lower')
      .matches(/\d+/, 'min_one_num')
      .required(' '),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'not_match')
      .required(' '),
  }),
};

export const faqQuestionShema = yup.object({
  question: yup.string().required(' '),
});

export const contactShema = yup.object({
  fullName: yup.string().required(' '),
  email: yup.string().email('email_format').required(' '),
  subject: yup.string().required(' '),
  message: yup.string().required(' '),
});

export const searchCategoriesShema = yup.object({
  search: yup.string().required(' '),
  platform: yup.string(),
  level_min: yup.number().required(' '),
  level_max: yup.number().required(' '),
  stage_min: yup.number().required(' '),
  stage_max: yup.number().required(' '),
});

export const messageShema = yup.object({
  message: yup.string().required(' '),
});

export const reportSellerShema = yup.object({
  report_message: yup.string().required(' '),
});
