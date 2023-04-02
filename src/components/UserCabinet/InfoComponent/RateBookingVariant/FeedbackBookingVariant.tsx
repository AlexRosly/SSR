import { CloseFeedbackModalButton, FeedbackModalContent } from 'components/BookingFeedBack/sendFeedback';
import { FeedbackBookingVariantModal } from './RateBookingVariantModal';
import type { RateBookingVariantProps } from './RateBookingVariant';
import rateScss from './RateBookingVariant.module.scss';
import feedbackSCSS from 'components/BookingFeedBack/sendFeedback.module.scss';

type Props = { closeModal: () => void };

export const FeedbackBookingVariantContent = ({ closeModal }: Props) => (
  <div className={feedbackSCSS.ContentWrapper}>
    <div className={rateScss.CloseButtonWrapper}>
      <CloseFeedbackModalButton closeModal={closeModal} />
    </div>

    <FeedbackModalContent />
  </div>
);

export const FeedbackBookingVariant = ({ isModalOpen, closeModal }: RateBookingVariantProps) => {
  return (
    <FeedbackBookingVariantModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <FeedbackBookingVariantContent closeModal={closeModal} />
    </FeedbackBookingVariantModal>
  );
};
