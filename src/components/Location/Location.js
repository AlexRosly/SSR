import { useLocation } from 'react-router-dom';
import {
  APART_HOTEL,
  CAPSULE_HOTEL,
  DOM,
  GOSTINICY,
  GUEST_HOUSE,
  HOLIDAY_DOM,
  HOSTEL,
  HOTEL,
  KOMNATA,
  KURORT_HOTEL,
  KVARTIRY,
  KVARTIRY1,
  KVARTIRY2,
  KVARTIRY3,
  KVARTIRY4,
  USER_CATALOG,
  MOTEL,
  SHALE,
  TINY_DOM,
  VILLA,
} from 'navigation/CONSTANTS';
import feedBack from '../../assets/images/feedback/feedback.jpg';
import feedBackDOM from '../../assets/images/feedback/feedbackDOM.jpg';
import feedBackTinyDOM from '../../assets/images/feedback/feedbackTinyDOM.jpg';
import feedBackHolidayDom from '../../assets/images/feedback/feedbackHolidayDom.jpg';
import feedBackKvartiry from '../../assets/images/feedback/feedbackKvartiry.jpg';
import feedBackKvartiry1 from '../../assets/images/feedback/feedbackKvartiry1.jpg';
import feedBackKvartiry2 from '../../assets/images/feedback/feedbackKvartiry2.jpg';
import feedBackKvartiry3 from '../../assets/images/feedback/feedbackKvartiry3.jpg';
import feedBackKvartiry4 from '../../assets/images/feedback/feedbackKvartiry4.jpg';
import feedBackApart from '../../assets/images/feedback/feedbackApart.jpg';
import feedBackCapsuleHotel from '../../assets/images/feedback/feedbackCapsuleHotel.jpg';
import feedBackGostinicy from '../../assets/images/feedback/feedbackGostinicy.jpg';
import feedBackGuestHouse from '../../assets/images/feedback/feedbackGuestHouse.jpg';
import feedBackHostel from '../../assets/images/feedback/feedbackHostel.jpg';
import feedBackHotel from '../../assets/images/feedback/feedbackHotel.jpg';
import feedBackKomnaty from '../../assets/images/feedback/feedbackKomnaty.jpg';
import feedBackKurortHotel from '../../assets/images/feedback/feedbackKurortHotel.jpg';
import feedBackMotel from '../../assets/images/feedback/feedbackMotel.jpg';
import feedBackShale from '../../assets/images/feedback/feedbackShale.jpg';
import feedBackVilla from '../../assets/images/feedback/feedbackVilla.jpg';
import firstBlockImg from './img/firstBlockImg.png';
import secondBlockImg from './img/secondBlockImg.png';
import UserCards from '../UserCards/UserCards';
import {
  SearchHousesDOM,
  SearchHousesGostinicy,
  SearchHousesHostel,
  SearchHousesKomnaty,
  SearchHousesKvartiry,
  SearchHousesLocation,
} from './SearchHouses';
import { UserCatalogBookingOptionsList } from 'components/Common/Header/Subheaders';
import { Footer } from 'components/Common/Footer';
import { Reviews } from 'components/Common/Reviews';

const feedBackBg = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return feedBack;
    case KVARTIRY:
      return feedBackKvartiry;
    case KVARTIRY1:
      return feedBackKvartiry1;
    case KVARTIRY2:
      return feedBackKvartiry2;
    case KVARTIRY3:
      return feedBackKvartiry3;
    case KVARTIRY4:
      return feedBackKvartiry4;
    case DOM:
      return feedBackDOM;
    case SHALE:
      return feedBackShale;
    case VILLA:
      return feedBackVilla;
    case TINY_DOM:
      return feedBackTinyDOM;
    case HOLIDAY_DOM:
      return feedBackHolidayDom;
    case KOMNATA:
      return feedBackKomnaty;
    case HOSTEL:
      return feedBackHostel;
    case GOSTINICY:
      return feedBackGostinicy;
    case HOTEL:
      return feedBackHotel;
    case MOTEL:
      return feedBackMotel;
    case APART_HOTEL:
      return feedBackApart;
    case KURORT_HOTEL:
      return feedBackKurortHotel;
    case GUEST_HOUSE:
      return feedBackGuestHouse;
    case CAPSULE_HOTEL:
      return feedBackCapsuleHotel;
    default:
      throw new Error('this url not exists!');
  }
};

