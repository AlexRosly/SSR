import { useLocation } from 'react-router-dom';
import { isOnHotelierCatalog, isOnUserCatalog } from 'navigation/CONSTANTS';
import { LanguagePicker } from './LanguagePicker';
import { CurrencyPicker } from './CurrencyPicker';

import scss from './DesktopPickers.module.scss';

export const DesktopPickers = () => {
  const { pathname } = useLocation();

  let routeSpecificStyle = '';
  if (isOnHotelierCatalog(pathname)) {
    routeSpecificStyle = scss.hotelierCatalog;
  } else if (isOnUserCatalog(pathname)) {
    routeSpecificStyle = scss.userCatalog;
  }

  return (
    <div className={`${scss.desktopPickers} ${routeSpecificStyle}`}>
      <LanguagePicker />
      <CurrencyPicker />
    </div>
  );
};
