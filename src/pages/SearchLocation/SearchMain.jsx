import { NavLink } from 'react-router-dom';
import closeButton from './img/closeButton.png';
import { MAIN } from 'navigation/CONSTANTS';

import s from './SearchLocation.module.scss';

const SearchMain = () => {
  return (
    <div className={s.search_wrap}>
      <NavLink to={MAIN} className={s.closeButton_wrap}>
        <img className={s.closeButton} src={closeButton} alt="" />
      </NavLink>
    </div>
  );
};

export default SearchMain;
