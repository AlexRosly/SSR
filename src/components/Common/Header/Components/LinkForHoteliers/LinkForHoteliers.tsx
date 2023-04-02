import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconHeader } from '../IconHeader';

import scss from './ForHoteliersLink.module.scss';
import { useLinkToMainHotelier } from 'hooks/routes';

const IconHouseSmallGrey = () => <IconHeader iconId="house-small-grey" className={scss.hotelierIcon} />;

export const LinkForHoteliers = () => {
  const { t } = useTranslation();

  const to = useLinkToMainHotelier();

  return (
    <NavLink to={to} className={scss.hotelierLink}>
      <IconHouseSmallGrey />

      {t('forHoteliers')}
    </NavLink>
  );
};
