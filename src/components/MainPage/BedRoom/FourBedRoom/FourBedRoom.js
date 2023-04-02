import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  fourBedRoomFirstRoomDoubleBedCountIncrement,
  fourBedRoomFirstRoomDoubleBedCountDecrement,
  fourBedRoomFirstRoomSingleBedCountIncrement,
  fourBedRoomFirstRoomSingleBedCountDecrement,
  fourBedRoomSecondRoomDoubleBedCountIncrement,
  fourBedRoomSecondRoomDoubleBedCountDecrement,
  fourBedRoomSecondRoomSingleBedCountIncrement,
  fourBedRoomSecondRoomSingleBedCountDecrement,
  fourBedRoomThirdRoomDoubleBedCountIncrement,
  fourBedRoomThirdRoomDoubleBedCountDecrement,
  fourBedRoomThirdRoomSingleBedCountIncrement,
  fourBedRoomThirdRoomSingleBedCountDecrement,
  fourBedRoomFourthRoomDoubleBedCountIncrement,
  fourBedRoomFourthRoomDoubleBedCountDecrement,
  fourBedRoomFourthRoomSingleBedCountIncrement,
  fourBedRoomFourthRoomSingleBedCountDecrement,
} from '../../../../redux/bedRooms/bedRooms.actions.js';

import './FourBedRoom.scss';
import SelectBed from '../../Assents/image/SelectBed.svg';

