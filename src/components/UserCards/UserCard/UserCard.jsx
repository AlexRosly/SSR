import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Description from '../Description/Description';
import FrontDeskBtn from '../FrontDeskBtn/FrontDeskBtn';
import HotelIcon from '../HotelIcon/HotelIcon';
import Popup from '../Popup/Popup';
import Video from '../Video/Video';
import Gallery from '../Gallery/Gallery';

import ArrowFree from 'assets/icons/common/ArrowFree.svg';
import Hotel from 'assets/icons/common/hotel.svg';

import s from './UserCard.module.scss';
import btnStyle from '../FreeButton/FreeButton.module.scss';
import { useSelector } from 'react-redux';
import { userCardShowText } from 'redux/authentication/authentication.reducer';

import { useOuterCloser } from '../../../utils/utils';

function UserCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const showText = useSelector(userCardShowText);
  const [isShowText, setIsShowText] = useState(showText || false);

  const wrapperRef = useRef(null);
  useOuterCloser(wrapperRef, () => {
    setShowPopup(false);
  });

  const onToggleElement = id => {
    setIsShowText(!isShowText);
  };

  return (
    <li key={props.cardInfo.id}>
      <section className={s.sectionCard}>
        <header className={s.header}>
          <h1 className={s.title}>
            {props.cardInfo.city} <span className={s.titlePiece}>{props.cardInfo.place}</span>
          </h1>
          <div className={s.hotelContainer}>
            <HotelIcon className={s.iconHotel}>
              <img src={Hotel} alt="" />
              <span className={s.status}>{props.cardInfo.status}</span>
            </HotelIcon>
          </div>
          <h2 className={s.hotelName}>{props.cardInfo.title}</h2>
        </header>

        <main className={s.main}>
          {/* pictures hotels */}
          <Gallery
            title={props.cardInfo.title}
            isShowText={isShowText}
            url={props.cardInfo.url}
            rating={props.cardInfo.rating}
            urlImageSecond={props.cardInfo.urlImageSecond}
          />
          {/* text about hotel */}
          <Description
            description={props.cardInfo.description}
            street={props.cardInfo.street}
            id={props.cardInfo.id}
            isShowText={!isShowText}
            onToggleElement={onToggleElement}
          />
          {/* right navbar  */}
          <div className={s.serveBar}>
            <Video videoLink={props.cardInfo.videoLink} />
            {isShowText && <FrontDeskBtn />}
          </div>
        </main>

        <footer className={s.footerCard}>
          <NavLink to="/feedback" className={s.button}>
            Отзывы {props.cardInfo.feedback}
          </NavLink>

          <button
            onClick={() => {
              props.handlePopup();
              setShowPopup(!showPopup);
            }}
            className={!showPopup ? btnStyle.freeButton : btnStyle.freeButtonActive}
          >
            <img src={ArrowFree} className={s.arrow} alt="return arrow" />
            Free
          </button>
          {/* popup free to cancel reservation  */}
          {showPopup && <Popup childRef={wrapperRef} showPopup={showPopup} />}
          <p className={s.areaApartment}>{props.cardInfo.areaApartment} м.кв.</p>
          <p
            className={s.price}
          >{`Цена за ночь ${props.cardInfo.priceBefore} UAH - ${props.cardInfo.priceAfter} UAH`}</p>
        </footer>
      </section>
    </li>
  );
}

export default UserCard;
