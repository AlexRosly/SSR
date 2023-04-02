import s from './SubNavigation.module.scss';

interface ISubNavigation {
  toggle: (type: { propose: true } | { userBookings: true }) => void;
  numberOfPropose: number | null;
  activeSection: {
    propose?: boolean;
    userBookings?: boolean;
  };
  haveActiveBooking: boolean;
}

export const SubNavigation = ({ toggle, activeSection, numberOfPropose, haveActiveBooking }: ISubNavigation) => {
  return (
    <div className={s.tab__section}>
      <div
        className={`${s.tab} ${activeSection.propose && s.tab_active} ${
          numberOfPropose && numberOfPropose > 0 && s.tab_accent
        }`}
        onClick={() => toggle({ propose: true })}
      >
        <span className={s.tab__text}>Ваши запросы</span>
        <span className={s.tab__text}> Предложения бронирований</span>
        <span className={s.tab__count}>{!haveActiveBooking && numberOfPropose}</span>
      </div>
      <div
        className={`${s.tab} ${activeSection.userBookings && s.tab_active} ${haveActiveBooking && s.tab_accent}`}
        onClick={() => toggle({ userBookings: true })}
      >
        <span className={s.tab__text}>Действующие бронирования</span>
      </div>
    </div>
  );
};
