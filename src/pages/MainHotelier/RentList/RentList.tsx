import type { MainHotelierRentLinksTranslationKeys, Mode } from 'types';
import type { EntityState } from '@reduxjs/toolkit';
import { useCallback, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  // hotelier
  KVARTIRY_CATALOG,
  APART_HOTEL_CATALOG,
  DOM_CATALOG,
  GOSTINICY_CATALOG,
  HOTEL_CATALOG,
  HOSTEL_CATALOG,
  KOMNATA_CATALOG,
  KOMNATA_DOM_CATALOG,
  GUEST_HOUSE_CATALOG,
  CAPSULE_HOTEL_CATALOG,
  MOTEL_CATALOG,
  HOTELIER_CATALOG,
} from 'navigation/CONSTANTS';
import { makeEntity } from 'utils';
import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import { selectActiveSearchId, selectSearchTerm } from 'features/search';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import { IconHeader } from 'components/Common/Header/Components/IconHeader';

import s from './RentList.module.scss';
type TRentLink = { to: string; i18key: MainHotelierRentLinksTranslationKeys };

const rentLinksArr: TRentLink[] = [
  { to: KVARTIRY_CATALOG, i18key: 'rentAFlatDaily' },
  { to: APART_HOTEL_CATALOG, i18key: 'rentAnApartmentDaily' },
  { to: DOM_CATALOG, i18key: 'rentAHouseDaily' },
  { to: GOSTINICY_CATALOG, i18key: 'rentAHotelRoomInHotelOfAllTypes' },
  { to: HOTEL_CATALOG, i18key: 'rentAHotelRoomDaily' },
  { to: HOSTEL_CATALOG, i18key: 'rentAPlaceInAHostel' },
  { to: KOMNATA_CATALOG, i18key: 'rentARoomInAFlatDaily' },
  { to: KOMNATA_DOM_CATALOG, i18key: 'rentARoomInAHouseDaily' },
  { to: GUEST_HOUSE_CATALOG, i18key: 'rentARoomInGuestHouse' },
  { to: CAPSULE_HOTEL_CATALOG, i18key: 'rentARoomInCapsuleHotel' },
  { to: MOTEL_CATALOG, i18key: 'rentAMotelRoom' },
  { to: HOTELIER_CATALOG, i18key: 'rentOutHousingDaily' },
];

export const rentLinks = Object.freeze(makeEntity(rentLinksArr, 'to'));

type UseRentListProps = {
  rentLinks: EntityState<TRentLink>;
  mode?: Mode;
  closeDrawer?: () => void;
};

const useRentList = ({ rentLinks, mode, closeDrawer }: UseRentListProps) => {
  const { pathname } = useLocation();

  const onClickCloseDrawer = useCallback(() => {
    if (!closeDrawer) return;
    closeDrawer();
  }, [closeDrawer]);

  const [links] = useState(rentLinks);

  const dark = mode === 'dark' ? s.dark : '';

  const listClassName = `${s.rentList} ${dark}`;
  const itemClassName = `${s.rentOptionItem} ${dark}`;
  const iconClassName = `${s.activeRentOptionIcon} ${dark}`;

  return useMemo(
    () => ({ links, onClickCloseDrawer, pathname, listClassName, itemClassName, iconClassName, dark }),
    [links, onClickCloseDrawer, pathname, listClassName, itemClassName, iconClassName, dark]
  );
};

type RentListProps = {
  mode?: Mode;
  closeDrawer?: () => void;
};

export const RentListMainHotelier = ({ mode, closeDrawer }: RentListProps) => {
  const { t } = useTranslation('mainHotelier');

  const { links, onClickCloseDrawer, pathname, listClassName, itemClassName, iconClassName, dark } = useRentList({
    rentLinks,
    mode,
    closeDrawer,
  });

  return (
    <ul className={listClassName}>
      {links.ids.map(id => {
        const item = links.entities[id];
        if (!item) return null;
        const { to, i18key } = item;
        let text = '';

        text = t(i18key);

        return (
          <li key={id} className={itemClassName}>
            {pathname === to && <IconHeader iconId="two-arrows-up-overlap" className={iconClassName} />}

            <NavLink
              to={to}
              className={({ isActive }) => `${s.rentLink} ${isActive ? s.active : ''} ${dark}`}
              onClick={onClickCloseDrawer}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export const RentListHotelierCatalog = ({ mode, closeDrawer }: RentListProps) => {
  const { t } = useTranslation('mainHotelier');

  const { links, onClickCloseDrawer, pathname, listClassName, itemClassName, iconClassName, dark } = useRentList({
    rentLinks,
    mode,
    closeDrawer,
  });

  const activeSearchId = useAppSelector(selectActiveSearchId);
  const search = useAppSelector(selectSearchTerm);
  const lang = useAppSelector(selectActiveLang);

  // TODO: replace api from `/api/autocomplete` to `api/search`
  const { cityName } = useGetAutocompleteQuery(
    { search, lang },
    {
      selectFromResult: ({ data }) => ({
        cityName: data?.entities?.[activeSearchId]?.cityName ?? null,
      }),
      skip: !search || !activeSearchId,
    }
  );

  return (
    <ul className={listClassName}>
      {links.ids.map(id => {
        const item = links.entities[id];
        if (!item) return null;
        const { to, i18key } = item;
        const text = t(i18key);

        return (
          <li key={id} className={itemClassName}>
            {pathname === to && <IconHeader iconId="two-arrows-up-overlap" className={iconClassName} />}

            <NavLink
              to={to}
              className={({ isActive }) => `${s.rentLink} ${isActive ? s.active : ''} ${dark}`}
              onClick={onClickCloseDrawer}
            >
              {text} {cityName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
