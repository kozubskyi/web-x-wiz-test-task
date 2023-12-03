'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from 'apollo/mutations/chat';

import { IProduct } from 'types/shopTypes';
import { EnumLanguage } from 'types/enums';
import { ISendMessageResponse } from 'types/chatTypes';
import { messageShema } from 'utils/schemes/auth-schema';

import { MinorButton } from 'ui/components/Button';
import { UserAvatar } from 'components/common/UserAvatar';
import { ReportModal } from 'components/modals/ReportModal';
import { FlagIcon } from 'components/icons/FlagIcon';
import { SendIcon } from 'components/icons/SendIcon';
import { ScrollBlock } from 'components/common/ScrollBlock';
import { Loader } from 'components/common/loader';
import { ErrorMessage } from 'components/common/messages/Messages';

import s from './ProductOrderChat.module.scss';

interface IChat {
  message: string;
}

interface ProductOrderChatProps {
  product: IProduct;
  secondary?: boolean;
  chatHeight?: number;
}

export const ProductOrderChat: FC<ProductOrderChatProps> = ({
  product,
  secondary = false,
  chatHeight = 402,
}) => {
  const t = useTranslations('ProductPage.Chat');
  const { locale } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);
  const handleToggleModal = () => setModalOpen(!modalOpen);

  const { register, handleSubmit, reset } = useForm<IChat>({
    resolver: yupResolver(messageShema),
  });

  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE);
  const handleMessageSubmit = ({ message }: IChat) => {
    sendMessage({
      variables: {
        input: {
          message: message,
          recipientId: '653fe9bdd9ca7d9b71b933b1',
        },
      },
      onCompleted(data: ISendMessageResponse) {
        console.log(data.sendMessage.sender);
        reset();
      },
      onError(err) {
        console.error(err);
      },
    });
  };

  return (
    <ScrollBlock className={[s.chat, secondary ? s.secondary : ''].join(' ')}>
      <ScrollBlock.Top className={s.seller}>
        <div className={s.seller_block}>
          <div className={s.seller_image}>
            <UserAvatar
              avatarURL={product.createdBy.avatarURL}
              userName={product.createdBy.userName}
            />
          </div>
          <div className={s.seller_info}>
            <h4>{product.createdBy.userName ?? 'Need Seller Name'}</h4>
            <span className={s.seller_status}>Online</span>
          </div>
        </div>
        <button className={s.seller_report} onClick={handleToggleModal}>
          <FlagIcon />
        </button>
      </ScrollBlock.Top>
      <ScrollBlock.Body
        height={chatHeight}
        wrapperClassName={s.chat_wrapper}
        className={s.chat_body}
      >
        <div className={s.product}>
          <div className={s.product_image}>
            <Image
              src={product.imageUrl}
              width={80}
              height={48}
              alt={product.shortDescription['en']}
              loader={({ src, width: w, quality }) => {
                const q = quality || 75;
                return `${src}?w=${w}&q=${q}`;
              }}
            />
          </div>
          <div className={s.product_info}>
            <span className={s.product_relates}>{t('relates_to')}</span>
            <span className={s.product_title}>
              {product.shortDescription[locale as EnumLanguage]}
            </span>
          </div>
        </div>
        <div className={s.chat_messages}></div>
      </ScrollBlock.Body>
      <ScrollBlock.Footer className={s.chat_footer}>
        <form
          className={s.chat_form}
          onSubmit={handleSubmit(handleMessageSubmit)}
        >
          <div className={s.chat_input}>
            <input
              {...register('message', {
                required: true,
              })}
              type="text"
              placeholder={t('write_message')}
            />
          </div>
          <MinorButton className={s.chat_send} type="submit">
            <span className="text_accent">{t('send')}</span>
            <SendIcon />
          </MinorButton>
        </form>
      </ScrollBlock.Footer>
      <ReportModal
        isOpen={modalOpen}
        onCloseModal={handleCloseModal}
        avatarURL={product.createdBy.avatarURL}
        userName={product.createdBy.userName}
        email={product.createdBy.email}
      />
      {error && <ErrorMessage text={error.message} />}
      {loading && <Loader />}
    </ScrollBlock>
  );
};
