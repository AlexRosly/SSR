import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  gbvcssSingleBedCountIncrement,
  gbvcssSingleBedCountDecrement,
} from "../../../../redux/bedRooms/bedRooms.actions.js";

import SelectBed from "../../Assents/image/SelectBed.svg";
import "./Gbvcss.scss";

export default function Gbvcss({ readyBtnGbvcss }) {
  const [showGbvcssBlockAttetion, setShowGbvcssBlockAttetion] = useState(false);

  const dispatch = useDispatch();
  const singleBedCount = useSelector(
    (state) => state.bedRoomReducer.gbvcssSigleBedCount
  );

  const singleBedCountDecrement = () => {
    if (singleBedCount === 0) {
      return singleBedCount;
    } else {
      dispatch(gbvcssSingleBedCountDecrement(1));
    }
  };
  const singleBedCountIncrement = () => {
    if (singleBedCount < 12) {
      dispatch(gbvcssSingleBedCountIncrement(1));
      setShowGbvcssBlockAttetion(false);
    } else {
      return singleBedCount;
    }
  };

  const disableBtn = singleBedCount ? false : true;

  //handle btn

  const btnClick = () => {
    readyBtnGbvcss();
  };

  const showAttention = () => {
    if (!singleBedCount) {
      setShowGbvcssBlockAttetion(true);
    }
  };

  return (
    <div className="gbvcss__section">
      <div
        className={
          showGbvcssBlockAttetion
            ? "gbvcss__block gbvcss__block--active"
            : "gbvcss__block"
        }
      >
        <div className="selected__block">
          <div className="gbvcss__bed gbvcss__bed--modif">
            <div className="gbvcss__hover">
              <svg className="gbvcss__icon gbvcss__icon--single">
                <use href={`${SelectBed}#singleBed`}></use>
              </svg>
              <div className="gbvcss__overlay">Односпальная кровать</div>
            </div>

            <button
              className={
                singleBedCount
                  ? "gbvcss__btn gbvcss__btn--single"
                  : "gbvcss__btn__start gbvcss__btn__start--single"
              }
              onClick={singleBedCountDecrement}
            >
              <svg className="gbvcss__decrement">
                <use href={`${SelectBed}#minus`}></use>
              </svg>
            </button>
            <span className="gbvcss__counter">{singleBedCount}</span>
            <button className="gbvcss__btn" onClick={singleBedCountIncrement}>
              <svg className="gbvcss__increment">
                <use href={`${SelectBed}#plus`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {disableBtn ? (
        <button
          className="gbvcss__confirmBtn"
          type="submit"
          onClick={showAttention}
        >
          Готово
        </button>
      ) : (
        <button
          className={
            disableBtn
              ? "gbvcss__confirmBtn"
              : "gbvcss__confirmBtn gbvcss__confirmBtn__eneble gbvcss__confirmBtn__active"
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
