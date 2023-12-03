import { yupResolver } from '@hookform/resolvers/yup';
import { DropdownField } from 'components/common/DropdownField';
import { FieldBox } from 'components/common/fieldBox';
import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { EnumLanguage, EnumPlatforms } from 'types/enums';
import { IProduct } from 'types/shopTypes';
import { userShema } from 'utils/schemes/user-shema';

import s from './ProductForm.module.scss';

interface IProductForm {
  quantity: number;
  category: string;
  subcategory: string;
  price: number;
  platform: EnumPlatforms;
  short_description_language: EnumLanguage;
  description_language: EnumLanguage;
  short_description: string;
  description: string;
}

interface ProductFormProps {
  product?: IProduct;
  footer?: ReactNode;
}

export const ProductForm: FC<ProductFormProps> = ({ product, footer }) => {
  const t = useTranslations('ProfilePage.CreateOffer.Form');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(userShema.productForm),
  });

  const handleSubmitForm = (data: IProductForm) => {
    console.log(data);
  };

  const fields = [
    {
      label: t('category_label'),
      placeholder: t('category_placeholder'),
      name: 'category',
      select: true,
      inner: <div>inner</div>,
    },
    {
      label: t('subcategory_label'),
      placeholder: t('subcategory_placeholder'),
      name: 'subcategory',
      select: true,
      inner: <div>inner</div>,
    },
    {
      label: t('price_label'),
      placeholder: t('price_placeholder'),
      name: 'price',
      type: 'number',
      inner: <div>inner</div>,
    },
    {
      label: t('platform_label'),
      placeholder: t('platform_placeholder'),
      name: 'platform',
      select: true,
      inner: <div>inner</div>,
    },
    {
      label: t('short_description_language_label'),
      name: 'short_description_language',
      select: true,
      value: 'En',
      inner: <div>inner</div>,
    },
    {
      label: t('description_language_label'),
      name: 'description_language',
      select: true,
      value: 'En',
      inner: <div>inner</div>,
    },
  ];

  const textareas = [
    {
      label: t('short_descriptionn_label'),
      placeholder: t('short_description_placeholder'),
      name: 'short_description',
    },
    {
      label: t('description_label'),
      placeholder: t('description_placeholder'),
      name: 'description',
    },
  ];

  return (
    <form className={s.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={s.form_fields}>
        <div>
          <label className={s.form_label} htmlFor="quantity">
            {t('quantity_label')}
          </label>
          <div>
            <input
              {...register('quantity', {
                required: true,
              })}
              type="number"
            />
          </div>
        </div>
        {fields.map((field, index) => (
          <>
            {field.select ? (
              <DropdownField
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                value={field.value}
                register={register}
                errors={errors}
                children={field.inner}
              />
            ) : (
              <FieldBox
                register={register}
                errors={errors}
                name={field.name}
                placeholder={field.placeholder}
                label={field.placeholder}
                type={field.type}
                className={s.form_fieldbox}
              />
            )}
          </>
        ))}
      </div>

      {footer && <div className={s.form_footer}>{footer}</div>}
    </form>
  );
};