const searchHouses = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return <SearchHousesLocation />;
    case KVARTIRY:
      return <SearchHousesKvartiry />;
    case KVARTIRY1:
      return <SearchHousesKvartiry />;
    case KVARTIRY2:
      return <SearchHousesKvartiry />;
    case KVARTIRY3:
      return <SearchHousesKvartiry />;
    case KVARTIRY4:
      return <SearchHousesKvartiry />;
    case DOM:
      return <SearchHousesDOM />;
    case SHALE:
      return <SearchHousesDOM />;
    case VILLA:
      return <SearchHousesDOM />;
    case TINY_DOM:
      return <SearchHousesDOM />;
    case HOLIDAY_DOM:
      return <SearchHousesDOM />;
    case KOMNATA:
      return <SearchHousesKomnaty />;
    case HOSTEL:
      return <SearchHousesHostel />;
    case GOSTINICY:
      return <SearchHousesGostinicy />;
    case HOTEL:
      return <SearchHousesGostinicy />;
    case MOTEL:
      return <SearchHousesGostinicy />;
    case APART_HOTEL:
      return <SearchHousesGostinicy />;
    case KURORT_HOTEL:
      return <SearchHousesGostinicy />;
    case GUEST_HOUSE:
      return <SearchHousesGostinicy />;
    case CAPSULE_HOTEL:
      return <SearchHousesGostinicy />;
    default:
      throw new Error('this url not exists!');
  }
};

const bookingCur = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return 'Все варианты бронирования';
    // case SEARCH_LOCATION:
    //   return 'Все варианты бронирования';
    case KVARTIRY:
      return 'Квартиры посуточно';
    case KVARTIRY1:
      return '1 комнатные квартиры посуточно';
    case KVARTIRY2:
      return '2 х комнатные квартиры посуточно';
    case KVARTIRY3:
      return '3 х комнатные квартиры посуточно';
    case KVARTIRY4:
      return '4 и 4+ комнатные квартиры посуточно';
    case DOM:
      return 'Дома посуточно';
    case SHALE:
      return 'Шале посуточно';
    case VILLA:
      return 'Вилла посуточно';
    case TINY_DOM:
      return 'Небольшой дом посуточно';
    case HOLIDAY_DOM:
      return 'Дома для отпуска';
    case KOMNATA:
      return 'Комнаты посуточно';
    case HOSTEL:
      return 'Хостелы';
    case GOSTINICY:
      return 'Гостиницы';
    case HOTEL:
      return 'Отели';
    case MOTEL:
      return 'Мотели';
    case APART_HOTEL:
      return 'Апарт–отели';
    case KURORT_HOTEL:
      return 'Курортные отели';
    case GUEST_HOUSE:
      return 'Guest Houses';
    case CAPSULE_HOTEL:
      return 'Capsule Hotels';
    default:
      throw new Error('this url not exists!');
  }
};

const seoUpperText = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return 'Забронировать номер в гостинице';
    // case SEARCH_LOCATION:
    //   return 'Все варианты бронирования';
    case KVARTIRY:
      return 'Снять квартиру посуточно';
    case KVARTIRY1:
      return 'Снять 1 ком. квартиру посуточно ';
    case KVARTIRY2:
      return 'Снять 2 ком. квартиру посуточно ';
    case KVARTIRY3:
      return 'Снять 3 ком. квартиру посуточно';
    case KVARTIRY4:
      return 'Снять 4 ком. квартиру посуточно ';
    case DOM:
      return 'Арендовать дом посуточно';
    case SHALE:
      return 'Снять шале посуточно';
    case VILLA:
      return 'Снять виллу посуточно';
    case TINY_DOM:
      return 'Арендовать небольшой дом посуточно';
    case HOLIDAY_DOM:
      return 'Снять дом для отпуска';
    case KOMNATA:
      return 'Забронировать комнату посуточно';
    case HOSTEL:
      return 'Забронировать место в хостеле';
    case GOSTINICY:
      return 'Снять номер в гостнице ';
    case HOTEL:
      return 'Снять номер в отеле ';
    case MOTEL:
      return 'Снять номер в мотеле';
    case APART_HOTEL:
      return 'Снять номер в апарт-отеле';
    case KURORT_HOTEL:
      return 'Забронировать номер в курортном отеле';
    case GUEST_HOUSE:
      return 'Забронировать номер в Guest Houses';
    case CAPSULE_HOTEL:
      return 'Забронировать место в капсульном отеле';
    default:
      throw new Error('this url not exists!');
  }
};

const seoLowerText = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return 'Отели, апартаменты, комнаты ...';
    // case SEARCH_LOCATION:
    //   return 'Все варианты бронирования';
    case KVARTIRY:
      return 'Посуточная аренда квартир';
    case KVARTIRY1:
      return 'Посуточная аренда 1-ком. квартиры';
    case KVARTIRY2:
      return 'Посуточная аренда 2-ком. квартиры';
    case KVARTIRY3:
      return 'Посуточная аренда 3-ком. квартиры';
    case KVARTIRY4:
      return 'Посуточная аренда 4-ком. квартиры';
    case DOM:
      return 'Снять дом посуточно';
    case SHALE:
      return 'Арендовать шале';
    case VILLA:
      return 'Арендовать виллу';
    case TINY_DOM:
      return 'Снять дом посуточно';
    case HOLIDAY_DOM:
      return 'Арендовать дом для отпуска';
    case KOMNATA:
      return 'Варианты комнат посуточно';
    case HOSTEL:
      return 'Много хостелов на нашем сайте';
    case GOSTINICY:
      return 'Пожить в гостинице для себя';
    case HOTEL:
      return 'Пожить в отеле с любимой';
    case MOTEL:
      return 'Мотели для пар и не только';
    case APART_HOTEL:
      return 'Апарт-отель часто это дешевле отеля';
    case KURORT_HOTEL:
      return 'Отдых: на море, на природе, в горах';
    case GUEST_HOUSE:
      return 'Любимый тип жилья художников';
    case CAPSULE_HOTEL:
      return 'Прорсторная капсула лучше узкой';
    default:
      throw new Error('this url not exists!');
  }
};

