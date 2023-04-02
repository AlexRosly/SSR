import apartHotelIcon from 'assets/icons/proposeCard/aparthotelIcon.svg';
import locationIcon from 'assets/icons/proposeCard/locationIcon.svg';

import s from '../../HoteliersProposeCard.module.scss';

type TProps = Record<'city' | 'hotelName' | 'address', string>;

export const Location = ({ city, hotelName, address }: TProps) => {
  const styleForBigHotelName =
    hotelName.length < 10 ? s.location__hotel_name : `${s.location__hotel_name} ${s.location__hotel_name_xs}`;

  const styleForBigCityName = city.length < 10 ? s.city__name : `${s.city__name} ${s.city__name_xs}`;

  return (
    <div className={s.location}>
      <div className={s.location__header}>
        <img className={s.location__apart_hotel_icon} src={apartHotelIcon} alt="apart hotel" />
        <div className={styleForBigHotelName}>{hotelName}</div>
      </div>
      <div className={s.location__city}>
        <h2 className={styleForBigCityName}>{city}</h2>
        <img className={s.city__location_icon} src={locationIcon} alt="location pin" />
      </div>
      <p className={s.location__address}>{address}</p>
    </div>
  );
};
