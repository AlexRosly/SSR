import apartHotelIcon from 'assets/icons/proposeCard/aparthotelIcon.svg';
import locationIcon from 'assets/icons/proposeCard/locationIcon.svg';
import s from 'components/BookingPropose/components/HoteliersProposes/HoteliersProposeCard/HoteliersProposeCard.module.scss';

interface IProps {
  data: {
    name: string;
    city: string;
    address: string;
  };
}

export const Location = ({ data }: IProps) => {
  const { name, city, address } = data;

  return (
    <div className={s.location}>
      <div className={s.location__header}>
        <img className={s.location__apart_hotel_icon} src={apartHotelIcon} alt="apart hotel" />
        <div
          className={
            name.length < 10 ? s.location__hotel_name : `${s.location__hotel_name} ${s.location__hotel_name_xs}`
          }
        >
          {name}
        </div>
      </div>
      <div className={s.location__city}>
        <h2 className={city.length < 10 ? s.city__name : `${s.city__name} ${s.city__name_xs}`}>{city}</h2>
        <img className={s.city__location_icon} src={locationIcon} alt="location pin" />
      </div>
      <p className={s.location__address}>{address}</p>
    </div>
  );
};
