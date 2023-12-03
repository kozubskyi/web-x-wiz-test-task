import { FC, ReactNode } from 'react';

import s from './Section.module.scss';

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className, children }: SectionProps): JSX.Element => {
  return (
    <section className={`${s.section} ${className ? className : ''}`.trim()}>
      <div className={s.section_layer}>{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  className?: string;
  children: ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`${s.section_header} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

Section.Header = SectionHeader;

interface SectionFlexHeaderProps extends SectionHeaderProps {
  wrapperClassName?: string;
}

export const SectionFlexHeader: FC<SectionFlexHeaderProps> = ({
  wrapperClassName,
  className,
  children,
}) => {
  return (
    <SectionHeader className={wrapperClassName}>
      <div
        className={`${s.section_header_flex} ${
          className ? className : ''
        }`.trim()}
      >
        {children}
      </div>
    </SectionHeader>
  );
};

Section.FlexHeader = SectionFlexHeader;

interface SectionBodyProps {
  className?: string;
  children: ReactNode;
}

export const SectionBody: FC<SectionBodyProps> = ({ className, children }) => {
  return (
    <div className={`${s.section_body} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

Section.Body = SectionBody;

interface SectionBlockProps {
  className?: string;
  children: ReactNode;
}

export const SectionBlock: FC<SectionBlockProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`${s.section_block} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

Section.Block = SectionBlock;

interface SectionBlockHeaderProps {
  className?: string;
  children: ReactNode;
}

export const SectionBlockHeader: FC<SectionBlockHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`${s.section_block_header} ${
        className ? className : ''
      }`.trim()}
    >
      {children}
    </div>
  );
};

Section.BlockHeader = SectionBlockHeader;

interface SectionBlockBodyProps {
  className?: string;
  children: ReactNode;
}

export const SectionBlockBody: FC<SectionBlockBodyProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`${s.section_block_body} ${className ? className : ''}`.trim()}
    >
      {children}
    </div>
  );
};

Section.BlockBody = SectionBlockBody;
