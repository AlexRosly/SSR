import { ModalWindow } from '../Modal/Modal.jsx';
import { DetailPropose } from './DetailPropose.jsx';

export const ModalDetailPropose = ({ modalOptions, createBooking, showNotice }) => {
  return (
    <ModalWindow modalOptions={modalOptions}>
      <DetailPropose modalClose={modalOptions.onClose} createBooking={createBooking} showNotice={showNotice} />
    </ModalWindow>
  );
};
