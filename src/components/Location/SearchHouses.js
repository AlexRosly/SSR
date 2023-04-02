import { USER_CATALOG } from 'navigation/CONSTANTS';
import { useState } from 'react';
import searchBtn from '../../assets/images/location/locationSearchBtn.svg';

export const SearchHousesLocation = () => {
  const [click, setClick] = useState('');
  const tempUrl = document.location.pathname;
  return (
    <ul
      className={
        tempUrl === USER_CATALOG
          ? 'location__content-left__search-input_LOCATION'
          : 'location__content-left__search-input'
      }
    >
      <li className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('HOTEL')}
          // href={HOTEL}
          className={
            click === 'HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Отели
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'MOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('MOTEL')}
          // href={MOTEL}
          className={
            click === 'MOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Мотели
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KURORT_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('KURORT_HOTEL')}
          className={
            click === 'KURORT_HOTEL'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Курор-тные <br />
          отели
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'GUEST_HOUSE' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={GUEST_HOUSE}
          onClick={() => setClick('GUEST_HOUSE')}
          className={
            click === 'GUEST_HOUSE' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Guest Houses
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'CAPSULE_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={CAPSULE_HOTEL}
          onClick={() => setClick('CAPSULE_HOTEL')}
          className={
            click === 'CAPSULE_HOTEL'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Capsule Hotels
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'APART_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={APART_HOTEL}
          onClick={() => setClick('APART_HOTEL')}
          className={
            click === 'APART_HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Апарт-отели
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KVARTIRY' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KVARTIRY}
          onClick={() => setClick('KVARTIRY')}
          className={
            click === 'KVARTIRY' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Квар-тиры
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'DOM' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={DOM}
          onClick={() => setClick('DOM')}
          className={
            click === 'DOM' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Дома
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'HOSTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={HOSTEL}
          onClick={() => setClick('HOSTEL')}
          className={
            click === 'HOSTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Хос-телы
        </button>
      </li>

      <li className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={HOSTEL}
          onClick={() => setClick('KOMNATY')}
          className={
            click === 'KOMNATY' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Ком-наты
        </button>
      </li>
    </ul>
  );
};

export const SearchHousesDOM = () => {
  const [click, setClick] = useState('');
  return (
    <div className="location__content-left__search-input houses_dom">
      <div className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'TINY_DOM' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('TINY_DOM')}
          // href={HOTEL}
          className={
            click === 'TINY_DOM' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Небо-льшой дом
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'VILLA' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('VILLA')}
          // href={MOTEL}
          className={
            click === 'VILLA' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Вилла
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'SHALE' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('SHALE')}
          className={
            click === 'SHALE' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Шале
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'HOLIDAY_DOM' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('HOLIDAY_DOM')}
          className={
            click === 'HOLIDAY_DOM' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Дом
          <br />
          для
          <br />
          отпуска
          <br />
        </button>
      </div>
    </div>
  );
};

export const SearchHousesGostinicy = () => {
  const [click, setClick] = useState('');
  return (
    <div className="location__content-left__search-input houses_gostinicy">
      <div className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('HOTEL')}
          // href={HOTEL}
          className={
            click === 'HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Отели
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'MOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('MOTEL')}
          // href={MOTEL}
          className={
            click === 'MOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Мотели
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KURORT_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('KURORT_HOTEL')}
          className={
            click === 'KURORT_HOTEL'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Курор-тные <br />
          отели
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'GUEST_HOUSES' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('GUEST_HOUSES')}
          className={
            click === 'GUEST_HOUSES'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Guest Houses
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'CAPSULE_HOTELS' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('CAPSULE_HOTELS')}
          className={
            click === 'CAPSULE_HOTELS'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Capsule Hotels
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'APART_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('APART_HOTEL')}
          className={
            click === 'APART_HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Апарт-отели
        </button>
      </div>
    </div>
  );
};

export const SearchHousesKomnaty = () => {
  const [click, setClick] = useState('');
  return (
    <div className="location__content-left__search-input houses_komnaty">
      <div className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATA_DOM' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('KOMNATA_DOM')}
          // href={HOTEL}
          className={
            click === 'KOMNATA_DOM' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Комна-та в<br /> доме
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATA_KVARTIRA' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('KOMNATA_KVARTIRA')}
          // href={MOTEL}
          className={
            click === 'KOMNATA_KVARTIRA'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Комна-та в ква ртире
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'CAPSULE_HOTELS' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('CAPSULE_HOTELS')}
          className={
            click === 'CAPSULE_HOTELS'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Capsule Hotels
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'APART_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('APART_HOTEL')}
          className={
            click === 'APART_HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Апарт-отели
        </button>
      </div>
    </div>
  );
};

export const SearchHousesHostel = () => {
  const [click, setClick] = useState('');
  return (
    <div className="location__content-left__search-input houses_hostel">
      <div className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'HOSTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('HOSTEL')}
          // href={HOTEL}
          className={
            click === 'HOSTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Хос-телы
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('KOMNATY')}
          // href={MOTEL}
          className={
            click === 'KOMNATY' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Ком-наты
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'GUEST_HOUSES' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('GUEST_HOUSES')}
          className={
            click === 'GUEST_HOUSES'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Guest Houses
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'CAPSULE_HOTELS' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('CAPSULE_HOTELS')}
          className={
            click === 'CAPSULE_HOTELS'
              ? 'location_content-left__search-link active'
              : 'location_content-left__search-link'
          }
        >
          Capsule Hotels
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'APART_HOTEL' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('APART_HOTEL')}
          className={
            click === 'APART_HOTEL' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          Апарт-отели
        </button>
      </div>
    </div>
  );
};

export const SearchHousesKvartiry = () => {
  const [click, setClick] = useState('');
  return (
    <div className="location__content-left__search-input houses_kvartiry">
      <div className="location_content-left__search-img_wrap">
        <img src={searchBtn} className="location_content-left__search-img" alt="filter" />
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY1' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          onClick={() => setClick('KOMNATY1')}
          // href={HOTEL}
          className={
            click === 'KOMNATY1' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          <p className="location_content-left__search-link_text">
            1<br />
            комна-тные
          </p>
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY2' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('KOMNATY2')}
          className={
            click === 'KOMNATY2' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          <p className="location_content-left__search-link_text">
            2<br />
            комна-тные
          </p>
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY3' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('KOMNATY3')}
          className={
            click === 'KOMNATY3' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          <p className="location_content-left__search-link_text">
            3<br />
            комна-тные
          </p>
        </button>
      </div>
      <div className="location_content-left__search-link_wrap">
        <div className="location_content-left__search-link_prompt">
          {click === 'KOMNATY4' ? 'показаны на странице' : 'не показаны на странице'}
        </div>
        <button
          // href={KURORT_HOTEL}
          onClick={() => setClick('KOMNATY4')}
          className={
            click === 'KOMNATY4' ? 'location_content-left__search-link active' : 'location_content-left__search-link'
          }
        >
          <p className="location_content-left__search-link_text">
            4<br />
            комна-тные
          </p>
        </button>
      </div>
    </div>
  );
};
