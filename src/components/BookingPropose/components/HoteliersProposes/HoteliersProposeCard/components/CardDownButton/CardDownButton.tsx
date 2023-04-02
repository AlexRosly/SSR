import { useState } from 'react';
import arrowdown from 'assets/icons/proposeCard/arrowdown.svg';
import s from '../../HoteliersProposeCard.module.scss';

interface IProps {
  listLength: number;
  onClick: () => void;
}

export const CardDownButton = ({ listLength, onClick }: IProps) => {
  const [toggleButtonClick, setToggleButtonClick] = useState(false);

  const handleClick = () => {
    if (listLength > 1) {
      onClick();
      setToggleButtonClick(true);
    }
  };

  return (
    <button
      data-action="cardDown"
      className={toggleButtonClick ? `${s.card__btn_apply} ${s.card__btn_apply__active}` : s.card__btn_apply}
      onClick={handleClick}
    >
      <svg data-action="cardDown">
        <use href={`${arrowdown}#arrowdown`} data-action="cardDown" />
      </svg>
    </button>
  );
};
