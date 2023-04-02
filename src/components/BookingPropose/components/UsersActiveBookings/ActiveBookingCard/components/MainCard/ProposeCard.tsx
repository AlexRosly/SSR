import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import { BedOptions } from 'components/UserCabinet/BedOptions/BedOptions';
import { ModalCancelBooking } from 'components/BookingPropose/components/ModalW';
import { useToggleModal } from 'components/UserCabinet/ModalW/Modal/useToggleModal';
import { CancelBooking } from '../Buttons';
import { CheckInOut, Location } from './index';
import { ProofOfPayment } from '../Buttons/ProofOfPayment';

import Gallery from 'components/UserCards/Gallery';
import s from './MainCard.module.scss';
import bedStyle from 'components/BookingPropose/components/HoteliersProposes/HoteliersProposeCard/HoteliersProposeCard.module.scss';

interface IProps {
  data: IHotelsData;
  cancelBooking: () => void;
  setCard: () => void;
  isPayed: boolean;
}

const PaymentReceived = () => <div className={s.paymentReceived}>Отельер подтвердил вашу оплату</div>;

export const ProposeCard = ({ data, cancelBooking, setCard, isPayed }: IProps) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  return (
    <>
      <div className={`${s.propose__card} ${s.propose_card__container}`}>
        <div className={s.optionsButton_container}>
          <h2 className={s.card__price}>{data.price} USD</h2>

          {isPayed ? (
            <PaymentReceived />
          ) : (
            <>
              <ProofOfPayment />

              <CancelBooking
                onClick={() => {
                  setCard();
                  onOpen();
                }}
              />
            </>
          )}
        </div>

        <div className={s.card__photo}>
          <Gallery
            title={data.name}
            isShowText={false}
            url={data.photos[0]}
            rating={data.rating}
            urlImageSecond={data?.photos[1]}
          />
        </div>

        <Location data={data} />

        <CheckInOut data={data} />

        <ul className={bedStyle.bed__options}>
          <BedOptions options={data.bedOptions} />
        </ul>
      </div>

      <ModalCancelBooking modalOptions={{ isOpen, onOpen, onClose }} onClick={cancelBooking} />
    </>
  );
};
