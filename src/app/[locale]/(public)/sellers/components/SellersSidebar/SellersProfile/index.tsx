import { FC } from 'react';
// import Image from 'next/image';
import s from './SellersProfile.module.scss';

import { IUser } from 'types/userTypes';

import MarvinImg from 'assets/images/top-sellers/marvin.png';

interface SellersProfileProps {
  user?: IUser;
}

export const SellersProfile: FC = ({ user }: SellersProfileProps) => {
  const defaultAvatarSrc = MarvinImg.src;

  return (
    <div className={s.profile}>
      <div className={s.hexagon_container}>
        <div
          className={s.hexagon_image}
          style={{
            backgroundImage: `url(${user?.avatarURL ?? defaultAvatarSrc})`,
          }}
        >
          {/* <Image
              src={user?.avatarURL ?? defaultAvatarSrc}
              width={72}
              height={81}
              alt={`Avatar ${user?.userName}`.trim()}
            /> */}
        </div>
      </div>
      <div className={s.profile_body}>
        <h4>{user?.userName ?? 'Denys Kozubskyi'}</h4>
        <span>{user?.email ?? 'fake@mail.com'}</span>
      </div>
    </div>
  );
};
