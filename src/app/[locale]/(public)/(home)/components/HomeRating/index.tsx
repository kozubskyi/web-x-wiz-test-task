'use client';
import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';
import { MinorButton } from 'ui/components/Button';
import { ArtboardBackground } from 'components/backgrounds/ArtboardBackground';
import { RatingStars } from 'components/common/RatingStars';

import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';
import ArrowIcon from 'assets/images/icons/arrows/linear-arrow-right.svg';

import 'swiper/scss';
import s from './HomeRating.module.scss';

export const HomeRating: FC = () => {
  const t = useTranslations('Home.Rating');
  const swiperRef = useRef<any>(null);

  const comments = [
    {
      name: 'Brooklyn Simmons',
      date: '7/21/17',
      avatar: KristinImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 5,
    },
    {
      name: 'Brooklyn Simmons',
      date: '9/23/16',
      avatar: ArthurImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 4,
    },
    {
      name: 'Brooklyn Simmons',
      date: '10/11/16',
      avatar: KristinImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 4,
    },
    {
      name: 'Brooklyn Simmons',
      date: '9/23/16',
      avatar: ArthurImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 4,
    },
    {
      name: 'Brooklyn Simmons',
      date: '7/21/17',
      avatar: KristinImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 5,
    },
    {
      name: 'Brooklyn Simmons',
      date: '9/23/16',
      avatar: ArthurImg,
      text: 'Absolutely thrilled with my recent transaction on this platform! The seller was incredibly professional, and the account I purchased exceeded my expectations.',
      posted: 'Google',
      rating: 4,
    },
  ];

  return (
    <section className={s.rating}>
      <Container>
        <div className={s.rating_content}>
          <div className={s.rating_top}>
            <h2>{t('title')}</h2>
            <p className="text_subtitle">{t('subtitle')}</p>
          </div>
          <div className={s.rating_comments}>
            <Swiper
              onSwiper={(swiper: any) => (swiperRef.current = swiper)}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={800}
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              className={s.swiper}
            >
              {comments.map((comment, index) => (
                <SwiperSlide key={index}>
                  <div className={s.comment}>
                    <div className={s.comment_top}>
                      <Image
                        src={comment.avatar}
                        width={48}
                        height={48}
                        alt={comment.name}
                        className={s.comment_avatar}
                      />
                      <div className={s.comment_info}>
                        <span className={s.comment_name}>{comment.name}</span>
                        <span className={s.comment_date}>{comment.date}</span>
                      </div>
                    </div>
                    <div className={s.comment_body}>{comment.text}</div>
                    <div className={s.comment_footer}>
                      <div className={s.comment_posted}>
                        {t('posted_on')}
                        <span> {comment.posted}</span>
                      </div>
                      <RatingStars
                        edit={false}
                        activeColor="#0C44AC"
                        value={comment.rating}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <MinorButton
              className={`${s.swiper_button} ${s.swiper_prev}`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Image src={ArrowIcon} width={24} height={24} alt="Prev Slide" />
            </MinorButton>
            <MinorButton
              className={`${s.swiper_button} ${s.swiper_next}`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Image src={ArrowIcon} width={24} height={24} alt="Next Slide" />
            </MinorButton>
          </div>
          <ArtboardBackground className={s.rating_bg} size={564} />
        </div>
      </Container>
    </section>
  );
};
