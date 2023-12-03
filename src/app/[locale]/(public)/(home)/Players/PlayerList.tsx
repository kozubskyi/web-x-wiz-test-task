'use client';
import { FC, ReactNode } from 'react';

import { PlayerSection } from 'components/common/PlayerSection';
import { LinkButton } from 'ui/components/Button';
import { List } from 'components/common/List';

import s from '../Home.module.scss';

interface HomePlayerListProps {
  videoId: string;
  title: string;
  title_accent?: ReactNode;
  subtitle: string;
  mirror?: boolean;
  items: string[];
  href: string;
  btn_text: string;
}

export const PlayerList: FC<HomePlayerListProps> = ({
  videoId,
  title,
  title_accent,
  subtitle,
  mirror,
  items,
  href,
  btn_text,
}) => {
  return (
    <PlayerSection
      videoId={videoId}
      title={title}
      title_accent={title_accent}
      subtitle={subtitle}
      mirror={mirror}
    >
      <List className={s.list} items={items} />
      <LinkButton className={s.more} href={href}>
        {btn_text}
      </LinkButton>
    </PlayerSection>
  );
};
