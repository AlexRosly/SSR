import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import { useState } from 'react';
import { NoBooking } from '../../Notifications';
import { ActiveBookingCard } from '../ActiveBookingCard';

interface IProps {
  list: IHotelsData[];
  cancelBooking: (bookingId: number) => void;
}

export const ActiveBookingsList = ({ list, cancelBooking }: IProps) => {
  const [selectBookingCard, setSelectBookingCard] = useState<IHotelsData>();

  const showBooking = list?.length > 0;

  const noActiveBooking = !list || list?.length === 0;

  return (
    <div style={{ padding: '25px' }}>
      {noActiveBooking && <NoBooking />}

      {showBooking &&
        list.map(item => (
          <ActiveBookingCard
            data={item}
            key={item._id}
            cancelBooking={() => {
              if (selectBookingCard) cancelBooking(selectBookingCard._id);
            }}
            setCard={() => setSelectBookingCard(item)}
          />
        ))}
    </div>
  );
};
