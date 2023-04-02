import './InfoComponent.scss';
import hotels from './hotels.json';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

import { useState } from 'react';
import { useToggleModal } from '../ModalW/Modal/useToggleModal';
import { ActiveBookingsList, BookingMainPage, SubNavigation } from 'components/BookingPropose/components';
import { HoteliersProposesPage, ModalCantBooking } from 'components/BookingPropose/components';

export default function InfoComponent() {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [activeSection, setActiveSection] = useState({ propose: true });

  const [bookingList, setBookingList] = useState([]);
  const [proposeList, setProposeList] = useState(null);

  const [isProposeLoading, setIsProposeLoading] = useState(false);

  const fetchProposes = query => {
    if (bookingList.length > 0) {
      onOpen();
      return;
    }
    // fetch('https://mydatabase.com/locations/v2/', query)
    //   .then(response => response.json())
    //   .then(response => setProposeList(response))
    //   .catch(err => console.error(err));

    setIsProposeLoading(true);

    // Making a simulation of fetching data from database

    setTimeout(() => {
      setProposeList(hotels);
      setIsProposeLoading(false);
      setActiveSection({ propose: true });

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  return (
    <>
      <SubNavigation
        toggle={setActiveSection}
        activeSection={activeSection}
        numberOfPropose={proposeList ? proposeList.length : proposeList}
        haveActiveBooking={bookingList.length > 0}
      />

      {activeSection.propose && !proposeList && !isProposeLoading && <BookingMainPage fetchProposes={fetchProposes} />}

      {activeSection.userBookings && !isProposeLoading && (
        <ActiveBookingsList
          list={bookingList}
          cancelBooking={selectCardId => {
            setBookingList(bookingList.filter(({ _id }) => _id !== selectCardId));
          }}
        />
      )}

      {activeSection.propose && (
        <HoteliersProposesPage
          list={proposeList}
          setProposeList={setProposeList}
          isProposeLoading={isProposeLoading}
          createBooking={newBooking => {
            setIsProposeLoading(true);
            setBookingList([newBooking]);
          }}
          setShowNotice={() => {
            setActiveSection({ userBookings: true });
            setProposeList(null);
            setIsProposeLoading(false);
          }}
        />
      )}

      {isProposeLoading && <LoadingSpinner />}

      <ModalCantBooking modalOptions={{ isOpen, onOpen, onClose }} />
    </>
  );
}
