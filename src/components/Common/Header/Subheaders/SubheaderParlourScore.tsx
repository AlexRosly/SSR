import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HOTELIER_ACCOUNT_SETTINGS,
  HOTELIER_FEEDBACK,
  HOTELIER_FINANCES,
  HOTELIER_SALES_HISTORY,
  CABINET_HOTELIER,
  HOTELIER_SMS_SETTINGS,
} from 'navigation/CONSTANTS';
import { makeEntity } from 'utils';
import { useMedia } from 'hooks/UI';
import { SubheaderList } from './SubheaderParlour';
import { IconHeader } from '../Components/IconHeader';

import hilton from 'assets/images/header/Hilton.svg';
import finance from 'assets/images/header/finance.svg';
import myProfile from 'assets/images/header/MyProfile.svg';
import historyHeader from 'assets/images/header/HistoryHeader.svg';
import exit from 'assets/images/header/Exit.svg';
import settingAccount from 'assets/images/header/settingAccount.svg';
import settingSMS from 'assets/images/header/settingSMS.svg';
import star from 'assets/images/header/Star.svg';

import scss from './SubheaderParlourScore.module.scss';
import { IconSmallArrow } from './SubheaderUser';
// import { useTranslation } from 'react-i18next';

export const ThumbUpIcon = () => <IconHeader className={scss.thumbUp} iconId="thumb-up" />;
export const ThumbDownIcon = () => <IconHeader className={scss.thumbDown} iconId="thumb-up" />;

type ItemKeys = 'link' | 'imgSrc' | 'alt' | 'text' | 'i18Key';
type ParlourSettingsItem = Record<ItemKeys, string>;

const settingsList: ParlourSettingsItem[] = [
  { link: CABINET_HOTELIER, imgSrc: myProfile, alt: 'My profile', text: 'Мой профиль', i18Key: 'linkMyProfile' },
  {
    link: HOTELIER_ACCOUNT_SETTINGS,
    imgSrc: settingAccount,
    alt: 'account settings',
    text: 'Настройки аккаунта',
    i18Key: 'linkAccountSettings',
  },
  { link: HOTELIER_FINANCES, imgSrc: finance, alt: 'finances', text: 'Финансы', i18Key: 'linkFinances' },
  { link: HOTELIER_FEEDBACK, imgSrc: star, alt: 'star', text: 'Рейтинг и отзывы', i18Key: 'linkRatingAndFeedback' },
  {
    link: HOTELIER_SMS_SETTINGS,
    imgSrc: settingSMS,
    alt: 'sms notification settings',
    text: 'Настройка SMS уведомлений',
    i18Key: 'linkSmsNotificationSettings',
  },
  {
    link: HOTELIER_SALES_HISTORY,
    imgSrc: historyHeader,
    alt: 'sales history',
    text: 'История продаж',
    i18Key: 'linkSalesHistory',
  },
];

const parlourSettingsListInitState = Object.freeze(makeEntity(settingsList));

const ParlourSettingsList = ({ closeSettings }: { closeSettings: () => void }) => {
  // const { t } = useTranslation();
  const [parlourSettings] = useState(parlourSettingsListInitState);

  return (
    <ul className="parlourSetting-list" onMouseLeave={closeSettings}>
      {parlourSettings.ids.map(parlourSettingsItemId => {
        const item = parlourSettings.entities[parlourSettingsItemId];
        if (!item) return null;
        const { link, imgSrc, alt, text /* i18Key */ } = item;
        // const translated = t(i18Key);

        return (
          <li key={parlourSettingsItemId} className="setting-selected">
            <Link to={link} className="settings-link">
              <div className="setting-logo-wrapper">
                <img src={imgSrc} alt={alt} className="setting-logo" />
              </div>

              <span className="parlourSetting-text">{text}</span>
            </Link>
          </li>
        );
      })}

      <li className="setting-selected">
        <div className="setting-logo-wrapper">
          <img src={exit} alt="exit" className="setting-logo" />
        </div>

        <span className="parlourSetting-text">Выход</span>
      </li>
    </ul>
  );
};

const HotelNameAndScore = ({ name, score }: { name: string; score: string }) => (
  <div className="city-cur">
    <span className="city-name">{name}</span>

    <span className="city-stars-wrap">
      <span className="city-stars">{score}</span>
    </span>
  </div>
);