export default function FourBedRoom({ readyBtnFourBedRoom }) {
  const [showFourBedroomFirstBlockAttetion, setShowFourBedroomFistBlockAttetion] = useState(false);
  const [showFourBedroomSecondBlockAttetion, setShowFourBedroomSecondBlockAttetion] = useState(false);

  const [showFourBedroomThirdBlockAttetion, setShowFourBedroomThirdBlockAttetion] = useState(false);

  const [showFourBedroomFourthBlockAttetion, setShowFourBedroomFourthBlockAttetion] = useState(false);

  //one bedroom
  const dispatch = useDispatch();
  const firstBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomFirstRoomDoubleCount);
  const firstBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomFirstRoomSingleBedCount);
  const fistBedRoomCountAllBed = firstBedRoomDoubleBedCount + firstBedRoomSingleBedCount;

  const firstBedRoomDoubleCountDecrement = () => {
    if (firstBedRoomDoubleBedCount === 0) {
      return firstBedRoomDoubleBedCount;
    } else {
      dispatch(fourBedRoomFirstRoomDoubleBedCountDecrement(1));
    }
  };

  const firstBedRoomDoubleCountIncrement = () => {
    if (firstBedRoomDoubleBedCount < 3 && fistBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomFirstRoomDoubleBedCountIncrement(1));
      setShowFourBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomDoubleBedCount;
    }
  };

  const firstSingleBedCountDecrement = () => {
    if (firstBedRoomSingleBedCount === 0) {
      return firstBedRoomSingleBedCount;
    } else {
      dispatch(fourBedRoomFirstRoomSingleBedCountDecrement(1));
    }
  };

  const firstSingleBedCountIncrement = () => {
    if (firstBedRoomSingleBedCount < 3 && fistBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomFirstRoomSingleBedCountIncrement(1));
      setShowFourBedroomFistBlockAttetion(false);
    } else {
      return firstBedRoomSingleBedCount;
    }
  };
  //second bedroom
  const secondBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomSecondRoomDoubleCount);
  const secondBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomSecondRoomSingleBedCount);
  const secondBedRoomCountAllBed = secondBedRoomDoubleBedCount + secondBedRoomSingleBedCount;

  const secondBedRoomDoubluCountDecrement = () => {
    if (secondBedRoomDoubleBedCount === 0) {
      return secondBedRoomDoubleBedCount;
    } else {
      dispatch(fourBedRoomSecondRoomDoubleBedCountDecrement(1));
    }
  };

  const secondBedRoomDoubluCountIncrement = () => {
    if (secondBedRoomDoubleBedCount < 3 && secondBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomSecondRoomDoubleBedCountIncrement(1));
      setShowFourBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomDoubleBedCount;
    }
  };

  const secondSingleBedCountDecrement = () => {
    if (secondBedRoomSingleBedCount === 0) {
      return secondBedRoomSingleBedCount;
    } else {
      dispatch(fourBedRoomSecondRoomSingleBedCountDecrement(1));
    }
  };

  const secondSingleBedCountIncrement = () => {
    if (secondBedRoomSingleBedCount < 3 && secondBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomSecondRoomSingleBedCountIncrement(1));
      setShowFourBedroomSecondBlockAttetion(false);
    } else {
      return secondBedRoomSingleBedCount;
    }
  };

  //third bedroom
  const thirdBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomThirdRoomDoubleCount);
  const thirdBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomThirdRoomSingleBedCount);
  const thirdBedRoomCountAllBed = thirdBedRoomDoubleBedCount + thirdBedRoomSingleBedCount;

  const thirdBedRoomDoubluCountDecrement = () => {
    if (thirdBedRoomDoubleBedCount === 0) {
      return thirdBedRoomDoubleBedCount;
    } else {
      dispatch(fourBedRoomThirdRoomDoubleBedCountDecrement(1));
    }
  };

  const thirdBedRoomDoubluCountIncrement = () => {
    if (thirdBedRoomDoubleBedCount < 3 && thirdBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomThirdRoomDoubleBedCountIncrement(1));
      setShowFourBedroomThirdBlockAttetion(false);
    } else {
      return thirdBedRoomDoubleBedCount;
    }
  };

  const thirdSingleBedCountDecrement = () => {
    if (thirdBedRoomSingleBedCount === 0) {
      return thirdBedRoomSingleBedCount;
    } else {
      dispatch(fourBedRoomThirdRoomSingleBedCountDecrement(1));
    }
  };

  const thirdSingleBedCountIncrement = () => {
    if (thirdBedRoomSingleBedCount < 3 && thirdBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomThirdRoomSingleBedCountIncrement(1));
      setShowFourBedroomThirdBlockAttetion(false);
    } else {
      return thirdBedRoomSingleBedCount;
    }
  };

  //fourth bedroom

  const fourthBedRoomDoubleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomFourthRoomDoubleCount);
  const fourthBedRoomSingleBedCount = useSelector(state => state.bedRoomReducer.fourBedRoomFourthRoomSingleBedCount);
  const fourthBedRoomCountAllBed = fourthBedRoomDoubleBedCount + fourthBedRoomSingleBedCount;

  const fourthBedRoomDoubluCountDecrement = () => {
    if (fourthBedRoomDoubleBedCount === 0) {
      return fourthBedRoomDoubleBedCount;
    } else {
      dispatch(fourBedRoomFourthRoomDoubleBedCountDecrement(1));
    }
  };

  const fourthBedRoomDoubluCountIncrement = () => {
    if (fourthBedRoomDoubleBedCount < 3 && fourthBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomFourthRoomDoubleBedCountIncrement(1));
      setShowFourBedroomFourthBlockAttetion(false);
    } else {
      return fourthBedRoomDoubleBedCount;
    }
  };

  const fourthSingleBedCountDecrement = () => {
    if (fourthBedRoomSingleBedCount === 0) {
      return fourthBedRoomSingleBedCount;
    } else {
      dispatch(fourBedRoomFourthRoomSingleBedCountDecrement(1));
    }
  };

  const fourthSingleBedCountIncrement = () => {
    if (fourthBedRoomSingleBedCount < 3 && fourthBedRoomCountAllBed < 3) {
      dispatch(fourBedRoomFourthRoomSingleBedCountIncrement(1));
      setShowFourBedroomFourthBlockAttetion(false);
    } else {
      return fourthBedRoomSingleBedCount;
    }
  };

  const disableBtn =
    (firstBedRoomDoubleBedCount || firstBedRoomSingleBedCount) &&
    (secondBedRoomDoubleBedCount || secondBedRoomSingleBedCount) &&
    (thirdBedRoomDoubleBedCount || thirdBedRoomSingleBedCount) &&
    (fourthBedRoomDoubleBedCount || fourthBedRoomSingleBedCount)
      ? false
      : true;

  //handle btn

  const btnClick = () => {
    readyBtnFourBedRoom();
  };

  const showAttention = () => {
    if (!firstBedRoomDoubleBedCount && !firstBedRoomSingleBedCount) {
      setShowFourBedroomFistBlockAttetion(true);
    }
    if (!secondBedRoomDoubleBedCount && !secondBedRoomSingleBedCount) {
      setShowFourBedroomSecondBlockAttetion(true);
    }
    if (!thirdBedRoomDoubleBedCount && !thirdBedRoomSingleBedCount) {
      setShowFourBedroomThirdBlockAttetion(true);
    }
    if (!fourthBedRoomDoubleBedCount && !fourthBedRoomSingleBedCount) {
      setShowFourBedroomFourthBlockAttetion(true);
    }
  };

  return (
    <div className="fourBedRooms__section">
      <div className="fourBedRooms__group">
        {/* first bedroom */}
        <div className="fourBedRooms__div">
          <p className="fourBedRooms__text">Спальня 1</p>
          <div
            className={
              showFourBedroomFirstBlockAttetion
                ? 'fourBedRooms__block fourBedRooms__block--active'
                : 'fourBedRooms__block'
            }
          >
            <div className="fourBedRooms__selected__block">
              <div className="fourBedRooms__selected__bed">
                <div className="fourBedRooms__firstDoubleBedRoom__hover">
                  <svg className="fourBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__firstDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomDoubleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--double'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--double'
                  }
                  onClick={firstBedRoomDoubleCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{firstBedRoomDoubleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={firstBedRoomDoubleCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="fourBedRooms__selected__bed fourBedRooms__selected__bed--modif">
                <div className="fourBedRooms__firstSingleBed__hover">
                  <svg className="fourBedRooms__icon fourBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__firstSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    firstBedRoomSingleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--single'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--single'
                  }
                  onClick={firstSingleBedCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{firstBedRoomSingleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={firstSingleBedCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second bedroom */}
        <div className="fourBedRooms__div">
          <p className="fourBedRooms__text">Спальня 2</p>
          <div
            className={
              showFourBedroomSecondBlockAttetion
                ? 'fourBedRooms__block fourBedRooms__block--active'
                : 'fourBedRooms__block'
            }
          >
            <div className="fourBedRooms__selected__block">
              <div className="fourBedRooms__selected__bed">
                <div className="fourBedRooms__secondDoubleBedRoom__hover">
                  <svg className="fourBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__secondDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    secondBedRoomDoubleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--double'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--double'
                  }
                  onClick={secondBedRoomDoubluCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{secondBedRoomDoubleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={secondBedRoomDoubluCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="fourBedRooms__selected__bed fourBedRooms__selected__bed--modif">
                <div className="fourBedRooms__secondSingleBed__hover">
                  <svg className="fourBedRooms__icon fourBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__secondSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    secondBedRoomSingleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--single'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--single'
                  }
                  onClick={secondSingleBedCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{secondBedRoomSingleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={secondSingleBedCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* third bedroom */}
        <div className="fourBedRooms__div">
          <p className="fourBedRooms__text">Спальня 3</p>
          <div
            className={
              showFourBedroomThirdBlockAttetion
                ? 'fourBedRooms__block fourBedRooms__block--active'
                : 'fourBedRooms__block'
            }
          >
            <div className="fourBedRooms__selected__block">
              <div className="fourBedRooms__selected__bed">
                <div className="fourBedRooms__thirdDoubleBedRoom__hover">
                  <svg className="fourBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__thirdDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    thirdBedRoomDoubleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--double'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--double'
                  }
                  onClick={thirdBedRoomDoubluCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{thirdBedRoomDoubleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={thirdBedRoomDoubluCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="fourBedRooms__selected__bed fourBedRooms__selected__bed--modif">
                <div className="fourBedRooms__thirdSingleBed__hover">
                  <svg className="fourBedRooms__icon fourBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__thirdSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    thirdBedRoomSingleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--single'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--single'
                  }
                  onClick={thirdSingleBedCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{thirdBedRoomSingleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={thirdSingleBedCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* fourth bedroom */}
        <div className="fourBedRooms__div">
          <p className="fourBedRooms__text">Спальня 4</p>
          <div
            className={
              showFourBedroomFourthBlockAttetion
                ? 'fourBedRooms__block fourBedRooms__block--active'
                : 'fourBedRooms__block'
            }
          >
            <div className="fourBedRooms__selected__block">
              <div className="fourBedRooms__selected__bed">
                <div className="fourBedRooms__fourthDoubleBedRoom__hover">
                  <svg className="fourBedRooms__icon">
                    <use href={`${SelectBed}#doubleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__fourthDoubleBedRoom__overlay">Двуспальная кровать</div>
                </div>
                <button
                  className={
                    fourthBedRoomDoubleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--double'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--double'
                  }
                  onClick={fourthBedRoomDoubluCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{fourthBedRoomDoubleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={fourthBedRoomDoubluCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
              <div className="fourBedRooms__selected__bed fourBedRooms__selected__bed--modif">
                <div className="fourBedRooms__fourthSingleBed__hover">
                  <svg className="fourBedRooms__icon fourBedRooms__icon--single">
                    <use href={`${SelectBed}#singleBed`}></use>
                  </svg>
                  <div className="fourBedRooms__fourthSingleBed__overlay">Односпальная кровать</div>
                </div>
                <button
                  className={
                    fourthBedRoomSingleBedCount
                      ? 'fourBedRooms__btn fourBedRooms__btn--single'
                      : 'fourBedRooms__btn__start fourBedRooms__btn__start--single'
                  }
                  onClick={fourthSingleBedCountDecrement}
                >
                  <svg className="fourBedRooms__decrement">
                    <use href={`${SelectBed}#minus`}></use>
                  </svg>
                </button>
                <span className="fourBedRooms__counter">{fourthBedRoomSingleBedCount}</span>
                <button className="fourBedRooms__btn" onClick={fourthSingleBedCountIncrement}>
                  <svg className="fourBedRooms__increment">
                    <use href={`${SelectBed}#plus`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {disableBtn ? (
        <button className="fourBedRooms__confirmBtn" type="submit" onClick={showAttention}>
          Готово
        </button>
      ) : (
        <button
          className={
            disableBtn
              ? 'fourBedRooms__confirmBtn'
              : 'fourBedRooms__confirmBtn fourBedRooms__confirmBtn__eneble fourBedRooms__confirmBtn__active'
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
