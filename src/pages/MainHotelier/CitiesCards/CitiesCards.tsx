import type { EntityId } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HOTELIER_CATALOG } from 'navigation/CONSTANTS';
import { useAppDispatch, useAppSelector } from 'features';
import { chooseActiveLocation, selectLocalSearchObjectById, selectLocalSearchObjectsIds } from 'features/search';

import bed_1 from 'assets/images/pages/MainHotelier/bed_1.png';
import bed_2 from 'assets/images/pages/MainHotelier/bed_2.png';

import s from './CitiesCards.module.scss';

type CityProps = {
  objectId: EntityId;
  onCityCardClick: (objectId: EntityId) => void;
};

const BedIcon = ({ count = 1 }: { count?: number }) => {
  switch (count) {
    case 1:
      return (
        <div className={s.imgs_wrap}>
          <img src={bed_2} alt="" />
        </div>
      );

    case 2:
      return (
        <div className={s.imgs_wrap}>
          <img src={bed_2} alt="" />
          <img src={bed_2} alt="" />
        </div>
      );

    default:
      return null;
  }
};

const CityCard = ({ objectId, onCityCardClick }: CityProps) => {
  const { t } = useTranslation('mainHotelier');

  const item = useAppSelector(state => selectLocalSearchObjectById(state, objectId));

  if (!item) return null;
  const { i18nCity, i18nCountry, localImg } = item;

  const city = t(i18nCity);
  const country = t(i18nCountry);
  const placeInTheHostel = t('placeInTheHostel');
  const alt = `${city}, ${country}`;

  return (
    <li className={s.cityCardItem}>
      <Link to={HOTELIER_CATALOG} className={s.cityCardLink} onClick={() => onCityCardClick(objectId)}>
        {city}
      </Link>

      <span className={s.country}>{country}</span>

      <div>
        <img src={localImg} alt={alt} title={alt} />
      </div>

      <div className={s.block_four_items_4}>
        <div className={s.block_four_items_4_column}>
          <BedIcon />

          <p className={s.overlay}>{t('averagePriceForOneBedroomOption')}</p>
          {/* <span className={s.block_four_items_4_column_text}>10 USD</span> */}
        </div>

        <div className={s.block_four_items_4_column}>
          <BedIcon count={2} />

          <p className={s.overlay}>{t('averagePriceForWwoBedroomOption')}</p>
          {/* <span className={s.block_four_items_4_column_text}>15 USD</span> */}
        </div>

        <div className={s.block_four_items_4_column}>
          <div className={s.imgs_wrap}>
            <img src={bed_1} alt="" />
            <span className={s.block_four_items_4_column_img_place}>{placeInTheHostel}</span>
          </div>

          <p className={s.overlay}>{t('averagePriceForBedInAHostel')}</p>
          {/* <span className={s.block_four_items_4_column_text}>5 USD</span> */}
        </div>
      </div>
    </li>
  );
};

export const CitiesCards = () => {
  const localSearchObjectsIds = useAppSelector(selectLocalSearchObjectsIds);
  const appDispatch = useAppDispatch();

  const onCityCardClick = useCallback(
    (cityId: EntityId) => {
      appDispatch(chooseActiveLocation(cityId));
    },
    [appDispatch]
  );

  return (
    <ul className={s.citiesCards}>
      {localSearchObjectsIds.map(objectId => (
        <CityCard key={objectId} objectId={objectId} onCityCardClick={onCityCardClick} />
      ))}
    </ul>
  );
};
