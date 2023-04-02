import { ModalWindow } from '../../../../UserCabinet/ModalW/Modal/Modal';
import { NoticeCancelBooking } from './component/NoticeCancelBooking';

interface IProps {
  modalOptions: {
    onClose: () => void;
  };
  onClick: () => void;
}

export const ModalCancelBooking = ({ modalOptions, onClick }: IProps) => {
  return (
    <ModalWindow
      modalOptions={modalOptions}
      style={{
        overlay: {
          background: 'rgba(76, 76, 76, 0.28)',
          backdropFilter: 'blur(5px)',
        },
        content: { height: 'auto', transform: 'translate(20%, -55%)', inset: ' 50% auto auto 0' },
      }}
    >
      <NoticeCancelBooking close={modalOptions.onClose} onClick={onClick} />
    </ModalWindow>
  );
};
