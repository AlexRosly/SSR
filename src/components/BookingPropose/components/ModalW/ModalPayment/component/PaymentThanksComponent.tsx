import { useEffect } from 'react';
import s from '../ModalPayment.module.scss';

interface IProps {
  showNotice: () => void;
}

export const PaymentThanksComponent = ({ showNotice }: IProps) => {
  useEffect(() => {
    const idTimeout = setTimeout(() => {
      showNotice();

      return () => clearTimeout(idTimeout);
    }, 2000);
  }, [showNotice]);

  return (
    <div className={s.paymentThanksComponent__container}>
      <p className={s.paymentThanksComponent__title}>Бронирование </p>
      <p className={s.paymentThanksComponent__subtitle}>успешно!</p>

      <p className={s.paymentThanksComponent__text}>
        Управление бронированием доступно по вкладке действующие бронирования
      </p>
    </div>
  );
};
