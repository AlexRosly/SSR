import s from './Price.module.scss';
import moneyIcon from 'assets/icons/proposeCard/dollar.svg';
import calendarIcon from 'assets/icons/proposeCard/calendar.svg';

export const Price = ({ price, date }) => {
  return (
    <div className={s.container}>
      <div className={`${s.item} ${s.price}`}>
        <img src={moneyIcon} alt="dollar" /> {price}
      </div>
      <div className={`${s.item} ${s.date}`}>
        <img src={calendarIcon} alt="calendar" />
        {`${date.from} - ${date.to}`}
      </div>
    </div>
  );
};
