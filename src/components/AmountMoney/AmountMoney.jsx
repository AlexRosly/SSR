import { useCallback, useEffect, useState } from 'react';
import Arrow from './image/arrow-6.svg';
import './AmountMoney.scss';
import eyesL from './image/vector-eyes-left.svg';
import eyesR from './image/vector-1.svg';
import clock from './image/circle752.svg';
import { useSelector } from 'react-redux';
import { selectActiveCurrencyCode } from 'features/common';

export const AmountMoney = ({ setSugAmount, closeSelector, onSubmit }) => {
  const activeCurrencyCode = useSelector(selectActiveCurrencyCode);
  const [currency, setCurrency] = useState(300);
  const [count, setCount] = useState(1);

  const [louder, setLouder] = useState(false);
  const [goback, setGoBack] = useState(true);

  useEffect(() => {
    let timer = null;
    if (louder) {
      timer = setInterval(() => {
        if (count > 0) {
          setCount(prev => prev - 1);
        } else if (count <= 0) {
          stopTimer();
          clearInterval(timer);
          setCount(1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count, louder]);

  const stopTimer = () => {
    setLouder(false);
  };
  const onChangeAmount = e => {
    setCurrency(e.target.value);
    setLouder(true);
  };

  // const KeyPressHandler = (e) => {
  //   const { value, maxLength } = e.target
  //   if (value.length >= maxLength) {
  //     e.preventDefault()
  //     return
  //   }
  // }

  const inputHandler = e => {
    const { value, maxLength } = e.target;
    e.target.value = value.slice(0, maxLength);
  };
  const goBack = useCallback(() => {
    setGoBack(false);
  }, []);

  useEffect(() => {
    setSugAmount(goback);
  }, [goback, setSugAmount]);

  return (
    <div className="position__amount">
      <form
        className="amount__container"
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
          closeSelector();
        }}
      >
        <div className="block__1">
          <button className="arrow__btn" onClick={goBack}>
            <svg className="icon__arrow-btn">
              <use href={`${Arrow}#arrow`}></use>
            </svg>
          </button>
          <p className="block__1-text1">
            Укажите сумму <br />
            <span className="block__1-text2">которую вы готовы потратить</span>
          </p>
        </div>
        <div className="position__block24">
          <div className="block__2">
            <input
              id="amount"
              type="number"
              maxLength="7"
              className="block__2-input"
              //value={value}
              onChange={onChangeAmount}
              onInput={inputHandler}
              //onKeyPress={KeyPressHandler}
              // required
            />
            <label className="blue__dot-label" htmlFor="amount"></label>
            <div className="bock__2-position-text">
              <span className="bock__2-text">{activeCurrencyCode} </span>
            </div>
          </div>
          <div className="block__3 ">
            <p className="block__3-text">за весь период бронирования</p>

            <div className="detail__date">23 мар. 2020 - 29 мар. 2020г</div>
          </div>
          <div className="block__4">
            <p className="block__4-text">
              или нажмите
              <button type="submit" className="block__4-text2">
                смотреть варианты
              </button>
            </p>
          </div>
        </div>

        <button type="submit" className="block__5">
          <div className="block__5-img">
            <img src={eyesL} alt="eyes" />
            <img src={eyesR} alt="eyes" />
          </div>
          <div className="block__5-text">
            смотреть <br />
            варианты
          </div>
          <div className="block__5-text2">
            {louder && <img src={clock} alt="clock" />}
            {!louder && <div>{currency === '' ? 300 : currency}</div>}
          </div>
        </button>
      </form>
    </div>
  );
};
