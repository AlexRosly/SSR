import hotelImage from 'assets/icons/Header/SubheaderHotelier/image-hilton.jpg';
import scss from './HotelImage.module.scss';

export const HotelImage = () => (
  <div className={scss.hotelImageThumb}>
    <img src={hotelImage} className={scss.hotelImage} alt="hotel" />
  </div>
);
