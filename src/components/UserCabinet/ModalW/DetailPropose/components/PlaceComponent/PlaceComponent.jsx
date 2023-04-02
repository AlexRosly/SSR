import s from './PlaceComponent.module.scss';
import hotel from '../image/hotel.png';
import sprite from '../image/icon/sprite.svg';
import RatingComponent from 'pages/HousePage/HouseComponents/RatingComponent';

export const PlaceComponent = ({ title, adress }) => {
  return (
    <div className={s.content}>
      <div className={s.icon_block}>
        <img src={hotel} alt="house icon" className={s.icon_hotel} />
        <svg className={s.icon_vector}>
          <use href={`${sprite}#vector`}></use>
        </svg>
      </div>

      <div className={s.location}>
        <div className={s.location_name}>{title}</div>
        <div className={s.location_address}>{adress}</div>
      </div>

      <div className={s.rating}>
        <RatingComponent />
      </div>
    </div>
  );
};
