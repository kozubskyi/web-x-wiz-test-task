import { FC } from 'react';

import { Container } from 'ui/components/Container';
import { SuccessContent } from 'components/common/Success/SuccessContent';

import s from './SuccessPage.module.scss';

interface SuccessPageProps {
  title: string;
  subtitle: string;
  linkText: string;
  href: string;
}

export const SuccessPage: FC<SuccessPageProps> = ({
  title,
  subtitle,
  linkText,
  href,
}) => {
  return (
    <main className={s.success}>
      <section className={s.success_section}>
        <Container>
          <SuccessContent
            title={title}
            subtitle={subtitle}
            linkText={linkText}
            className={s.success_content}
            href={href}
          />
        </Container>
      </section>
    </main>
  );
};
