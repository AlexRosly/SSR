import cash from '../image/icon/cash.svg';
import visa from '../image/icon/visa.svg';
import s from './PaymentComponent.module.scss';

//test type from maket
const allTypes = [
  { id: 1, type: 'cash', src: { alt: 'icon cash payment', url: cash }, descr: 'Оплата на месте наличними' },
  {
    id: 2,
    type: 'Visa/MasterCard',
    src: { alt: 'icon payment', url: visa },
    descr: 'Оплата на месте картой Visa или MasterCard',
  },
  { id: 3, type: 'UnionPay', src: { alt: 'icon payment', url: visa }, descr: 'Оплата на месте картой UnionPay' },
  { id: 4, type: 'JCB', src: { alt: 'icon payment', url: visa }, descr: 'Оплата на месте картой JCB' },
  {
    id: 5,
    type: 'AmericanExpress',
    src: { alt: 'icon payment', url: visa },
    descr: 'Оплата на месте картой American Express',
  },
];

export const PaymentComponent = ({ payments, type, onClick, title }) => {
  const isSelecter = type === 'selector';

  return (
    <div className={isSelecter ? s.payment_selector : s.payment}>
      <p className={isSelecter ? s.title_selector : s.title}>{title}</p>
      {payments.map(payment => {
        const myPayment = allTypes.find(({ type }) => payment === type);

        return (
          <button
            type="button"
            className={isSelecter ? s.payment__item_selector : s.payment__item}
            key={myPayment.id}
            onClick={() => onClick(type)}
          >
            <img src={myPayment.src.url} alt={myPayment.src.alt} />
            <div>{myPayment.descr}</div>
          </button>
        );
      })}
    </div>
  );
};
