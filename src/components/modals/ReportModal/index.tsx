'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { reportSellerShema } from 'utils/schemes/auth-schema';

import { Button } from 'ui/components/Button';
import { Modal } from 'ui/components/Modal';
import { UserAvatar } from 'components/common/UserAvatar';
import { CloseIcon } from 'components/icons/CloseIcon';
import { UploadIcon } from 'components/icons/UploadIcon';

import s from './ReportModal.module.scss';

interface IReport {
  report_message: string;
}

interface ReportModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSubmit?: (report_message: string) => void;
  avatarURL: string;
  userName: string;
  email: string;
}

export const ReportModal: FC<ReportModalProps> = ({
  isOpen,
  onCloseModal,
  onSubmit,
  avatarURL,
  userName,
  email,
}) => {
  const t = useTranslations('ProductPage.Chat');
  const {
    register: registerReport,
    handleSubmit: handleSubmitReport,
    reset: resetReport,
    formState: { errors },
  } = useForm<IReport>({
    resolver: yupResolver(reportSellerShema),
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileList = Array.from(files);
      console.log(fileList);
      setUploadedFiles(fileList);
    }
  };

  const handleRemoveFile = (lastModified: number) => {
    setUploadedFiles(
      uploadedFiles.filter((file) => file.lastModified !== lastModified)
    );
  };

  const handleReportSubmit = ({ report_message }: IReport) => {
    resetReport();
    setUploadedFiles([]);
    onCloseModal();
    onSubmit && onSubmit(report_message);
  };

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <Modal.Header>
        <h4>{t('Modal.title')}</h4>
      </Modal.Header>
      <form onSubmit={handleSubmitReport(handleReportSubmit)}>
        <Modal.Content>
          <div className={s.modal_seller}>
            <div className={s.modal_seller_image}>
              <UserAvatar avatarURL={avatarURL} userName={userName} />
            </div>
            <div>
              <span className={s.modal_seller_name}>{userName}</span>
              <span className={s.modal_seller_email}>{email}</span>
            </div>
          </div>
          <div className={s.modal_fields}>
            <textarea
              {...registerReport('report_message', {
                required: true,
              })}
              className={`${s.modal_textarea} ${
                errors.report_message ? '_invalid' : ''
              }`}
              placeholder={t('Modal.write_description')}
            />
            <button className={s.modal_input}>
              <span>{t('Modal.attachment')}</span>
              <UploadIcon />
              <input onChange={handleFileUpload} multiple type="file" />
            </button>
            {uploadedFiles.length ? (
              <div className={s.modal_files}>
                <span>{t('Modal.upoad_files')}</span>
                <ul>
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>
                      {file.name}
                      <button
                        onClick={() => handleRemoveFile(file.lastModified)}
                        type="button"
                      >
                        <CloseIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
        </Modal.Content>
        <Modal.Footer>
          <Button className={s.modal_submit} type="submit">
            {t('Modal.send')}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
