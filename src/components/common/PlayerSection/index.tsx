'use client';
import { FC, ReactNode } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { Container } from 'ui/components/Container';

import s from './PlayerSection.module.scss';

interface AboutPlayerProps {
  videoId: string;
  title: string;
  title_accent?: ReactNode;
  children?: ReactNode;
  subtitle: string;
  mirror?: boolean;
}

export const PlayerSection = ({
  videoId,
  title,
  title_accent,
  subtitle,
  children,
  mirror = false,
}: AboutPlayerProps): JSX.Element => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0,
    },
  };

  const classNames = `${mirror ? s.player_mirror : ''} ${s.player}`.trim();

  return (
    <section className={classNames}>
      <Container className={s.player_container}>
        <div className={s.player_content}>
          <h2>
            {title}
            {title_accent && <>{title_accent}</>}
          </h2>
          <p className="text_subtitle">{subtitle}</p>
          {children && <div className={s.player_children}>{children}</div>}
        </div>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          className={s.player_block}
          loading="lazy"
        />
      </Container>
    </section>
  );
};
