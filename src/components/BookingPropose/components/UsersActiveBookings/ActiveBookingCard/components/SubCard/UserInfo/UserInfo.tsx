import dog from 'components/MainPage/Assents/icon/midleDog.svg';
import s from '../subcard.module.scss';

export const UserInfo = () => {
  return (
    <div className={s.user_info}>
      <p className={s.user_info_item}>Путешествую по работе</p>
      <p className={s.user_info_item}>Путешествую со средним псом</p>
      <div className={s.user_info_icon}>
        <img src={dog} alt=" animal" />
      </div>
    </div>
  );
};
