import { NavLink } from 'react-router-dom';
import { useLinkToMainHotelier } from 'hooks/routes';
import closeButton from './img/closeButton.png';

import s from './SearchLocation.module.scss';

const SearchLocation = () => {
  const to = useLinkToMainHotelier();

  return (
    <div className={s.search_wrap}>
      <NavLink to={to} className={s.closeButton_wrap}>
        <img className={s.closeButton} src={closeButton} alt="" />
      </NavLink>
    </div>
  );
};

export default SearchLocation;
