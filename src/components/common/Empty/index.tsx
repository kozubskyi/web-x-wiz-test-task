import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import MessageImg from 'assets/images/empty/message.svg';
import DarkMessageImg from 'assets/images/empty/dark-message.svg';
import FolderImg from 'assets/images/empty/folder.svg';
import DarkFolderImg from 'assets/images/empty/dark-folder.svg';

import { Button, LinkButton } from 'ui/components/Button';

import s from './Empty.module.scss';

interface EmptyContentProps extends EmptyProps {
  imageUrl: StaticImageData;
  darkImageUrl: StaticImageData;
  imageWidth: number;
  imageHeight: number;
}

const EmptyContent: FC<EmptyContentProps> = ({
  title,
  subtitle,
  withButton = false,
  buttonText,
  withLink = false,
  linkText,
  href = '',
  imageUrl,
  darkImageUrl,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className={s.empty_content}>
      <div className={s.empty_image}>
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          className="image_white"
          alt="Empty"
        />
        <Image
          src={darkImageUrl}
          width={imageWidth}
          height={imageHeight}
          className="image_dark"
          alt="Empty"
        />
      </div>
      <div className={s.empty_block}>
        <span className={s.empty_title}>{title}</span>
        <p className={s.empty_subtitle}>{subtitle}</p>
        {withButton && <Button className={s.empty_button}>{buttonText}</Button>}
        {withLink && (
          <LinkButton className={s.empty_button} href={href}>
            {linkText}
          </LinkButton>
        )}
      </div>
    </div>
  );
};

interface EmptyProps {
  title: string;
  subtitle: string;
  withButton?: boolean;
  buttonText?: string;
  withLink?: boolean;
  linkText?: string;
  href?: string;
}

export const MessageEmpty: FC<EmptyProps> = ({
  title,
  subtitle,
  withButton,
  buttonText,
  withLink,
  linkText,
  href,
}) => {
  return (
    <div className={s.empty}>
      <EmptyContent
        title={title}
        subtitle={subtitle}
        withButton={withButton}
        buttonText={buttonText}
        withLink={withLink}
        linkText={linkText}
        href={href}
        imageUrl={MessageImg}
        darkImageUrl={DarkMessageImg}
        imageWidth={120}
        imageHeight={132}
      />
    </div>
  );
};

export const FolderEmpty: FC<EmptyProps> = ({
  title,
  subtitle,
  withButton,
  buttonText,
  withLink,
  linkText,
  href,
}) => {
  return (
    <div className={s.empty}>
      <EmptyContent
        title={title}
        subtitle={subtitle}
        withButton={withButton}
        buttonText={buttonText}
        withLink={withLink}
        linkText={linkText}
        href={href}
        imageUrl={FolderImg}
        darkImageUrl={DarkFolderImg}
        imageWidth={136}
        imageHeight={130}
      />
    </div>
  );
};
