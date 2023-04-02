import React from 'react';
import urk from './UserRequestCard.module.scss';

export const BookingKarma = () => {
  return (
    <div className={urk.style_container_karma}>
      <div className={urk.style_title_string_karma}>
        Booking Karma
        <span className={urk.style_number_title_karma}>22</span>
      </div>
      <ul className={urk.block_container_ul_karma}>
        <li className={urk.style_block_li}>
          Забронировано <span className={urk.style_number_string}>35</span>
        </li>
        <li className={urk.style_block_li}>
          Отменил бронь<span className={urk.style_number_string}>8</span>
        </li>
        <li className={urk.style_block_li}>
          Не прибыл согласно договора
          <span className={urk.style_number_string}>6</span>
        </li>
        <li className={urk.style_block_li}>
          Поставил оценку объектам <span className={urk.style_number_string}>4</span>
        </li>

        <li className={urk.style_block_li}>
          Оставил отзывов об объектах
          <span className={urk.style_number_string}>9</span>
        </li>
        <li className={urk.style_block_li}>
          Оставил отзывов об Your Price Booking
          <span className={urk.style_number_string}>2</span>
        </li>
        <li className={urk.style_block_li}>
          Зарегестрирован лет
          <span className={urk.style_number_string}>менее 1 года</span>
        </li>
      </ul>
      <button className={urk.style_btn_karma}>
        ОТЗЫВЫ <span>33</span>
      </button>
    </div>
  );
};
