import { FC, ReactNode } from 'react';

import s from './ScrollBlock.module.scss';

interface ScrollBlockProps {
  children?: ReactNode;
  className?: string;
}

export const ScrollBlock = ({
  children,
  className,
}: ScrollBlockProps): JSX.Element => {
  return (
    <div className={`${s.block} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

interface ScrollBlockTopProps {
  children?: ReactNode;
  className?: string;
}

const ScrollBlockTop: FC<ScrollBlockTopProps> = ({ children, className }) => {
  return (
    <div className={`${s.block_top} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

ScrollBlock.Top = ScrollBlockTop;

interface ScrollBlockBodyProps {
  children?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  height?: number;
}

const ScrollBlockBody: FC<ScrollBlockBodyProps> = ({
  children,
  className,
  wrapperClassName,
  height = 306,
}) => {
  return (
    <div
      className={`${s.block_wrapper} ${
        wrapperClassName ? wrapperClassName : ''
      }`.trim()}
      style={{
        height: `${height / 16}rem`,
      }}
    >
      <div className={`${s.block_body} ${className ? className : ''}`.trim()}>
        {children}
      </div>
    </div>
  );
};

ScrollBlock.Body = ScrollBlockBody;

interface ScrollBlockFooterProps {
  children?: ReactNode;
  className?: string;
}

const ScrollBlockFooter: FC<ScrollBlockFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${s.block_footer} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

ScrollBlock.Footer = ScrollBlockFooter;
