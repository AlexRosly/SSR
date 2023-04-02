import { useRef } from 'react';
import { useClickOutside, useMedia, useStateToggle } from 'hooks/UI';

import { Avatar } from './Avatar';
import { PersonInfo } from './PersonInfo';
import { IconSmallArrow } from '../SubheaderUser';
import { UserSettingsList } from '../SubheaderUser';
import { MobileUserCard } from './MobileUserCard';

import scss from './SubheaderUserCard.module.scss';

export const SubheaderUserCard = () => {
  const { isMobile } = useMedia();
  const [showSettings, , closeSettings, toggleSettings] = useStateToggle();

  const toggleButtonRef = useRef(null);
  const containerRef = useClickOutside(closeSettings, toggleButtonRef);

  return (
    <div className={scss.personContainer} ref={containerRef}>
      <button className={scss.userCardButton} onClick={toggleSettings} ref={toggleButtonRef}>
        <div className={scss.userCardContent}>
          <Avatar />
          {!isMobile && <PersonInfo />}
        </div>

        {!isMobile && <IconSmallArrow isUp={showSettings} />}
      </button>

      {showSettings && (
        <div className={scss.userSettingsWrapper}>
          {isMobile && <MobileUserCard isUp={showSettings} />}

          <UserSettingsList closeSettings={closeSettings} />
        </div>
      )}
    </div>
  );
};
