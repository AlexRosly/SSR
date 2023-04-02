import s from './HoteliersProposesPage.module.scss';

import { UserRequestCard } from 'components/UserRequestCard';
import { useToggleModal } from 'components/UserCabinet/ModalW/Modal/useToggleModal';
import { ModalDetailPropose } from 'components/UserCabinet/ModalW/DetailPropose/ModalDetailPropose';
import { useState } from 'react';
import { goProposeToTheEndOgArray } from 'components/BookingPropose/hooks/goProposeToTheEndOfArray';
import { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import { HoteliersProposeCard } from 'components/BookingPropose/components';
import { ProposeFilter } from 'components/BookingPropose/components';

type TCard = IHotelsData | {};

interface IProps {
  list: IHotelsData[];
  setProposeList: () => void;
  createBooking: (card: TCard) => void;
  setShowNotice: () => void;
  isProposeLoading: boolean;
}

export const HoteliersProposesPage = ({
  list,
  setProposeList,
  createBooking,
  setShowNotice,
  isProposeLoading,
}: IProps) => {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [selectCard, setSelectCard] = useState<TCard>({});

  if (!list || list.length === 0) return null;

  return (
    <div className={s.container__main}>
      <div className={s.container__usercard}>
        <UserRequestCard />
      </div>

      <div className={s.container__proposeList}>
        <ProposeFilter />

        <div className={s.container__items}>
          {!isProposeLoading &&
            list.map((propose: IHotelsData) => (
              <HoteliersProposeCard
                key={propose._id}
                data={propose}
                onClickArrowDown={() =>
                  goProposeToTheEndOgArray({
                    id: propose._id,
                    array: list,
                    setNewArray: setProposeList,
                  })
                }
                listLength={list.length}
                onCardClick={() => {
                  if (!propose.bookingNow) {
                    onOpen();
                    setSelectCard(propose);
                  }
                }}
              />
            ))}
        </div>

        <ModalDetailPropose
          modalOptions={{ isOpen, onOpen, onClose }}
          createBooking={() => createBooking(selectCard)}
          showNotice={setShowNotice}
        />
      </div>
    </div>
  );
};