const seoText = pathname => {
  switch (pathname) {
    case USER_CATALOG:
      return 'Аренда жилья посуточно';
    // case SEARCH_LOCATION:
    //   return 'Все варианты бронирования';
    case KVARTIRY:
      return 'Аренда квартиры на выходные';
    case KVARTIRY1:
      return 'Аренда 1 ком. квартиры на выходные';
    case KVARTIRY2:
      return 'Аренда 2 ком. квартиры на выходные';
    case KVARTIRY3:
      return 'Аренда 3 ком. квартиры на выходные';
    case KVARTIRY4:
      return 'Аренда 4 ком. квартиры на выходные';
    case DOM:
      return 'Аренда дома на выходные';
    case SHALE:
      return 'Аренда шале на выходные';
    case VILLA:
      return 'Аренда виллы на выходные';
    case TINY_DOM:
      return 'Аренда дома на выходные';
    case HOLIDAY_DOM:
      return 'Дом для отпуска на выходные';
    case KOMNATA:
      return 'Аренда комнаты на выходные';
    case HOSTEL:
      return 'Проживание в хостеле';
    case GOSTINICY:
      return 'Аренда номера в гостинице';
    case HOTEL:
      return 'Аренда номера на выходные';
    case MOTEL:
      return 'Аренда номера на выходные';
    case APART_HOTEL:
      return 'Аренда номера на выходные';
    case KURORT_HOTEL:
      return 'Аренда номера на выходные';
    case GUEST_HOUSE:
      return 'Аренда гест хауза на выходные';
    case CAPSULE_HOTEL:
      return 'Аренда номера в Capsule Hotels';
    default:
      throw new Error('this url not exists!');
  }
};

const Location = () => {
  const { pathname } = useLocation();

  const bg = feedBackBg(pathname);

  const searchLink = searchHouses(pathname);
  const bookingStr = bookingCur(pathname);
  const UpperText = seoUpperText(pathname);
  const LowerText = seoLowerText(pathname);
  const seoTxt = seoText(pathname);

  return (
    <div className="location__backdrop">
      <section className="location__hero"></section>
      <div className="location__container">
        <section className="location__content">
          <div className="location__content-left">
            <div className="location__content-left__search">
              {searchLink}
              {pathname === USER_CATALOG ? (
                ''
              ) : (
                <div>
                  <button className="location__content-left__search-button left-btn">Узнать цены</button>
                  <button className="location__content-left__search-button right-btn">Забронировать</button>
                </div>
              )}
            </div>

            <ul className="location__content-left__list">
              <li>
                <UserCards />
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
            </ul>
            <div className="location__content-left__seo">
              <div className="seo_block_upper">
                <div className="seo_block_upper_text">
                  <p style={{ marginTop: '0' }}>{UpperText}</p>
                  <p style={{ fontWeight: '900', fontSize: '22px' }}>Киев</p>
                  <p>{seoTxt}</p>
                </div>
                <div className="seo_block_upper_img">
                  <img src={firstBlockImg} alt="two speech bubbles" />
                </div>
              </div>
              <div className="seo_block_lower">
                <div>
                  <button className="seo_block_lower_btn">Забронировать</button>
                </div>
                <div className="seo_block_lower_text">{LowerText}</div>
              </div>
            </div>
            <ul className="location__content-left__list2">
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
            </ul>
            <div className="location__content-left__seo">
              <div className="seo_block_upper">
                <div className="seo_block_upper_text">
                  <p style={{ marginTop: '0' }}>Общайтесь с отельерами напрямую</p>
                  <p style={{ fontWeight: '900', fontSize: '22px' }}>Киев</p>
                  <p>Предлагайте свою цену</p>
                </div>
                <div className="seo_block_upper_img">
                  <img src={secondBlockImg} alt="two speech bubbles" />
                </div>
              </div>
              <div className="seo_block_lower">
                <div>
                  <button className="seo_block_lower_btn_2">Предложить свою цену</button>
                </div>
                <div className="seo_block_lower_text_2">{bookingStr}</div>
              </div>
            </div>
            <ul className="location__content-left__list2">
              {/* <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li> */}
              {/* <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li> */}
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
              <li className="location__content-left__item">
                <div className="location__content-left__card"></div>
              </li>
            </ul>
          </div>

          <div className="location__content-right">
            <Reviews bg={bg} />

            <div className="location__content-right__bron">
              <div className="list-cont">
                <UserCatalogBookingOptionsList />
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
