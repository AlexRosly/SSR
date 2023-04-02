import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import { ProposeCard } from './components/MainCard';
import {
  ButtonComment,
  ButtonRating,
  ChatHotelier,
  Contact,
  ToggleIsPaymentConfirmedButton,
  UserInfo,
} from './components/SubCard';

import s from './ActiveBookingCard.module.scss';

import { WaitForHotelierPaymentConfirm } from './components/SubCard/Button';
// import { FeedbackModal } from 'components/BookingFeedBack/sendFeedback';
import { useCallback, useRef, useState } from 'react';
import {  RateBookingVariant } from 'components/UserCabinet/InfoComponent/RateBookingVariant';
import { useModal } from 'hooks/UI';
import { FeedbackBookingVariant } from 'components/UserCabinet/InfoComponent/RateBookingVariant/FeedbackBookingVariant';

interface IProps {
  data: IHotelsData;
  cancelBooking: () => void;
  setCard: () => void;
}

const ContainerWithMouseLeave = ({
  isPayed,
  openRateBookingVariantModal,
  openFeedbackBookingVariantModal,
}: {
  isPayed: boolean;
  openRateBookingVariantModal: () => void;
  openFeedbackBookingVariantModal: () => void;
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = useCallback(() => {
    setIsPopupVisible(prev => !prev);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupVisible(false);
  }, []);

  const onClickRateBookingVariant = useCallback(() => {
    if (isPayed) {
      closePopup();
      openRateBookingVariantModal();
      return;
    }

    togglePopup();
  }, [isPayed, openRateBookingVariantModal, togglePopup, closePopup]);

  const onClickOpenFeedbackBookingVariant = useCallback(() => {
    if (isPayed) {
      closePopup();
      openFeedbackBookingVariantModal();
      return;
    }

    togglePopup();
  }, [isPayed, openFeedbackBookingVariantModal, togglePopup, closePopup]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef}>
      <div className={s.button_container}>
        <ButtonRating onClick={onClickRateBookingVariant} isPopupVisible={isPopupVisible} />
        <ButtonComment onClick={onClickOpenFeedbackBookingVariant} isPopupVisible={isPopupVisible} />
      </div>

      {!isPayed && (
        <WaitForHotelierPaymentConfirm
          containerRef={containerRef}
          isPopupVisible={isPopupVisible}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export const ActiveBookingCard = ({ data, cancelBooking, setCard }: IProps) => {
  const [isPayed, setIsPayed] = useState(false);
  const toggleIsPayed = useCallback(() => {
    setIsPayed(prev => !prev);
  }, []);

  const [isRateBookingVariantModalOpen, openRateBookingModal, closeRateBookingVariantModal] = useModal();
  const [isFeedbackBookingVariantModalOpen, openFeedbackBookingModal, closeFeedbackBookingVariantModal] = useModal();

  const openRateBookingVariantModal = useCallback(() => {
    if (!isPayed) return;
    openRateBookingModal();
  }, [isPayed, openRateBookingModal]);

  const openFeedbackBookingVariantModal = useCallback(() => {
    if (!isPayed) return;
    openFeedbackBookingModal();
  }, [isPayed, openFeedbackBookingModal]);

  const isRateModalVisible = isPayed && isRateBookingVariantModalOpen;
  const isFeedbackModalVisible = isPayed && isFeedbackBookingVariantModalOpen;

  return (
    <div className={s.card__wrapper}>
      <ProposeCard data={data} cancelBooking={cancelBooking} setCard={setCard} isPayed={isPayed} />

      <div className={s.subCard}>
        <Contact />
        <ChatHotelier />

        <div className={s.wrapperWaitForPayment}>
          <ContainerWithMouseLeave
            isPayed={isPayed}
            openRateBookingVariantModal={openRateBookingVariantModal}
            openFeedbackBookingVariantModal={openFeedbackBookingVariantModal}
          />
        </div>

        <UserInfo />
      </div>
      <ToggleIsPaymentConfirmedButton onClick={toggleIsPayed} />

      <RateBookingVariant isModalOpen={isRateModalVisible} closeModal={closeRateBookingVariantModal} />
      <FeedbackBookingVariant isModalOpen={isFeedbackModalVisible} closeModal={closeFeedbackBookingVariantModal} />
    </div>
  );
};
