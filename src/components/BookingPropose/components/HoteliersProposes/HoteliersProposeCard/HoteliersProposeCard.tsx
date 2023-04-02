import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import Gallery from 'components/UserCards/Gallery';
import s from './HoteliersProposeCard.module.scss';

import { BookingDates, CardDownButton, Location, Price, VideoPreview } from './components';
import { OtherUserBookingNow } from '../../Notifications';
import { BedOptions } from 'components/UserCabinet/BedOptions/BedOptions';
import { FreeButton } from 'components/UserCabinet/FreeButton/FreeButton';
import React from 'react';

interface IProps {
  data: IHotelsData;
  onClickArrowDown: () => void;
  listLength: number;
  onCardClick: () => void;
}

type IClick = React.MouseEventHandler<HTMLElement>;

export const HoteliersProposeCard = ({ data, onClickArrowDown, listLength, onCardClick }: IProps) => {
  const handleClick: IClick = e => {
    if (e.target instanceof HTMLElement) {
      const notButtonCardDown = e.target.dataset.action !== 'cardDown';
      notButtonCardDown && onCardClick();
    }
  };

  return (
    <div className={s.propose__card} onClick={handleClick}>
      <div className={s.card__price_action}>
        <Price price={data.price} />
        <FreeButton color={''} />
        <CardDownButton listLength={listLength} onClick={onClickArrowDown} />
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

      <Location city={data.city} hotelName={data.name} address={data.address} />

      <BookingDates
        dates={{
          dateFrom: data.dateFrom,
          dateTo: data.dateTo,
          checkInTime: data.timeCheckIn,
          checkOutTime: data.timeCheckOut,
        }}
        apartmentsSize={data.apartmentsSize}
      />

      <ul className={s.bed__options}>
        <BedOptions options={data.bedOptions} />
      </ul>

      <VideoPreview video={data.video} title={data.name} />

      {data.bookingNow && <OtherUserBookingNow className={s.card__disabled} />}
    </div>
  );
};
