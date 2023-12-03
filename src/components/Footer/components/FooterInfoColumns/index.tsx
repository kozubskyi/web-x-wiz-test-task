import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FooterColumn, IFooterItems } from '../FooterColumn';
import { ROUTES } from 'constants/routes';
import { LocationIcon } from 'components/icons/LocationIcon';
import { EmailIcon } from 'components/icons/EmailIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';

export const FooterInfoColumns: FC = () => {
  const t = useTranslations('Footer');

  const accessItems: IFooterItems[] = [
    { title: t('QucikAccess.home'), href: ROUTES.HOME },
    { title: t('QucikAccess.categories'), href: ROUTES.PUBLIC.CATEGORIES },
    { title: t('QucikAccess.about'), href: ROUTES.PUBLIC.ABOUT },
  ];

  const supportItems: IFooterItems[] = [
    {
      title: t('Support.help_center'),
      href: ROUTES.PUBLIC.HELP_CENTER,
    },
    {
      title: t('Support.contact'),
      href: ROUTES.PUBLIC.CONTACT_US,
    },
    {
      title: t('Support.become_buyer'),
      href: ROUTES.PUBLIC.HELP_CENTER_LOGIN_SIGNUP,
    },
    {
      title: t('Support.become_seller'),
      href: ROUTES.PUBLIC.HELP_CENTER_LOGIN_SIGNUP,
    },
  ];

  const contactItems: IFooterItems[] = [
    {
      title: '+1 1850 0026',
      href: 'tel:118500026',
      icon: <PhoneIcon />,
      target: '_blunk',
    },
    {
      title: 'Info@PayForGame.com',
      href: 'mailto:Info@PayForGame.com',
      icon: <EmailIcon />,
      target: '_blunk',
    },
    {
      title: 'Arizona - 543 St',
      href: 'https://maps.app.goo.gl/uuU1i3NuxiaE3s959',
      icon: <LocationIcon />,
      target: '_blunk',
    },
  ];

  return (
    <>
      <FooterColumn title={t('QucikAccess.title')} items={accessItems} />
      <FooterColumn title={t('Support.title')} items={supportItems} />
      <FooterColumn title={t('ContactUs.title')} items={contactItems} />
    </>
  );
};
