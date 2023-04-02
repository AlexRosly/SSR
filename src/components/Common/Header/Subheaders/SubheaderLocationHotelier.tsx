import { useLocation } from 'react-router-dom';
import {
  CABINET_HOTELIER,
  // HOUSING_RENT,
  // KVARTIRY_RENT,
  // DOM_RENT,
  // KOMNATA_RENT,
  // DOM_KOMNATA_RENT,
  // HOSTEL_RENT,
  // GOSTINICY_RENT,
  // HOTEL_RENT,
  // MOTEL_RENT,
  // GUEST_HOUSE_RENT,
  // CAPSULE_HOTEL_RENT,
} from 'navigation/CONSTANTS';
import kiev from 'assets/images/header/Kiev.png';
import search from 'assets/images/header/Search.png';

const bookingCur = (pathname: string) => {
  switch (pathname) {
    case CABINET_HOTELIER:
      return 'Сдать посуточно жилье';
    // case HOUSING_RENT:
    //   return 'Сдать посуточно жилье';
    // case KVARTIRY_RENT:
    //   return 'Сдать квартиру посуточно';
    // case DOM_RENT:
    //   return 'Сдать дом посуточно';
    // case DOM_KOMNATA_RENT:
    //   return 'Сдать комнату в доме посуточно';
    // case KOMNATA_RENT:
    //   return 'Сдать комнату в квартире посуточно';
    // case HOSTEL_RENT:
    //   return 'Сдать место в хостеле';
    // case GOSTINICY_RENT:
    //   return 'Сдать номер в гостинице';
    // case HOTEL_RENT:
    //   return 'Сдать номер в отеле';
    // case MOTEL_RENT:
    //   return 'Сдать номер в мотеле';
    // case GUEST_HOUSE_RENT:
    //   return 'Сдать номер в Guest Houses';
    // case CAPSULE_HOTEL_RENT:
    //   return 'Сдать номер в Capsule Hotels';
    default:
      // throw new Error('this url not exists!');
      return null;
  }
};

// possibly no need
export const SubheaderLocationHotelier = () => {
  const { pathname } = useLocation();

  const bookingStr = bookingCur(pathname);

  return (
    <div className="location-header">
      <div className="location-search-wrap">
        <div className="location-search">
          <img src={search} alt="search" />

          <input type="text" className="location-input" />
        </div>
      </div>

      <div className="booking-container">
        <img src={kiev} alt="Hotel" className="location-img" />

        <div className="location">
          <p>
            <span className="city-location">Киев</span>
            <span className="country-location">Украина</span>
          </p>

          <p className="booking-location">
            {/* Все варианты бронирования */}
            {bookingStr}
          </p>
        </div>
      </div>
    </div>
  );
};
