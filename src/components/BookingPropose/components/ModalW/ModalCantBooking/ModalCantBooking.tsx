import { ModalWindow } from 'components/UserCabinet/ModalW/Modal/Modal';
import { CantBooking } from './components/CantBooking';

interface IProps {
  modalOptions: {
    onClose: () => void;
  };
}

export const ModalCantBooking = ({ modalOptions }: IProps) => {
  return (
    <ModalWindow
      modalOptions={modalOptions}
      style={{
        overlay: { background: 'rgba(76, 76, 76, 0.28)', backdropFilter: 'blur(5px)' },
        content: { height: 'auto' },
      }}
    >
      <CantBooking close={modalOptions.onClose} />
    </ModalWindow>
  );
};