export const SubheaderParlourScore = () => {
  const { isMobile } = useMedia();
  const [show, setShow] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [hasDeposit, setHasDeposit] = useState(true);

  const toggleThumbsUp = useCallback(() => {
    setHasDeposit(prev => !prev);
  }, []);

  const openSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const setShowTrue = useCallback(async () => {
    // await wait(500);
    setShow(true);
  }, []);

  const setShowFalse = useCallback(async () => {
    // await wait(500);
    setShow(false);
  }, []);

  return (
    <div className="requests-ScoreBox">
      {!isMobile && (
        <button onClick={toggleThumbsUp} style={{ margin: '0 15px 0 0' }}>
          Задолженность
        </button>
      )}

      {hasDeposit ? (
        <div className="container-ScoreBox" onMouseLeave={setShowTrue}>
          {!isMobile && (
            <button className={scss.containerScoreBoxThumbUp} onMouseEnter={setShowFalse} type="button">
              <ThumbUpIcon />
            </button>
          )}

          <div className={show ? 'selectedScore' : ''} onMouseLeave={setShowTrue}>
            <div className="overlayScore">
              {/* <div className="close-img">
                <svg className="close-svg" onClick={() => setShow(true)}>
                  <use href={`${sprite}#close`}></use>
                </svg>
              </div> */}

              <p className="header-ScoreBox">Аккаунт активен</p>
              <p className="main-ScoreBox">Вы получаете запросы на бронирование.</p>
              <p className="main-ScoreBox">Вы можете предлагать бронирования в ваших объектах пользователям.</p>
              <p className="main-ScoreBox">Вы можете заключать договора бронирования.</p>
              <p className="text-ScoreBox">
                Если Ваша задолженность перед нашим сервисом превысит 20 USD, то ваш аккаунт будет приостановлен.
              </p>
              <p className="value-ScoreBox dagger">
                Задолженность<span className="price-ScoreBox">0 USD</span>
              </p>
              <p className="value-ScoreBox good">
                Депозит<span className="price-ScoreBox">33 USD</span>
              </p>

              <div className="deposit-btn-style">
                <button className="deposit-btn">Пополнить депозит</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-ScoreBox" onMouseLeave={setShowTrue}>
          {!isMobile && (
            <button className={scss.containerScoreBoxThumbUp} onMouseEnter={setShowFalse} type="button">
              <ThumbDownIcon />
            </button>
          )}

          <div className={show ? 'selectedScore' : ''} onMouseLeave={setShowTrue}>
            <div className="overlayScore">
              {/* <div className="close-img">
                <svg className="close-svg" onClick={() => setShow(true)}>
                  <use href={`${sprite}#close`}></use>
                </svg>
              </div> */}

              <p className="header-ScoreBox dislike-h">Аккаунт не активен</p>
              <p className="main-ScoreBox">Вы получаете запросы на бронирование.</p>
              <p className="main-ScoreBox">Вы можете предлагать бронирования в ваших объектах пользователям.</p>
              <p className="main-ScoreBox">Вы можете заключать договора бронирования.</p>

              <p className="text-ScoreBox">
                Ваша задолженность перед нашим сервисом превысила 20 USD. Ваш аккаунт приостановлен до погашения
                задолженности.
              </p>

              <p className="value-ScoreBox dagger">
                Задолженность<span className="price-ScoreBox">33 USD</span>
              </p>

              <p className="value-ScoreBox good">
                Депозит<span className="price-ScoreBox">0 USD</span>
              </p>

              <div className="deposit-btn-style">
                <button className="deposit-btn">Пополнить депозит</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="requests-box">
        <SubheaderList />

        <div className="parlourHotel-container" onClick={openSettings} onMouseLeave={closeSettings}>
          <div className="hotel-img-wrap">
            <img src={hilton} alt="Hotel" className="hotel-img-score" />
            {/* <img src={window} alt="Hotel" className="hotel-img" /> */}

            {!isMobile && <HotelNameAndScore name="Hilton" score="4,33" />}

            <div className="arrowWrapper">
              <IconSmallArrow isUp={showSettings} className={scss.arrow} />
            </div>
          </div>

          {showSettings && <ParlourSettingsList closeSettings={closeSettings} />}
        </div>
      </div>
    </div>
  );
};
