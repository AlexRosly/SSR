import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { isProd } from 'config';
import { isOnHotelierCatalog, isOnUserCatalog } from 'navigation/CONSTANTS';
import { useMedia } from 'hooks/UI';
import { DrawerCtxProvider } from 'context/DrawerContext';
import { Logo } from '../Logo';
import { DesktopPickers, UserTypePicker } from '../Pickers';
import { MobileHeader } from '../MobileHeader';

import scss from './HeaderContent.module.scss';

export const HeaderContent = ({ children }: { children: ReactNode }) => {
  const { isDesktop } = useMedia();
  const { pathname } = useLocation();

  let routeSpecificStyle = '';
  if (isOnHotelierCatalog(pathname)) {
    routeSpecificStyle = scss.hotelierCatalog;
  } else if (isOnUserCatalog(pathname)) {
    routeSpecificStyle = scss.userCatalog;
  }

  return (
    <DrawerCtxProvider>
      <div className={`${scss.flexRow} ${routeSpecificStyle}`}>
        <Logo />

        {isDesktop && <DesktopPickers />}

        {children}

        {!isProd && (
          <div className={scss.positionAbsolute}>
            <UserTypePicker isAbsolute={true} />
          </div>
        )}

        {!isDesktop && <MobileHeader />}
      </div>
    </DrawerCtxProvider>
  );
};
