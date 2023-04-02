import type { HeaderSpriteIcons, HotelierSettingsLinksTranslationKeys } from 'types';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  HOTELIER_ACCOUNT_SETTINGS,
  HOTELIER_FINANCES,
  HOTELIER_FEEDBACK,
  HOTELIER_SMS_SETTINGS,
  HOTELIER_SALES_HISTORY,
} from 'navigation/CONSTANTS';
import { useAuthContext } from 'context/AuthContext';
import { makeEntity } from 'utils';
import { logOut } from 'context/AuthContext/authReducer';
import { IconHeader } from '../../Components/IconHeader';
import scss from './HotelierSettingsList.module.scss';

type THotelierLink = {
  to: string;
  className: string;
  iconId: HeaderSpriteIcons;
  i18key: HotelierSettingsLinksTranslationKeys;
};

const hotelierLinks: THotelierLink[] = [
  { to: HOTELIER_ACCOUNT_SETTINGS, className: scss.gear, iconId: 'gear', i18key: 'linkHotelierAccountSettings' },
  { to: HOTELIER_FINANCES, className: scss.eyeTriangle, iconId: 'eye-triangle', i18key: 'linkHotelierFinances' },
  { to: HOTELIER_FEEDBACK, className: scss.star, iconId: 'star', i18key: 'linkHotelierRatingAndFeedbacks' },
  {
    to: HOTELIER_SMS_SETTINGS,
    className: scss.sliders,
    iconId: 'slidersH',
    i18key: 'linkHotelierSMSNotificationSettings',
  },
  { to: HOTELIER_SALES_HISTORY, className: scss.karma, iconId: 'karma', i18key: 'linkHotelierSalesHistory' },
];

const hotelierSettingsList = Object.freeze(makeEntity(hotelierLinks));

type HotelierLinkProps = {
  to: string;
  text: string;
  iconId: HeaderSpriteIcons;
  iconClassName: string;
};

const HotelierLink = ({ to, text, iconId, iconClassName }: HotelierLinkProps) => (
  <Link to={to} className={scss.hotelierLink}>
    <div className={scss.hotelierLinkIconWrapper}>
      <IconHeader iconId={iconId} className={`${scss.hotelierMobileIcon} ${iconClassName}`} />
    </div>
    {text}
  </Link>
);

const HotelierLogOutButton = () => {
  const { t } = useTranslation();
  const [, dispatch] = useAuthContext();

  const onClickLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <li className={scss.hotelierSettingsItem}>
      <button className={scss.hotelierLogOutButton} onClick={onClickLogOut}>
        <div className={scss.hotelierLinkIconWrapper}>
          <IconHeader iconId="exit" className={`${scss.hotelierMobileIcon} ${scss.exit}`} />
        </div>

        <span>{t('linkHotelierExit')}</span>
      </button>
    </li>
  );
};

export const HotelierSettingsList = () => {
  const { t } = useTranslation();
  const [settings] = useState(hotelierSettingsList);

  return (
    <ul className={scss.hotelierSettingsList}>
      {hotelierSettingsList.ids.map(id => {
        const item = settings.entities[id];
        if (!item) return null;

        const { to, className, iconId, i18key } = item;
        const text = t(i18key);

        return (
          <li key={id} className={scss.hotelierSettingsItem}>
            <HotelierLink to={to} iconClassName={className} iconId={iconId} text={text} />
          </li>
        );
      })}

      <HotelierLogOutButton />
    </ul>
  );
};
