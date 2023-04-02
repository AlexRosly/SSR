import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  twoBedRoomFirstRoomDoubleBedCountIncrement,
  twoBedRoomFirstRoomDoubleBedCountDecrement,
  twoBedRoomFirstRoomSingleBedCountIncrement,
  twoBedRoomFirstRoomSingleBedCountDecrement,
  twoBedRoomSecondRoomDoubleBedCountDecrement,
  twoBedRoomSecondRoomDoubleBedCountIncrement,
  twoBedRoomSecondRoomSingleBedCountIncrement,
  twoBedRoomSecondRoomSingleBedCountDecrement,
} from '../../../../redux/bedRooms/bedRooms.actions.js';

import './TwoBedRoom.scss';
import SelectBed from '../../Assents/image/SelectBed.svg';

export default function TwoBedRoom({ readyBtnTwoBedRoom }) {
  const [showTwoBedroomFirstBlockAttetion, setShowTwoBedroomFistBlockAttetion] = useState(false);
  const [showTwoBedroomSecondBlockAttetion, setShowTwoBedroomSecondBlockAttetion] = useState(false);

  const dispatch = useDispatch();
  const firstBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.twoBedRoomFirstRoomDoubleCount);
  const firstBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.twoBedRoomFirstRoomSingleBedCount);

  const fistBedRoomAllBed = firstBedRoomDoubleBedCount + firstBedRoomSingleBedCount;

  const firstBedRoomDoubleCountDecrement = () => {
    if (firstBedRoomDoubleBedCount === 0) {
      return firstBedRoomDoubleBedCount;
    } else {
      dispatch(twoBedRoomFirstRoomDoubleBedCountDecrement(1));
    }
  };

  const firstBedRoomDoubleCountIncrement = () => {
    if (firstBedRoomDoubleBedCount < 3 && fistBedRoomAllBed < 3) {
      dispatch(twoBedRoomFirstRoomDoubleBedCountIncrement(1));
      setShowTwoBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomDoubleBedCount;
    }
  };

  const firstSingleBedCountDecrement = () => {
    if (firstBedRoomSingleBedCount === 0) {
      return firstBedRoomSingleBedCount;
    } else {
      dispatch(twoBedRoomFirstRoomSingleBedCountDecrement(1));
    }
  };

  const firstSingleBedCountIncrement = () => {
    if (firstBedRoomSingleBedCount < 3 && fistBedRoomAllBed < 3) {
      dispatch(twoBedRoomFirstRoomSingleBedCountIncrement(1));
      setShowTwoBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomSingleBedCount;
    }
  };

  // second room

  const secondBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.twoBedRoomSecondRoomDoubleCount);
  const secondBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.twoBedRoomSecondRoomSingleBedCount);

  const secondBedRoomAllBed = secondBedRoomDoubleBedCount + secondBedRoomSingleBedCount;

  const secondBedRoomDoubluCountDecrement = () => {
    if (secondBedRoomDoubleBedCount === 0) {
      return secondBedRoomDoubleBedCount;
    } else {
      dispatch(twoBedRoomSecondRoomDoubleBedCountDecrement(1));
    }
  };

  const secondBedRoomDoubluCountIncrement = () => {
    if (secondBedRoomDoubleBedCount < 3 && secondBedRoomAllBed < 3) {
      dispatch(twoBedRoomSecondRoomDoubleBedCountIncrement(1));
      setShowTwoBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomDoubleBedCount;
    }
  };

  const secondSingleBedCountDecrement = () => {
    if (secondBedRoomSingleBedCount === 0) {
      return secondBedRoomSingleBedCount;
    } else {
      dispatch(twoBedRoomSecondRoomSingleBedCountDecrement(1));
    }
  };

  const secondSingleBedCountIncrement = () => {
    if (secondBedRoomSingleBedCount < 3 && secondBedRoomAllBed < 3) {
      dispatch(twoBedRoomSecondRoomSingleBedCountIncrement(1));
      setShowTwoBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomSingleBedCount;
    }
  };

  const disableBtn =
    (firstBedRoomDoubleBedCount || firstBedRoomSingleBedCount) &&
    (secondBedRoomDoubleBedCount || secondBedRoomSingleBedCount)
      ? false
      : true;

  //handle btn

  const btnClick = () => {
    readyBtnTwoBedRoom();
  };

  const showAttention = () => {
    if (!firstBedRoomDoubleBedCount && !firstBedRoomSingleBedCount) {
      setShowTwoBedroomFistBlockAttetion(true);
    }
    if (!secondBedRoomDoubleBedCount && !secondBedRoomSingleBedCount) {
      setShowTwoBedroomSecondBlockAttetion(true);
    }
  };

  return (
    <div className="twoBedRooms__section">
      <div className="twoBedRooms__group">
        {/* first bedroom */}
        <div className="twoBedRooms__div">
          <p className="twoBedRooms__text">Спальня 1</p>
          <div
            className={
              showTwoBedroomFirstBlockAttetion ? 'twoBedRooms__block twoBedRooms__block--active' : 'twoBedRooms__block'
            }
          >
            <div className="twoBedRooms__selected__block">
              <div className="twoBedRooms__selected__bed">
                <div className="twoBedRooms__firstDoubleBedRoom__hover">
                  <svg className="twoBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="twoBedRooms__firstDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomDoubleBedCount
                      ? 'twoBedRooms__btn twoBedRooms__btn--double'
                      : 'twoBedRooms__btn__start twoBedRooms__btn__start--double'
                  }
                  onClick={firstBedRoomDoubleCountDecrement}
                >
                  <svg className="twoBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="twoBedRooms__counter">{firstBedRoomDoubleBedCount}</span>
                <button className="twoBedRooms__btn" onClick={firstBedRoomDoubleCountIncrement}>
                  <svg className="twoBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="twoBedRooms__selected__bed twoBedRooms__selected__bed--modif">
                <div className="twoBedRooms__firstSingleBed__hover">
                  <svg className="twoBedRooms__icon twoBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="twoBedRooms__firstSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomSingleBedCount
                      ? 'twoBedRooms__btn twoBedRooms__btn--single'
                      : 'twoBedRooms__btn__start twoBedRooms__btn__start--single'
                  }
                  onClick={firstSingleBedCountDecrement}
                >
                  <svg className="twoBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="twoBedRooms__counter">{firstBedRoomSingleBedCount}</span>
                <button className="twoBedRooms__btn" onClick={firstSingleBedCountIncrement}>
                  <svg className="twoBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second bedroom */}
        <div>
          <p className="twoBedRooms__text">Спальня 2</p>
          <div
            className={
              showTwoBedroomSecondBlockAttetion ? 'twoBedRooms__block twoBedRooms__block--active' : 'twoBedRooms__block'
            }
          >
            <div className="twoBedRooms__selected__block">
              <div className="twoBedRooms__selected__bed">
                <div className="twoBedRooms__secondDoubleBedRoom__hover">
                  <svg className="twoBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="twoBedRooms__secondDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    secondBedRoomDoubleBedCount
                      ? 'twoBedRooms__btn twoBedRooms__btn--double'
                      : 'twoBedRooms__btn__start twoBedRooms__btn__start--double'
                  }
                  onClick={secondBedRoomDoubluCountDecrement}
                >
                  <svg className="twoBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="twoBedRooms__counter">{secondBedRoomDoubleBedCount}</span>
                <button className="twoBedRooms__btn" onClick={secondBedRoomDoubluCountIncrement}>
                  <svg className="twoBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="twoBedRooms__selected__bed twoBedRooms__selected__bed--modif">
                <div className="twoBedRooms__secondSingleBed__hover">
                  <svg className="twoBedRooms__icon twoBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="twoBedRooms__secondSingleBed__overlay">Односпальная кровать</div>
                </div>

                <button
                  className={
                    secondBedRoomSingleBedCount
                      ? 'twoBedRooms__btn twoBedRooms__btn--single'
                      : 'twoBedRooms__btn__start twoBedRooms__btn__start--single'
                  }
                  onClick={secondSingleBedCountDecrement}
                >
                  <svg className="twoBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="twoBedRooms__counter">{secondBedRoomSingleBedCount}</span>
                <button className="twoBedRooms__btn" onClick={secondSingleBedCountIncrement}>
                  <svg className="twoBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {disableBtn ? (
        <button className="twoBedRooms__confirmBtn" type="submit" onClick={showAttention}>
          Готово
        </button>
      ) : (
        <button
          className={
            disableBtn
              ? 'twoBedRooms__confirmBtn'
              : 'twoBedRooms__confirmBtn twoBedRooms__confirmBtn__eneble twoBedRooms__confirmBtn__active'
          }
          type="submit"
          disabled={disableBtn}
          onClick={btnClick}
        >
          Готово
        </button>
      )}
    </div>
  );
}
