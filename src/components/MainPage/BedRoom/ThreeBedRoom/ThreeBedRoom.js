import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  threeBedRoomFirstRoomDoubleBedCountDecrement,
  threeBedRoomFirstRoomDoubleBedCountIncrement,
  threeBedRoomFirstRoomSingleBedCountIncrement,
  threeBedRoomFirstRoomSingleBedCountDecrement,
  threeBedRoomSecondRoomDoubleBedCountIncrement,
  threeBedRoomSecondRoomDoubleBedCountDecrement,
  threeBedRoomSecondRoomSingleBedCountIncrement,
  threeBedRoomSecondRoomSingleBedCountDecrement,
  threeBedRoomThirdRoomDoubleBedCountIncrement,
  threeBedRoomThirdRoomDoubleBedCountDecrement,
  threeBedRoomThirdRoomSingleBedCountIncrement,
  threeBedRoomThirdRoomSingleBedCountDecrement,
} from '../../../../redux/bedRooms/bedRooms.actions.js';

import './ThreeBedRoom.scss';
import SelectBed from '../../Assents/image/SelectBed.svg';

export default function ThreeBedRoom({ readyBtnThreeBedRoom }) {
  const [showTreeBedroomFirstBlockAttetion, setShowTreeBedroomFistBlockAttetion] = useState(false);
  const [showTreeBedroomSecondBlockAttetion, setShowTreeBedroomSecondBlockAttetion] = useState(false);

  const [showTreeBedroomThirdBlockAttetion, setShowTreeBedroomThirdBlockAttetion] = useState(false);

  const dispatch = useDispatch();
  const firstBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomFirstRoomDoubleCount);
  const firstBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomFirstRoomSingleBedCount);
  const fistBedRoomCountAllBed = firstBedRoomDoubleBedCount + firstBedRoomSingleBedCount;

  const firstBedRoomDoubleCountDecrement = () => {
    if (firstBedRoomDoubleBedCount === 0) {
      return firstBedRoomDoubleBedCount;
    } else {
      dispatch(threeBedRoomFirstRoomDoubleBedCountDecrement(1));
    }
  };

  const firstBedRoomDoubleCountIncrement = () => {
    if (firstBedRoomDoubleBedCount < 3 && fistBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomFirstRoomDoubleBedCountIncrement(1));
      setShowTreeBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomDoubleBedCount;
    }
  };

  const firstSingleBedCountDecrement = () => {
    if (firstBedRoomSingleBedCount === 0) {
      return firstBedRoomSingleBedCount;
    } else {
      dispatch(threeBedRoomFirstRoomSingleBedCountDecrement(1));
    }
  };

  const firstSingleBedCountIncrement = () => {
    if (firstBedRoomSingleBedCount < 3 && fistBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomFirstRoomSingleBedCountIncrement(1));
      setShowTreeBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomSingleBedCount;
    }
  };
  //second bedroom
  const secondBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomSecondRoomDoubleCount);
  const secondBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomSecondRoomSingleBedCount);
  const secondBedRoomCountAllBed = secondBedRoomDoubleBedCount + secondBedRoomSingleBedCount;

  const secondBedRoomDoubluCountDecrement = () => {
    if (secondBedRoomDoubleBedCount === 0) {
      return secondBedRoomDoubleBedCount;
    } else {
      dispatch(threeBedRoomSecondRoomDoubleBedCountDecrement(1));
    }
  };

  const secondBedRoomDoubluCountIncrement = () => {
    if (secondBedRoomDoubleBedCount < 3 && secondBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomSecondRoomDoubleBedCountIncrement(1));
      setShowTreeBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomDoubleBedCount;
    }
  };

  const secondSingleBedCountDecrement = () => {
    if (secondBedRoomSingleBedCount === 0) {
      return secondBedRoomSingleBedCount;
    } else {
      dispatch(threeBedRoomSecondRoomSingleBedCountDecrement(1));
    }
  };

  const secondSingleBedCountIncrement = () => {
    if (secondBedRoomSingleBedCount < 3 && secondBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomSecondRoomSingleBedCountIncrement(1));
      setShowTreeBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomSingleBedCount;
    }
  };

  //third bedroom
  const thirdBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomThirdRoomDoubleCount);
  const thirdBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.threeBedRoomThirdRoomSingleBedCount);
  const thirdBedRoomCountAllBed = thirdBedRoomDoubleBedCount + thirdBedRoomSingleBedCount;

  const thirdBedRoomDoubluCountDecrement = () => {
    if (thirdBedRoomDoubleBedCount === 0) {
      return thirdBedRoomDoubleBedCount;
    } else {
      dispatch(threeBedRoomThirdRoomDoubleBedCountDecrement(1));
    }
  };

  const thirdBedRoomDoubluCountIncrement = () => {
    if (thirdBedRoomDoubleBedCount < 3 && thirdBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomThirdRoomDoubleBedCountIncrement(1));
      setShowTreeBedroomThirdBlockAttetion(false);
    } else {
      return thirdBedRoomDoubleBedCount;
    }
  };

  const thirdSingleBedCountDecrement = () => {
    if (thirdBedRoomSingleBedCount === 0) {
      return thirdBedRoomSingleBedCount;
    } else {
      dispatch(threeBedRoomThirdRoomSingleBedCountDecrement(1));
    }
  };

  const thirdSingleBedCountIncrement = () => {
    if (thirdBedRoomSingleBedCount < 3 && thirdBedRoomCountAllBed < 3) {
      dispatch(threeBedRoomThirdRoomSingleBedCountIncrement(1));
      setShowTreeBedroomThirdBlockAttetion(false);
    } else {
      return thirdBedRoomSingleBedCount;
    }
  };

  const disableBtn =
    (firstBedRoomDoubleBedCount || firstBedRoomSingleBedCount) &&
    (secondBedRoomDoubleBedCount || secondBedRoomSingleBedCount) &&
    (thirdBedRoomDoubleBedCount || thirdBedRoomSingleBedCount)
      ? false
      : true;

  //handle btn

  const btnClick = () => {
    readyBtnThreeBedRoom();
  };

  const showAttention = () => {
    if (!firstBedRoomDoubleBedCount && !firstBedRoomSingleBedCount) {
      setShowTreeBedroomFistBlockAttetion(true);
    }
    if (!secondBedRoomDoubleBedCount && !secondBedRoomSingleBedCount) {
      setShowTreeBedroomSecondBlockAttetion(true);
    }
    if (!thirdBedRoomDoubleBedCount && !thirdBedRoomSingleBedCount) {
      setShowTreeBedroomThirdBlockAttetion(true);
    }
  };

  return (
    <div className="threeBedRooms__section">
      <div className="threeBedRooms__group">
        {/* first bedroom */}
        <div className="threeBedRooms__div">
          <p className="threeBedRooms__text">Спальня 1</p>
          <div
            className={
              showTreeBedroomFirstBlockAttetion
                ? 'threeBedRooms__block threeBedRooms__block--active'
                : 'threeBedRooms__block'
            }
          >
            <div className="threeBedRooms__selected__block">
              <div className="threeBedRooms__selected__bed">
                <div className="threeBedRooms__firstDoubleBedRoom__hover">
                  <svg className="threeBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__firstDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomDoubleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--double'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--double'
                  }
                  onClick={firstBedRoomDoubleCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{firstBedRoomDoubleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={firstBedRoomDoubleCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="threeBedRooms__selected__bed threeBedRooms__selected__bed--modif">
                <div className="threeBedRooms__firstSingleBed__hover">
                  <svg className="threeBedRooms__icon threeBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__firstSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomSingleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--single'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--single'
                  }
                  onClick={firstSingleBedCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{firstBedRoomSingleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={firstSingleBedCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second bedroom */}
        <div className="threeBedRooms__div">
          <p className="threeBedRooms__text">Спальня 2</p>
          <div
            className={
              showTreeBedroomSecondBlockAttetion
                ? 'threeBedRooms__block threeBedRooms__block--active'
                : 'threeBedRooms__block'
            }
          >
            <div className="threeBedRooms__selected__block">
              <div className="threeBedRooms__selected__bed">
                <div className="threeBedRooms__secondDoubleBedRoom__hover">
                  <svg className="threeBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__secondDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    secondBedRoomDoubleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--double'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--double'
                  }
                  onClick={secondBedRoomDoubluCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{secondBedRoomDoubleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={secondBedRoomDoubluCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="threeBedRooms__selected__bed threeBedRooms__selected__bed--modif">
                <div className="threeBedRooms__secondSingleBed__hover">
                  <svg className="threeBedRooms__icon threeBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__secondSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    secondBedRoomSingleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--single'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--single'
                  }
                  onClick={secondSingleBedCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{secondBedRoomSingleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={secondSingleBedCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* third bedroom */}
        <div className="threeBedRooms__div">
          <p className="threeBedRooms__text">Спальня 3</p>
          <div
            className={
              showTreeBedroomThirdBlockAttetion
                ? 'threeBedRooms__block threeBedRooms__block--active'
                : 'threeBedRooms__block'
            }
          >
            <div className="threeBedRooms__selected__block">
              <div className="threeBedRooms__selected__bed">
                <div className="threeBedRooms__thirdDoubleBedRoom__hover">
                  <svg className="threeBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__thirdDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    thirdBedRoomDoubleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--double'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--double'
                  }
                  onClick={thirdBedRoomDoubluCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{thirdBedRoomDoubleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={thirdBedRoomDoubluCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="threeBedRooms__selected__bed threeBedRooms__selected__bed--modif">
                <div className="threeBedRooms__thirdSingleBed__hover">
                  <svg className="threeBedRooms__icon threeBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="threeBedRooms__thirdSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    thirdBedRoomSingleBedCount
                      ? 'threeBedRooms__btn threeBedRooms__btn--single'
                      : 'threeBedRooms__btn__start threeBedRooms__btn__start--single'
                  }
                  onClick={thirdSingleBedCountDecrement}
                >
                  <svg className="threeBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="threeBedRooms__counter">{thirdBedRoomSingleBedCount}</span>
                <button className="threeBedRooms__btn" onClick={thirdSingleBedCountIncrement}>
                  <svg className="threeBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {disableBtn ? (
        <button className="threeBedRooms__confirmBtn" type="submit" onClick={showAttention}>
          Готово
        </button>
      ) : (
        <button
          className={
            disableBtn
              ? 'threeBedRooms__confirmBtn'
              : 'threeBedRooms__confirmBtn threeBedRooms__confirmBtn__eneble threeBedRooms__confirmBtn__active'
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
