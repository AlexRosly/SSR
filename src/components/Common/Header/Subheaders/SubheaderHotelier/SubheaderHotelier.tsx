import { ReactNode, useRef } from 'react';
import { useClickOutside, useMedia, useStateToggle } from 'hooks/UI';

import { IconSmallArrow } from '../SubheaderUser';
import { SubheaderHotelierButtonsList } from './ButtonsList';
import { HotelNameAndRating } from './HotelNameAndRating';
import { HotelImage } from './HotelImage';
import { HotelierSettingsList } from './HotelierSettingsList';

import scss from './SubheaderHotelier.module.scss';

const HotelMetaDesktop = () => {
  const { isMobile } = useMedia();

  return (
    <div className={scss.hotelMetaDesktop}>
      <HotelImage />
      {!isMobile && <HotelNameAndRating />}
    </div>
  );
};

const HotelMetaMobile = () => (
  <div className={scss.hotelMetaMobile}>
    <HotelImage />
    <HotelNameAndRating />
  </div>
);

const MobileHotelCard = ({ isUp }: { isUp: boolean }) => (
  <div className={scss.hotelCardMobileWrapper}>
    <HotelMetaMobile />
    <IconSmallArrow isUp={isUp} />
  </div>
);

const Dropdown = ({ children }: { children: ReactNode }) => (
  <div className={scss.hotelierSettingsDropdownOverlay}>{children}</div>
);

const SubheaderHotelierCard = () => {
  const { isMobile } = useMedia();
  const [showHotelierSettings, , closeHotelierSettings, toggleHotelierSettings] = useStateToggle();
  const toggleBtnRef = useRef(null);
  const containerRef = useClickOutside(closeHotelierSettings, toggleBtnRef);

  const open = showHotelierSettings ? scss.open : '';

  return (
    <div className={`${scss.subheaderHotelierCard} ${open}`} ref={containerRef}>
      <button
        className={`${scss.hotelCardButton} ${open}`}
        onClick={toggleHotelierSettings}
        ref={toggleBtnRef}
        type="button"
      >
        <HotelMetaDesktop />

        {!isMobile && <IconSmallArrow isUp={showHotelierSettings} />}
      </button>

      {showHotelierSettings && (
        <Dropdown>
          {isMobile && <MobileHotelCard isUp={showHotelierSettings} />}

          <HotelierSettingsList />
        </Dropdown>
      )}
    </div>
  );
};

export const SubheaderHotelier = () => (
  <div className={scss.subheaderHotelier}>
    <SubheaderHotelierButtonsList />
    <SubheaderHotelierCard />
  </div>
);
