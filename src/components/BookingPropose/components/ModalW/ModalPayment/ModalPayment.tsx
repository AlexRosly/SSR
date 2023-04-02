import { TPayment } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import { useState } from 'react';
import { ModalWindow } from '../../../../UserCabinet/ModalW/Modal/Modal';
import { Payment } from './component';

interface IProps {
  modalOptions: { onClose: () => void };
  createBooking: () => void;
  showNotice: () => void;
}

export const ModalPayment = ({ modalOptions, createBooking, showNotice }: IProps) => {
  const [userHasPaid, setUserHasPaid] = useState<TPayment | ''>('');

  return (
    <ModalWindow
      modalOptions={modalOptions}
      style={{ overlay: { background: 'rgb(58 58 58 / 85%)' }, content: { height: 'auto' } }}
    >
      <Payment
        closeModal={modalOptions.onClose}
        createBooking={createBooking}
        userHasPaid={userHasPaid}
        setUserHasPaid={setUserHasPaid}
        showNotice={showNotice}
      />
    </ModalWindow>
  );
};
