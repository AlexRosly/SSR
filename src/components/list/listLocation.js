import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeEntity } from 'utils';

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
  MOTEL,
  SHALE,
  TINY_DOM,
  USER_CATALOG,
  VILLA,
} from 'navigation/CONSTANTS';

import '../../styles/common/_listLocation.scss';

const getActive = ({ isActive }) => `link ${isActive ? 'text-active' : ''}`;

const locationsArr = [
  { to: GOSTINICY, text: 'Гостиницы', i18key: '' },
  { to: KVARTIRY, text: 'Квартиры посуточно', i18key: '' },
  { to: HOSTEL, text: 'Хостелы', i18key: '' },
  { to: CAPSULE_HOTEL, text: 'Capsule Hotels', i18key: '' },
  { to: GUEST_HOUSE, text: 'Guest Houses', i18key: '' },
  { to: KOMNATA, text: 'Комнаты посуточно', i18key: '' },
  { to: KVARTIRY1, text: '1 комнатные квартиры посуточно', i18key: '' },
  { to: KVARTIRY2, text: '2 х комнатные квартиры посуточно', i18key: '' },
  { to: KVARTIRY3, text: '3 х комнатные квартиры посуточно', i18key: '' },
  { to: KVARTIRY4, text: '4 и 4+ комнатные квартиры посуточно', i18key: '' },
  { to: HOTEL, text: 'Отели', i18key: '' },
  { to: APART_HOTEL, text: 'Апарт - отели', i18key: '' },
  { to: MOTEL, text: 'Мотели', i18key: '' },
  { to: KURORT_HOTEL, text: 'Курортные отели', i18key: '' },
  { to: HOLIDAY_DOM, text: 'Дома для отпуска', i18key: '' },
  { to: DOM, text: 'Дома посуточно', i18key: '' },
  { to: TINY_DOM, text: 'Небольшой дом посуточно', i18key: '' },
  { to: VILLA, text: 'Вилла посуточно', i18key: '' },
  { to: SHALE, text: 'Шале посуточно', i18key: '' },
  { to: USER_CATALOG, text: 'Все варианты бронирования', i18key: '' },
  //
];

const locationsLinks = Object.freeze(makeEntity(locationsArr));

const LocationLinks = ({ city }) => {
  const [links] = useState(locationsLinks);

  return (
    <ul className="list-bl-location ">
      {links.ids.map(id => {
        const item = links.entities[id];
        if (!item) return null;

        const { to, text } = item;

        return (
          <li className="list-location list-for-all">
            <NavLink href={to} className={getActive}>
              {text} {city}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export const ListLocation = () => {
  const [city, setCity] = useState('Киев');

  const changeHandler = event => {
    setCity(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="enter city name for test "
        type="text"
        name="city name"
        className="test-name"
        value={city}
        onChange={changeHandler}
      />

      <div className="cont-location ">
        <div className="list-cont">
          <LocationLinks city={city} />
        </div>
      </div>
    </div>
  );
};
