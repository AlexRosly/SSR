import { useState } from 'react';
import ls from './LocationSearch.module.scss';
// import LocationVector from '../../assets/images/location/VectorLocation .svg'

const arrLocation = [
  {
    location: 'Киев',
    region: 'Киевская область',
    country: 'Украина',
  },
  {
    location: 'Киев центр',
    region: 'Киевская область',
    country: 'Украина',
  },
  {
    location: 'Киев Подол',
    region: 'Киевская область',
    country: 'Украина',
  },
  {
    location: 'Киев ЖД',
    region: 'Киевская область',
    country: 'Украина',
  },
  {
    location: 'Киев Жуляны',
    region: 'Киевская область',
    country: 'Украина',
  },
  {
    location: 'Город Нью-Йорк',
    region: 'штат Нью-Йорк',
    country: 'США',
  },

  {
    location: 'Город Нью-Йорк Бронкс',
    region: 'штат Нью-Йорк',
    country: 'США',
  },

  {
    location: 'Город Нью-Йорк нижний Манхеттен',
    region: 'штат Нью-Йорк',
    country: 'США',
  },

  {
    location: 'Город Нью-Йорк Гарлем',
    region: 'штат Нью-Йорк',
    country: 'США',
  },
  {
    location: 'Город Нью-Йорк Бруклин',
    region: 'штат Нью-Йорк',
    country: 'США',
  },

  {
    location: 'Варшава',
    region: 'Мазоветское Воеводство',
    country: 'Польша',
  },
  {
    location: 'Варшава Мокотов',
    region: 'Мазоветское Воеводство',
    country: 'Польща',
  },
  {
    location: 'Варшава Кабаты',
    region: 'Мазоветское Воеводство',
    country: 'Польща',
  },
];

export const LocationSearch = ({ onChangeValue }) => {
  const [search, setSearch] = useState(arrLocation);
  const codeTouch = () => {
    setSearch(arrLocation);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  // const box = document.querySelector(ls.container_location_country)
  // console.log(box, 'selector')

  // const boxid = document.getElementById('qwer')
  // console.log(boxid, 'get by id')
  const LocationSearch = e => {
    const res = arrLocation.filter(
      value =>
        value.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        value.region.toLowerCase().includes(e.target.value.toLowerCase()) ||
        value.country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(res);
  };
  const selectLoc = (el, item) => {
    el.stopPropagation();
    onChangeValue(item);
  };

  const locList = search.map((item, index) => {
    return (
      <li className={ls.location__body_li} onClick={e => selectLoc(e, item)} key={index} value={item.location}>
        <div className={ls.block_span_text}>
          <span className={ls.location_text_list_style}> {item.location}</span>

          <span className={ls.region_text_list_style}>{item.region}</span>

          <span className={ls.country_text_list_style}>{item.country}</span>
        </div>

        {/* <svg className="point-location-icon ">
          <use href={`${LocationVector}#locationIcon`}></use>
        </svg> */}
      </li>
    );
  });
  return (
    <div>
      <div className={ls.container_location_country}>
        <div className={ls.location__body}>
          <div className={ls.location__body_block}>
            <div className={ls.body_block_input}>
              <input
                type="text/html"
                maxLength="45"
                onChange={LocationSearch}
                className={ls.block_input_loc}
                onSubmit={handleSubmit}
                onClick={codeTouch}
              />
            </div>
            <div className={ls.location__container_ul}>
              <ul className={ls.location__body_ul}> {locList}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
