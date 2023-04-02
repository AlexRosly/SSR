import type { Mode, UserCatalogBookingOptionsTranslationKeys } from 'types';
import { useState, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'hooks/UI';
import { makeEntity } from 'utils';
import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import { selectActiveSearchId, selectSearchTerm } from 'features/search';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import {
  // user
  KVARTIRY,
  KVARTIRY1,
  KVARTIRY2,
  KVARTIRY3,
  KVARTIRY4,
  TINY_DOM,
  DOM,
  SHALE,
  VILLA,
  KOMNATA,
  HOSTEL,
  GOSTINICY,
  HOTEL,
  MOTEL,
  APART_HOTEL,
  KURORT_HOTEL,
  GUEST_HOUSE,
  CAPSULE_HOTEL,
  USER_CATALOG,
} from 'navigation/CONSTANTS';

import { IconHeader } from '../../Components/IconHeader';
import { LocationCard } from '../SubheaderHotelierCatalog';
import { SearchBar } from '../SubheaderHotelierCatalog/SearchBar';

import scss from './SubheaderUserCatalog.module.scss';

type TBookingOptionLink = { to: string; i18nKey: UserCatalogBookingOptionsTranslationKeys };

const bookingOptionLinksArr: TBookingOptionLink[] = [
  { to: GOSTINICY, i18nKey: 'hotels' },
  { to: HOSTEL, i18nKey: 'hostels' },
  { to: DOM, i18nKey: 'housesDaily' },
  { to: KOMNATA, i18nKey: 'roomsDaily' },
  { to: KVARTIRY, i18nKey: 'apartmentsDaily' },

  { to: KVARTIRY1, i18nKey: '1roomApartmentsDaily' },
  { to: KVARTIRY2, i18nKey: '2roomApartmentsDaily' },
  { to: KVARTIRY3, i18nKey: '3roomApartmentsDaily' },
  { to: KVARTIRY4, i18nKey: '4roomApartmentsDaily' },
  { to: HOTEL, i18nKey: 'accommodation' },

  { to: MOTEL, i18nKey: 'motels' },
  { to: KURORT_HOTEL, i18nKey: 'resortHotels' },
  { to: GUEST_HOUSE, i18nKey: 'guestHouses' },
  { to: CAPSULE_HOTEL, i18nKey: 'capsuleHotels' },
  { to: APART_HOTEL, i18nKey: 'apartHotels' },

  { to: TINY_DOM, i18nKey: 'smallHouseDaily' },
  { to: VILLA, i18nKey: 'villaDaily' },
  { to: SHALE, i18nKey: 'chaletDaily' },
  { to: USER_CATALOG, i18nKey: 'allBookingOptions' },
];

export const userCatalogBookingOptionsLinks = Object.freeze(makeEntity(bookingOptionLinksArr, 'to'));

type UserCatalogBookingOptionsListProps = { mode?: Mode; closeDrawer?: () => void };

export const UserCatalogBookingOptionsList = ({ mode, closeDrawer }: UserCatalogBookingOptionsListProps) => {
  const { t } = useTranslation('userCatalog');

  const activeSearchId = useAppSelector(selectActiveSearchId);
  const search = useAppSelector(selectSearchTerm);
  const lang = useAppSelector(selectActiveLang);

  const { pathname } = useLocation();

  const [userCatalogLinks] = useState(userCatalogBookingOptionsLinks);

  const onClickCloseDrawer = useCallback(() => {
    if (!closeDrawer) return;
    closeDrawer();
  }, [closeDrawer]);

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

  const dark = mode === 'dark' ? scss.dark : '';

  const listClassName = `${scss.bookingOptionList} ${dark}`;
  const itemClassName = `${scss.bookingOptionItem} ${dark}`;
  const iconClassName = `${scss.activeBookingOptionIcon} ${dark}`;

  return (
    <ul className={listClassName}>
      {userCatalogLinks.ids.map(id => {
        const item = userCatalogLinks.entities[id];
        if (!item) return null;
        const { to, i18nKey } = item;
        const text = t(i18nKey);

        return (
          <li key={id} className={itemClassName}>
            {pathname === to && <IconHeader iconId="two-arrows-up-overlap" className={iconClassName} />}

            <NavLink
              to={to}
              className={({ isActive }) => `${scss.bookingOptionLink} ${isActive ? scss.active : ''} ${dark}`}
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

const useActiveBookingOption = () => {
  const { t } = useTranslation('userCatalog');
  const { pathname } = useLocation();

  if (userCatalogBookingOptionsLinks.ids.includes(pathname)) {
    const item = userCatalogBookingOptionsLinks.entities?.[pathname];
    if (!item) return '';
    return t(item.i18nKey);
  }

  return '';
};

const UserBookingOptionText = () => {
  const activeBookingOption = useActiveBookingOption();
  return <p className={scss.bookingOption}>{activeBookingOption}</p>;
};

/** UserCatalog
 *  @see USER_CATALOG '/user-catalog'
 * 1. userType - subheader
 * 2. NO BODY  - Us Catalog
 * 3. User     - Us Catalog
 * 4. Hotelier - Us Catalog
 * 5. Agent    - Us Catalog
 */
export const SubheaderUserCatalog = () => {
  const { isMobile } = useMedia();

  return (
    <div className={scss.subheaderUserCatalog}>
      {!isMobile && <SearchBar />}

      <LocationCard>
        <UserBookingOptionText />
      </LocationCard>
    </div>
  );
};
