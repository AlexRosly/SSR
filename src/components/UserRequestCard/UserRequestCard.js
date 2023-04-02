import { useState, useEffect } from 'react';
import iconJack from '../../assets/images/userRequestCard/Rectangle 14.png';
import urc from './UserRequestCard.module.scss';
import { IconRoomComponent } from './IconRoomComponent';
import { BookingKarma } from './BookingKarma';
import { UserAsk } from './UserAsk';
// import { BookingTime } from './BookingTime';
export const UserRequestCard = () => {
  const [toggleKarma, setToggleKarma] = useState(false);
  const [toggleBookingTime, setToggleBookingTime] = useState(false);
  const [locationText] = useState('12345678901  12 3456 78901 1234 5678901  ');
  const clickKarmaBlock = () => {
    setToggleKarma(!toggleKarma);
  };
  // const clickBookingTime = () => {
  //   setToggleBookingTime(true);
  // };

  useEffect(() => {
    const checkClose = e => {
      const boxTime = document.getElementById('bookingTimeId');
      const click = e.composedPath().includes(boxTime);

      if (toggleKarma) {
        setToggleKarma(false);
      }
      if (!click && toggleBookingTime) {
        setToggleBookingTime(false);
      }
    };
    document.addEventListener('click', checkClose);
    return () => {
      document.removeEventListener('click', checkClose);
    };
  }, [toggleKarma, toggleBookingTime]);
  return (
    <div className={urc.container}>
      <div className={urc.blockAva}>
        <div className={urc.blockAva__avatar}>
          <img src={iconJack} alt="userIcon" />
        </div>
        <div lang="en-US" className={urc.blockAva__name}>
          ДжекиДжеки ЧанЧанЧанЧан ЧанЧан Чан Чан Чан ZанЧан
        </div>
        <div className={urc.blockAva_karma_container_btn} onClick={clickKarmaBlock}>
          <div className={urc.blockAva__karma}>Booking Karma</div>
          <div className={urc.blockAva__number}>22</div>
          <div className={toggleKarma ? urc.block_container_bookingKarma_open : urc.block_container_bookingKarma_close}>
            <BookingKarma />
          </div>
        </div>

        <div className={urc.blockAva__trip}>
          <input className={urc.trip_input_check} type="checkbox" id="trip" name="trip" value="checked" />
          <label className={urc.trip_label} htmlFor="trip">
            Путешествую по работе
          </label>
        </div>
      </div>
      <div className={urc.container__detail}>
        <div className={urc.detail__block1}>
          <div className={locationText.length < 12 ? urc.detail__location_text : urc.detail__location_text2}>
            {locationText}
          </div>
          <div className={urc.detail__date}>23 мар. 2020 - 29 мар. 2020г</div>
          <div className={urc.detail__money}>Не более 30054AH за ночь</div>
          <div className={urc.detail__animal}></div>
        </div>
        <div className={urc.detail__block2}>
          <div className={urc.detail__day}>7 ночей</div>

          <div className={urc.block_container_house}>
            <UserAsk />
          </div>
        </div>

        <div className={urc.detail__room_block3}>
          <IconRoomComponent room={false} />
        </div>

        <div className={urc.detail__buttons_block4}>
          <button className={urc.buttons_style}>Удалить</button>
          {/* <button onClick={clickBookingTime} className={urc.buttons_style}>
              Продлить
            </button> */}
        </div>
        {/* <div
            id="bookingTimeId"
            className={
              toggleBookingTime
                ? urc.block_container_bookingTime_open
                : urc.block_container_bookingTime_close
            }
          >
            <BookingTime />
          </div> */}
      </div>
    </div>
  );
};
