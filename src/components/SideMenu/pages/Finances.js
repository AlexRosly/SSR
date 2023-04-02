import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COMMISSIONS } from 'config';
import { chooseCurrency, selectActiveCurrency, selectCurrencies } from 'features/common';
import NavbarSideMenu from 'components/SideMenu/navbar';

import '../../../styles/common/_sideMenu.scss';
import { IconHeader } from 'components/Common/Header/Components/IconHeader';

const { commission } = COMMISSIONS;

const amount = '1355.2';
const commissionedAmount = (Number(1355.2) * Number(commission)).toFixed(2);
const commissionedAmount2 = '76.49';

export default function Finances() {
  const currencies = useSelector(selectCurrencies);
  const {
    id: activeCurrencyId,
    value: activeCurrencyCode,
    text: activeCurrencyText,
  } = useSelector(selectActiveCurrency);

  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();
  const handleClick = newCurrencyId => {
    dispatch(chooseCurrency(newCurrencyId));

    setShow(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const showList = () => {
    setShow(true);
  };

  const hideList = () => {
    setShow(false);
  };

  return (
    <div>
      <NavbarSideMenu />
      <div className="account-setting-container ">
        {/*  <div className="page_finance-name">Финансы</div> */}

        <button className={toggle ? 'toggle-active' : 'toggle-nonactive'} onClick={handleToggle}>
          {toggle ? 'toggle active state' : 'toggle not active state'}
        </button>

        {toggle && (
          <div className="container-account-active">
            <div className="account-block">
              <div className="block__active">Аккаунт активен </div>
              <div className="block__text">
                <p className="text__distance-1">
                  <span className="text__element">Вы получаете запросы на бронирование.</span>
                </p>
                <p className="text__distance-2">
                  <span className="text__element">
                    Вы можете предлагать бронирования в ваших объектах пользователям.
                  </span>
                </p>
                <p className="text__distance-3">
                  <span className="text__element">Вы можете заключать договора бронирования.</span>
                </p>
                <p className="text__distance-4">
                  <span className="text__small">
                    Если Ваша задолженность перед нашим сервисом превысит 20 USD и не будет погашена на протяжении 36
                    часов, то ваш аккаунт будет приостановлен .
                  </span>
                </p>
              </div>
              <div className="block__text-score">
                Задолженность <span className="text-score__money">0 </span>
                <span className="text-usd">USD</span>
              </div>
              <div className="block__text-deposit">
                Депозит <span className="text-score__money">33000 </span>
                <span className="text-usd">USD</span>
              </div>
            </div>

            <div>
              <button className="account-btn account-text-btn">Пополнить депозит</button>
            </div>
          </div>
        )}

        {!toggle && (
          <div className="container-account-notactive">
            <div className="account-block">
              <div className="block__notactive">Аккаунт не активен </div>
              <div className="block__text">
                <p className="text__distance-1">
                  <span className="text__element">Вы не получаете запросы на бронирование.</span>
                </p>
                <p className="text__distance-2">
                  <span className="text__element">
                    Вы не можете предлагать бронирования в ваших объектах пользователям.
                  </span>
                </p>
                <p className="text__distance-3">
                  <span className="text__element">Вы не можете заключать договора бронирования .</span>
                </p>
                <p className="text__distance-dislike">
                  <span className="text__small">
                    Ваша задолженность перед нашим сервисом превысила 20 USD и не была погашена на протяжении 36 часов.
                    Ваш аккаунт приостановлен до погашения задолженности.
                  </span>
                </p>
              </div>
              <div className="block__text-score">
                Задолженность <span className="text-score__money">3300 </span>
                <span className="text-usd">USD</span>
              </div>
              <div className="block__text-deposit">
                Депозит <span className="text-score__money">0 </span>
                <span className="text-usd">USD</span>
              </div>
            </div>

            <button className="account-btn account-text-btn">Пополнить депозит</button>
          </div>
        )}

        <div className="container-finance-table">
          <div className="table__deposit1-block">
            <p className="table__block-name">
              <span className="block-name__text">deposit replenishment</span>
            </p>
            <p className="table__block-date">
              <span className="block-date__text">18.02.2022</span>
            </p>
            <p className="table__block-option">
              <span className="block-option__text">Bonus</span>
            </p>
            <p className="table__block-money">
              <span className="block-money__text">1000 USD</span>
            </p>
          </div>
          <div className="hr1"></div>
          <div className="table__deposit2-block">
            <p className="table__block-name">
              <span className="block-name__text">deposit replenishment</span>
            </p>
            <p className="table__block-date">
              <span className="block-date__text">18.02.2022</span>
            </p>

            <p className="table__block-money">
              <span className="block-money__text">76.49 USD</span>
            </p>
          </div>
          <div className="hr2"></div>
          <div className="table__expenditure1-block">
            <p className="table__block-name">
              <span className="block-name__text">expenditure</span>
            </p>

            <p className="table__block-date">
              <span className="block-date__text">18.02.2022</span>
            </p>
            <ul className="table__block-info-expenditure1 ">
              <li className="block-info__text-commision">Commission {commission} of booking</li>
              <li className="block-info__text-name">Object: Санта Мария</li>
              <li className="block-info__text-option">Option: 237, 777</li>
              <li className="block-info__text-date">Date 23.02.2021 - 29.03.2021</li>
              <li className="block-info__text-money">Amount {amount} USD</li>
            </ul>
            <p className="table__block-money">
              <span className="block-money__text">{commissionedAmount} USD</span>
            </p>
          </div>
          <div className="hr3"></div>
          <div className="table__expenditure2-block">
            <p className="table__block-name">
              <span className="block-name__text">expenditure</span>
            </p>

            <p className="table__block-date">
              <span className="block-date__text">18.02.2022</span>
            </p>
            <ul className="table__block-info-expenditure2 ">
              <li className="block-info__text-commision">Commission {commission} of booking</li>
              <li className="block-info__text-name">Object: Санта Мария</li>
              <li className="block-info__text-option">Option: 237, 777</li>
              <li className="block-info__text-date">Date 23.02.2021 - 29.03.2021</li>
              <li className="block-info__text-money">Amount {amount} USD</li>
            </ul>
            <p className="table__block-money">
              <span className="block-money__text">{commissionedAmount2} USD</span>
            </p>
          </div>
          <div className="hr4"></div>
        </div>
        <div className="container-currency">
          <span className="currency__text">Выберите валюту, которой вам удобно работать:</span>

          <div className="currency__block">
            <div className="lang-block" onMouseEnter={showList} onMouseLeave={hideList}>
              <div className={'lang-input cur-width color-oject'}>
                {activeCurrencyText} {activeCurrencyCode}
              </div>

              <IconHeader iconId="arrow-up-chevron" className="vector-sky" />

              {show && (
                <ul className="lang-list" onMouseLeave={hideList}>
                  {currencies.ids.map(currencyId => {
                    const item = currencies.entities[currencyId];
                    if (!item) return null;
                    const { value, text } = item;
                    return (
                      <li
                        key={currencyId}
                        className={currencyId === activeCurrencyId ? 'selected' : ''}
                        value={value}
                        onClick={() => handleClick(currencyId)}
                      >
                        {text} <span>{value}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
