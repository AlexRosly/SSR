import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  oneBedRoomDoubleBedCountIncrement,
  oneBedRoomDoubleBedCountDecrement,
  oneBedRoomSingleBedCountDecrement,
  oneBedRoomSingleBedCountIncrement,
} from '../../../../redux/bedRooms/bedRooms.actions.js';

import './OneBedRoom.scss';
import SelectBed from '../../Assents/image/SelectBed.svg';

export default function OneBedRoom({ readyBtnOneBedRoom }) {
  const [showOneBedroomFirstBlockAttetion, setShowOneBedroomFistBlockAttetion] = useState(false);

  const dispatch = useDispatch();
  const doubleBedCount = useSelector(state => state.bedRoomReducer.oneBedRoomDoubleBedCount);
  const singleBedCount = useSelector(state => state.bedRoomReducer.oneBedRoomSingleBedCount);
  const countAllBed = doubleBedCount + singleBedCount;

  const doubleBedCountDecrements = () => {
    if (doubleBedCount === 0) {
      return doubleBedCount;
    } else {
      dispatch(oneBedRoomDoubleBedCountDecrement(1));
    }
  };

  const doubleBedCountIncrements = () => {
    if (doubleBedCount < 3 && countAllBed < 3) {
      dispatch(oneBedRoomDoubleBedCountIncrement(1));
      setShowOneBedroomFistBlockAttetion(false);
    } else {
      return doubleBedCount;
    }
  };

  const singleBedCountDecrements = () => {
    if (singleBedCount === 0) {
      return singleBedCount;
    } else {
      dispatch(oneBedRoomSingleBedCountDecrement(1));
    }
  };

  const singleBedCountIncrements = () => {
    if (singleBedCount < 3 && countAllBed < 3) {
      dispatch(oneBedRoomSingleBedCountIncrement(1));
      setShowOneBedroomFistBlockAttetion(false);
    } else {
      return singleBedCount;
    }
  };

  const disableBtn = doubleBedCount || singleBedCount ? false : true;

  //handle btn

  const btnClick = () => {
    readyBtnOneBedRoom();
  };

  const showAttention = () => {
    if (!doubleBedCount && !singleBedCount) {
      setShowOneBedroomFistBlockAttetion(true);
    }
  };

  return (
    <div className="bedroom__section">
      <p className="bedroom__text">Спальня 1</p>
      <div className={showOneBedroomFirstBlockAttetion ? 'bedroom__block bedroom__block--active' : 'bedroom__block'}>
        <div className="selected__block">
          <div className="selected__bed">
            <div className="doubleBed__hover">
              <svg className="bedroom__icon">
                <use href={`${SelectBed}#doubleBed`}></use>
              </svg>
              <div className="doubleBed__overlay">Двуспальная кровать</div>
            </div>
            <button
              className={
                doubleBedCount ? 'bedroom__btn bedroom__btn--double' : 'bedroom__btn__start bedroom__btn__start--double'
              }
              onClick={doubleBedCountDecrements}
            >
              <svg className="icon__decrement">
                <use href={`${SelectBed}#minus`}></use>
              </svg>
            </button>
            <span className="bedroom__counter">{doubleBedCount}</span>
            <button className="bedroom__btn" onClick={doubleBedCountIncrements}>
              <svg className="icon__increment">
                <use href={`${SelectBed}#plus`}></use>
              </svg>
            </button>
          </div>
          <div className="selected__bed selected__bed--modif">
            <div className="singleBed__hover">
              <svg className="bedroom__icon bedroom__icon--single">
                <use href={`${SelectBed}#singleBed`}></use>
              </svg>
              <div className="singleBed__overlay">Односпальная кровать</div>
            </div>
            <button
              className={
                singleBedCount ? 'bedroom__btn bedroom__btn--single' : 'bedroom__btn__start bedroom__btn__start--single'
              }
              onClick={singleBedCountDecrements}
            >
              <svg className="icon__decrement">
                <use href={`${SelectBed}#minus`}></use>
              </svg>
            </button>
            <span className="bedroom__counter">{singleBedCount}</span>
            <button className="bedroom__btn" onClick={singleBedCountIncrements}>
              <svg className="icon__increment">
                <use href={`${SelectBed}#plus`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {disableBtn ? (
        <button className="confirmBtn" type="submit" onClick={showAttention}>
          Готово
        </button>
      ) : (
        <button
          className={disableBtn ? 'confirmBtn' : 'confirmBtn confirmBtn__eneble confirmBtn__active'}
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
