import { ReactNode } from 'react';
import { Modal } from 'components/AddObject/Modal';
import rateSCSS from './RateBookingVariant.module.scss';

type BookingVariantModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

export const RateBookingVariantModal = ({ isModalOpen, closeModal, children }: BookingVariantModalProps) => {
  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={isModalOpen}
      contentClassName={rateSCSS.RateBookingVariantModal}
      overlayClassName={{
        base: rateSCSS.UserCabinetRateBookingVariantBackdropBase,
        afterOpen: rateSCSS.RateBookingVariantBackdropAfterOpen,
        beforeClose: rateSCSS.RateBookingVariantBackdropBeforeClose,
      }}
      closeTimeoutMS={250}
      contentLabel="Modal - Rate booking variant"
    >
      {children}
    </Modal>
  );
};

export const FeedbackBookingVariantModal = ({ isModalOpen, closeModal, children }: BookingVariantModalProps) => {
  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={isModalOpen}
      contentClassName={rateSCSS.RateBookingVariantModal}
      overlayClassName={{
        base: rateSCSS.UserCabinetRateBookingVariantBackdropBase,
        afterOpen: rateSCSS.RateBookingVariantBackdropAfterOpen,
        beforeClose: rateSCSS.RateBookingVariantBackdropBeforeClose,
      }}
      closeTimeoutMS={250}
      contentLabel="Modal - Give feedback for booking variant"
    >
      {children}
    </Modal>
  );
};
