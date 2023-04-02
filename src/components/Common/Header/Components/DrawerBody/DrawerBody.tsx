import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isOnHotelierCatalog, isOnUserCatalog } from 'navigation/CONSTANTS';
import { useAuthContext } from 'context/AuthContext';
import { useMedia } from 'hooks/UI';

import { DrawerPickers } from '../Pickers';
import { IconHeader } from '../IconHeader';
import { FooterLinks } from 'components/Common/Footer/FooterLinks';
import { DepositIndicator } from '../../Subheaders/SubheaderHotelier/DepositIndicator';
import { SearchBar } from '../../Subheaders/SubheaderHotelierCatalog/SearchBar';
import { RentListHotelierCatalog } from 'pages/MainHotelier/RentList';
import { UserCatalogBookingOptionsList } from '../../Subheaders';

import scss from './DrawerBody.module.scss';

const ThumbUp = () => (
  <DepositIndicator
    depositIndicatorClassName={scss.depositIndicatorMobile}
    tooltipClassName={scss.depositIndicatorButtonTooltipOverlay}
    buttonClassName={scss.depositIndicatorButtonMobile}
    overlayClassName={scss.depositIndicatorOverlayMobile}
  />
);

const IconAndTextForHoteliers = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.userCategory}>
      <IconHeader iconId="house-small-grey" className={scss.forUserCategoryIcon} />
      <span className={scss.forUserCategory}>{t('forHoteliers')}</span>
    </div>
  );
};

const HotelierRow = () => {
  const [{ isHotelier }] = useAuthContext();
  const { pathname } = useLocation();

  const showThumb = isHotelier && !isOnHotelierCatalog(pathname);

  return (
    <div className={scss.depositIndicatorWrapper}>
      <IconAndTextForHoteliers />
      {showThumb && <ThumbUp />}
    </div>
  );
};

const FooterLinksMobile = () => (
  <div className={scss.navMobile}>
    <FooterLinks mode="dark" />
  </div>
);

const RentListDrawer = ({ closeDrawer }: { closeDrawer?: () => void }) => (
  <div className={scss.rentListDrawerWrapper}>
    <RentListHotelierCatalog mode="dark" closeDrawer={closeDrawer} />
  </div>
);

const UserBookingOptionsListDrawer = ({ closeDrawer }: { closeDrawer?: () => void }) => (
  <div className={scss.userBookingOptionsListDrawer}>
    <UserCatalogBookingOptionsList mode="dark" closeDrawer={closeDrawer} />
  </div>
);

export const DrawerBody = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const { isDesktop } = useMedia();
  const { pathname } = useLocation();

  const showHotelierCatalogUI = !isDesktop && isOnHotelierCatalog(pathname);
  const showUserCatalogUI = !isDesktop && isOnUserCatalog(pathname);

  return (
    <div className={scss.drawerBody}>
      {showHotelierCatalogUI || showUserCatalogUI ? <SearchBar mode="dark" /> : null}

      <DrawerPickers />

      <div className={scss.drawerBodyWrapper}>
        <HotelierRow />

        {showHotelierCatalogUI && <RentListDrawer closeDrawer={closeDrawer} />}
        {showUserCatalogUI && <UserBookingOptionsListDrawer closeDrawer={closeDrawer} />}

        <FooterLinksMobile />
      </div>
    </div>
  );
};
