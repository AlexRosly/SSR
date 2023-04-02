import { RateBookingVariantContent } from './RateBookingVariantContent';
import { RateBookingVariantModal } from './RateBookingVariantModal';

export type RateBookingVariantProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const RateBookingVariant = ({ isModalOpen, closeModal }: RateBookingVariantProps) => {
  return (
    <RateBookingVariantModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <RateBookingVariantContent closeModal={closeModal} />
    </RateBookingVariantModal>
  );
};
