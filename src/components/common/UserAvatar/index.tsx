'use client';
import Image from 'next/image';
import { FC } from 'react';

import s from './UserAvatar.module.scss';

interface UserAvatarProps {
  avatarURL?: string;
  userName?: string;
  size?: number;
  className?: string;
  square?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  avatarURL,
  userName,
  size = 56,
  className,
  square,
}) => {
  return (
    <div
      className={`${s.avatar} ${className ? className : ''} ${
        square ? s.square : ''
      }`.trim()}
    >
      {avatarURL ? (
        <Image
          src={avatarURL}
          width={size}
          height={size}
          alt={userName || 'User'}
          loader={({ src, width: w, quality }) => {
            const q = quality || 75;
            return `${src}?w=${w}&q=${q}`;
          }}
        />
      ) : (
        <span
          style={{
            width: size / 16 + 'rem',
            height: size / 16 + 'rem',
            fontSize: size / 16 / 2 + 'rem',
          }}
        >
          {userName?.substring(0, 1) || "U"}
        </span>
      )}
    </div>
  );
};
