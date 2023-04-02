import { useState } from 'react';
import scss from './HotelNameAndRating.module.scss';

const HotelName = () => {
  const [hotelName] = useState('Hilton');
  return <p className={scss.hotelName}>{hotelName}</p>;
};

const HotelRating = () => {
  const [rating] = useState('4,33');

  return (
    <div className={scss.hotelRatingBox}>
      <span className={scss.hotelRating}>{rating}</span>
    </div>
  );
};

export const HotelNameAndRating = () => (
  <div className={scss.hotelNameAndRating}>
    <HotelName />
    <HotelRating />
  </div>
);
