import Image from 'next/image';
import React, { FC, ReactNode } from 'react';
import { MinorLinkButton } from 'ui/components/Button';
import { ScrollBlock } from '../ScrollBlock';

import s from './OrderDetail.module.scss';

export interface IOrderDetailType {
  title: string;
  name: string | number | ReactNode;
  isLink?: boolean;
  href?: string;
}

interface OrderDetailTypesProps {
  listClassName?: string;
  types: (IOrderDetailType | null)[];
}

export const OrderDetailTypes: FC<OrderDetailTypesProps> = ({
  types,
  listClassName,
}) => {
  return (
    <ul className={`${s.types} ${listClassName ? listClassName : ''}`.trim()}>
      {types.map((type, index) => (
        <React.Fragment key={index}>
          {type && (
            <li>
              <div className={s.type_title}>{type.title}</div>
              {type.isLink ? (
                <MinorLinkButton className={s.type_name} href={type.href || ''}>
                  {type.name}
                </MinorLinkButton>
              ) : (
                <div className={s.type_name}>
                  <span className="text_accent">{type.name}</span>
                </div>
              )}
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export interface IOrderDetailBlock {
  title: string | ReactNode;
  name: string;
}

interface OrderDetailBlocksProps {
  listClassName?: string;
  blocks: (IOrderDetailBlock | null)[];
}

export const OrderDetailBlocks: FC<OrderDetailBlocksProps> = ({
  blocks,
  listClassName,
}) => {
  return (
    <div className={`${s.blocks} ${listClassName ? listClassName : ''}`.trim()}>
      {blocks.map((item, index) => (
        <React.Fragment key={index}>
          {item && (
            <div className={s.block}>
              <div className={s.block_title}>{item.title}</div>
              <span className={s.block_name}>{item.name}</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

interface Iinstruction {
  title: string;
  list: string[];
}

interface OrderDetailInstructionProps {
  instruction: Iinstruction;
}

export const OrderDetailInstruction: FC<OrderDetailInstructionProps> = ({
  instruction,
}) => {
  return (
    <div className={s.instruction}>
      <span className={s.instruction_title}>{instruction.title}</span>
      <ol className={s.instruction_list}>
        {instruction.list.map((text, index) => (
          <li className={s.instruction_text} key={index}>
            {text}
          </li>
        ))}
      </ol>
    </div>
  );
};

interface OrderInfoProps {
  imageUrl: string;
  imageAlt: string;
  imageHeight?: number;
  types: (IOrderDetailType | null)[];
  blocks: (IOrderDetailBlock | null)[];
  instruction: Iinstruction;
  withScrollBlock?: boolean;
}

export const OrderInfo: FC<OrderInfoProps> = ({
  imageUrl,
  imageAlt,
  imageHeight = 160,
  types,
  blocks,
  instruction,
  withScrollBlock,
}) => {
  const orderDetails = (
    <>
      <OrderDetailTypes types={types} />
      <OrderDetailBlocks blocks={blocks} />
      <OrderDetailInstruction instruction={instruction} />
    </>
  );

  return (
    <div className={s.info}>
      <div
        className={s.info_image}
        style={{
          height: imageHeight && `${imageHeight / 16}rem`,
        }}
      >
        <Image
          fill
          src={imageUrl}
          alt={imageAlt}
          loader={({ src, width: w, quality }) => {
            const q = quality || 75;
            return `${src}?w=${w}&q=${q}`;
          }}
        />
      </div>
      <div className={s.info_details}>
        {withScrollBlock ? (
          <ScrollBlock.Body wrapperClassName={s.info_scroll}>
            {orderDetails}
          </ScrollBlock.Body>
        ) : (
          orderDetails
        )}
      </div>
    </div>
  );
};
