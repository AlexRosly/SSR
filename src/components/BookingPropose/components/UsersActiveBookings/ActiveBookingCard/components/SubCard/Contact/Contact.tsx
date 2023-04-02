import s from '../subcard.module.scss';
import phoneIcon from 'assets/icons/proposeCard/phone.svg';

export const Contact = () => {
  return (
    <div className={s.contact}>
      <p>Проспект Ватутина, д. 15, кв. 6</p>
      <p>E mail: gfg@fi.mi</p>
      <div className={s.contact__phone}>
        <img src={phoneIcon} alt="phone" />
        <span> +380732467890</span>
      </div>

      <div className={s.contact__phone}>
        <img src={phoneIcon} alt="phone" />
        <span>+380732467890</span>
      </div>
    </div>
  );
};
