import s from '../ModalPayment.module.scss';

import { PaymentComponent } from 'components/UserCabinet/ModalW/DetailPropose/components';
import { CloseBnt } from 'components/UserCabinet/ModalW';
import { PaymentThanksComponent, Timer } from './';
import { TPayment } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';

interface IProps {
  closeModal: () => void;
  createBooking: () => void;
  userHasPaid: TPayment | '';
  setUserHasPaid: (type: TPayment) => void;
  showNotice: () => void;
}

export const Payment = ({ closeModal, createBooking, userHasPaid, setUserHasPaid, showNotice }: IProps) => {
  const handleClick = (type: TPayment) => {
    setUserHasPaid(type);
    createBooking();
  };

  return (
    <div className={s.payment__container}>
      {!userHasPaid && <CloseBnt close={closeModal} />}

      <Timer duration={240} target={closeModal} activeStyle={userHasPaid} />

      {!userHasPaid && (
        <PaymentComponent
          type="selector"
          payments={['cash', 'Visa/MasterCard', 'UnionPay', 'JCB', 'AmericanExpress']}
          title="Выберите способ оплаты:"
          onClick={handleClick}
        />
      )}

      {userHasPaid && <PaymentThanksComponent showNotice={showNotice} />}
    </div>
  );
};
