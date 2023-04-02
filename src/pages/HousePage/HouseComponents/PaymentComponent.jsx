import s from '../HousePage.module.scss';
import cash from '../img/cash.png';
import visa from '../img/visa.png';

export default function PaymentComponent() {
  return (
    <div className={s.payment}>
      <div className={s.payment_content}>
        <img src={cash} alt="icon payment" /> <div>Оплата на месте наличными</div>
      </div>
      <div className={s.payment_content}>
        <img src={visa} alt="icon payment" />
        <div>Оплата на месте картой Visa или MasterCard</div>
      </div>
      <div className={s.payment_content}>
        <img src={visa} alt="icon payment" /> <div>Оплата на месте картой UnionPay</div>
      </div>
      <div className={s.payment_content}>
        <img src={visa} alt="icon payment" /> <div>Оплата на месте картой JCB</div>
      </div>
    </div>
  );
}
