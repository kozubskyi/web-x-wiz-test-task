'use client';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';

import { RedButton, SecondaryButton } from 'ui/components/Button';
import { Modal } from 'ui/components/Modal';
import { Loader } from 'components/common/loader';
import { ErrorMessage } from 'components/common/messages/Messages';

import { IExampleUser } from 'app/[locale]/(public)/sellers/components/SellersStats';

import s from './BanSellerModal.module.scss';

interface BanSellerModalProps {
  isOpen: boolean;
  closeModal: () => void;
  user: IExampleUser;
  redirectUrl?: string;
  setUsers: Dispatch<SetStateAction<IExampleUser[]>>;
}

export const BanSellerModal: FC<BanSellerModalProps> = ({
  isOpen,
  closeModal,
  user,
  redirectUrl,
  setUsers,
}) => {
  const t = useTranslations('SellersPage.Modal');
  // const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT);
  // const router = useRouter();

  const handleBanUser = () => {
    // banUser({
    //   variables: {
    //     banUserId: userId,
    //   },
    //   onCompleted() {
    //     closeModal();
    //     router.refresh();
    //     redirectUrl && router.push(redirectUrl);
    //   },
    //   onError(err) {
    //     console.error(err);
    //   },
    // });

    setUsers((prev) =>
      prev.map((prevUser) =>
        user.id === prevUser.id
          ? { ...prevUser, banned: !user.banned }
          : prevUser
      )
    );
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModal} className={s.modal}>
        <Modal.Header>
          <h4>{t(user.banned ? 'unban_seller' : 'ban_seller')}</h4>
        </Modal.Header>
        <Modal.Content>
          <p>{t(user.banned ? 'sure_to_unban' : 'sure_to_ban')}</p>
        </Modal.Content>
        <Modal.Footer>
          <div className={s.modal_btns}>
            <SecondaryButton onClick={closeModal}>
              {t('cancel')}
            </SecondaryButton>
            <RedButton onClick={handleBanUser}>
              {t(user.banned ? 'unban' : 'ban')}
            </RedButton>
          </div>
        </Modal.Footer>
      </Modal>
      {/* {error && <ErrorMessage text={error.message} />}
      {loading && <Loader />} */}
    </>
  );
};
