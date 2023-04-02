import { NavLink, Link } from 'react-router-dom';
import s from '../FrontDeskBtn/FrontDeskBtn.module.scss';

function FrontDeskBtn() {
  return (
    <>
      {
        <nav className={s.list}>
          <NavLink to="/price" className={s.button}>
            Узнать цены
          </NavLink>
          <NavLink to="/reserve" className={s.button}>
            Забронировать
          </NavLink>
          <Link to="/house-page" className={s.button_last}>
            Детальнее
          </Link>
        </nav>
      }
    </>
  );
}

export default FrontDeskBtn;
