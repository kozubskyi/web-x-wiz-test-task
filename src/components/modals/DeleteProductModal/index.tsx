'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT } from 'apollo/mutations/shop';

import { RedButton, SecondaryButton } from 'ui/components/Button';
import { Modal } from 'ui/components/Modal';
import { Loader } from 'components/common/loader';
import { ErrorMessage } from 'components/common/messages/Messages';

import s from './DeleteProductModal.module.scss';

interface DeleteProductModalProps {
  isOpen: boolean;
  closeModal: () => void;
  productId?: string;
  redirectUrl?: string;
}

export const DeleteProductModal: FC<DeleteProductModalProps> = ({
  isOpen,
  closeModal,
  productId,
  redirectUrl,
}) => {
  const t = useTranslations('ProfilePage.SalesOffers.ProductDetails.Modal');
  const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT);
  const router = useRouter();

  const handleDeleteProduct = () => {
    deleteProduct({
      variables: {
        deleteProductId: productId,
      },
      onCompleted() {
        closeModal();
        router.refresh();
        redirectUrl && router.push(redirectUrl);
      },
      onError(err) {
        console.error(err);
      },
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModal} className={s.modal}>
        <Modal.Header>
          <h4>{t('title')}</h4>
        </Modal.Header>
        <Modal.Content>
          <p>{t('text')}</p>
        </Modal.Content>
        <Modal.Footer>
          <div className={s.modal_btns}>
            <SecondaryButton onClick={closeModal}>
              {t('cancel')}
            </SecondaryButton>
            <RedButton onClick={handleDeleteProduct}>{t('delete')}</RedButton>
          </div>
        </Modal.Footer>
      </Modal>
      {error && <ErrorMessage text={error.message} />}
      {loading && <Loader />}
    </>
  );
};
