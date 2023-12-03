'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { yupResolver } from '@hookform/resolvers/yup';
import { userShema } from 'utils/schemes/user-shema';

import { RatingStars } from '../RatingStars';
import { MinorButton } from 'ui/components/Button';
import { SendIcon } from 'components/icons/SendIcon';

import s from './Review.module.scss';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from 'apollo/mutations/user';
import { ErrorMessage, SuccessMessage } from '../messages/Messages';
import { Loader } from '../loader';
import { useRouter } from 'next/navigation';

interface ISendReview {
  review: string;
}

interface SendReviewProps {
  userId: string;
}

export const SendReview: FC<SendReviewProps> = ({ userId }) => {
  const t = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.SendReview'
  );
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [errorRating, setErrorRating] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ISendReview>({
    resolver: yupResolver(userShema.sendReview),
  });

  const [createReview, { loading, error }] = useMutation(CREATE_REVIEW);
  const handleSendReview = ({ review }: ISendReview) => {
    if (rating === 0) {
      setErrorRating(true);
      return;
    }

    setSuccess(false);
    createReview({
      variables: {
        input: {
          rating: rating,
          receivedBy: userId,
          text: review,
        },
      },
      onCompleted() {
        setRating(0);
        reset();
        setSuccess(true);
        router.refresh();
      },
      onError(err) {
        console.error(err);
      },
    });
  };

  const handleChangeRating = (newRating: number) => {
    setRating(newRating);
    setErrorRating(false);
  };

  return (
    <div className={s.send}>
      <div className={s.send_top}>
        <h4>{t('title')}</h4>
      </div>
      <form onSubmit={handleSubmit(handleSendReview)}>
        <div className={s.send_body}>
          <textarea
            {...register('review', {
              required: true,
            })}
            placeholder={t('write_review')}
            className={`${s.send_textarea} ${
              errors.review ? '_invalid' : ''
            }`.trim()}
          />
        </div>
        <div className={s.send_footer}>
          <div>
            <RatingStars
              edit={true}
              value={rating}
              onChange={handleChangeRating}
            />
          </div>
          <div className={s.send_button_box}>
            <MinorButton className={s.send_button} type="submit">
              <span className="text_accent">{t('send')}</span>
              <SendIcon />
            </MinorButton>
          </div>
        </div>
        {errorRating && <p className="text_invalid">{t('required_rating')}</p>}
      </form>
      {error && <ErrorMessage text={error.message} />}
      {loading && <Loader />}
      {success && (
        <SuccessMessage
          title={t('success_title')}
          text={t('success_subtitle')}
        />
      )}
    </div>
  );
};
