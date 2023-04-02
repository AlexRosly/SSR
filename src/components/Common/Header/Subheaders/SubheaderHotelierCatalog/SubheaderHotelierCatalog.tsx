import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEARCH_LOCATION } from 'navigation/CONSTANTS';
import { useMedia } from 'hooks/UI';
import { selectActiveLang } from 'features/common';
import { useAppSelector } from 'features/hooks';
import { selectActiveSearchId, selectLocalActiveObject, selectSearchTerm } from 'features/search';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import { SearchBar } from './SearchBar';

import scss from './SubheaderHotelierCatalog.module.scss';
import { rentLinks } from 'pages/MainHotelier/RentList';

export const useActiveRentOption = () => {
  const { t } = useTranslation('mainHotelier');
  const { pathname } = useLocation();

  if (rentLinks.ids.includes(pathname)) {
    const item = rentLinks.entities?.[pathname];
    if (!item) return '';
    return t(item.i18key);
  }

  switch (pathname) {
    case SEARCH_LOCATION:
      return t('rentOutHousingDaily');

    default:
      return '';
  }
};

const HotelierRentOptionText = () => {
  const activeRentOption = useActiveRentOption();
  return <p className={scss.hotelierRentOption}>{activeRentOption}</p>;
};

export const LocationCard = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation('mainHotelier');
  const localActiveObject = useAppSelector(selectLocalActiveObject);
  const activeSearchId = useAppSelector(selectActiveSearchId);
  const search = useAppSelector(selectSearchTerm);
  const lang = useAppSelector(selectActiveLang);

  // TODO: remove city and country placeholder before deploy to production
  const frontEndPlaceholderActiveCityName = localActiveObject?.i18nCity ? t(localActiveObject.i18nCity) : '';
  const frontEndPlaceholderActiveCountryName = localActiveObject?.i18nCountry ? t(localActiveObject.i18nCountry) : '';

  // TODO: replace api from `/api/autocomplete` to `api/search`
  const { cityName, country } = useGetAutocompleteQuery(
    { search, lang },
    {
      selectFromResult: ({ data }) => {
        const locationObj = data?.entities?.[activeSearchId];
        return {
          cityName: locationObj?.cityName,
          country: locationObj?.country,
        };
      },
      skip: !activeSearchId,
    }
  );

  const frontEndPlaceholderImg = localActiveObject?.localImg; // TODO: remove img placeholder before deploy to production
  const alt = 'location';

  return (
    <div className={scss.locationCard}>
      <div className={scss.imageThumb}>
        <img src={frontEndPlaceholderImg} alt={alt} className={scss.locationImg} title={alt} />
      </div>

      <div className={scss.textWrapper}>
        <p className={scss.cityAndCountry}>
          <span className={scss.city}>{cityName ? cityName : frontEndPlaceholderActiveCityName}</span>

          <span className={scss.country}>{country ? country : frontEndPlaceholderActiveCountryName}</span>
        </p>

        {children}
      </div>
    </div>
  );
};

/** HotelierCatalog
 *  @see HOTELIER_CATALOG '/hotelier-catalog'
 * 1. userType - subheader
 * 2. NO BODY  - Hot Catalog ✅
 * 3. User     - Hot Catalog ✅
 * 4. Hotelier - Hot Catalog ✅
 * 5. Agent    - Hot Catalog ✅
 */
export const SubheaderHotelierCatalog = () => {
  const { isMobile } = useMedia();

  return (
    <div className={scss.subheaderHotelierCatalog}>
      {!isMobile && <SearchBar />}

      <LocationCard>
        <HotelierRentOptionText />
      </LocationCard>
    </div>
  );
};
