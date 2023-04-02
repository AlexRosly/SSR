import { NavLink, useLocation } from 'react-router-dom';

import NavigationSprite from '../../assets/images/header/NavigationSprite.svg';

import '../../styles/common/_sideMenu.scss';

const linkClass = ({ isActive }) => (isActive ? 'active-link' : 'menu__list-text');
const linkClass2 = ({ isActive }) => (isActive ? 'active-link' : 'menu__list-link');

export default function NavbarSideMenu() {
  const { pathname } = useLocation();
  const checkRoute = pathname.includes('user');

  // const [isOpen, setIsOpen] = useState('false')
  return (
    <div>
      {/* <div className="container-navbar"></div> */}

      {!checkRoute ? (
        <div className="menu-container1">
          <ul className="menu__list">
            <li className="nav-block">
              <NavLink to="/account-settings" className={linkClass}>
                <svg className="icon ">
                  <use href={`${NavigationSprite}#settingAccount`}></use>
                </svg>
                Настройка аккаунта
              </NavLink>
            </li>
            <li className="nav-block">
              <NavLink to="/finances" className={linkClass}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#vectorFinance`}></use>
                </svg>
                Финансы
              </NavLink>
            </li>
            <li className="nav-block">
              <NavLink to="/feedback" className={linkClass}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#star`}></use>
                </svg>
                Рейтинг и отзывы
              </NavLink>
            </li>
            <li className="nav-block ">
              <NavLink to="/sms-settings" className={linkClass}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#settingSMS`}></use>
                </svg>
                Настройка SMS уведомлений
              </NavLink>
            </li>
            <li className="nav-block">
              <NavLink to="/history-sales" className={linkClass}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#Ship`}></use>
                </svg>
                История продаж
              </NavLink>
            </li>
            {/* <li className="nav-block6">
              <button className="nav__close" onClick={closeMenu}></button>
            </li> */}
          </ul>
        </div>
      ) : (
        <div className="menu-container">
          <ul className="menu__list-user">
            <li className="nav-block7">
              <NavLink to="/user-account-setting" className={linkClass2}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#settingAccount`}></use>
                </svg>
                Настройка аккаунта
              </NavLink>
            </li>
            <li className="nav-block8">
              <NavLink to="/user-sms-settings" className={linkClass2}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#settingSMS`}></use>
                </svg>
                Настройка SMS уведомлений
              </NavLink>
            </li>
            <li className="nav-block9">
              <NavLink to="/user-booking-karma" className={linkClass2}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#Clock`}></use>
                </svg>
                Booking Karma
              </NavLink>
            </li>
            <li className="nav-block10">
              <NavLink to="/user-booking-history" className={linkClass2}>
                <svg className="icon">
                  <use href={`${NavigationSprite}#Ship`}></use>
                </svg>
                История бронирований
              </NavLink>
            </li>
            {/* <li className="nav-block6">
              <button className="nav__close" onClick={closeMenu}></button>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
}
