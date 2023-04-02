import { useMedia } from 'hooks/UI';

import { DownloadAppLink } from '../DownloadAppLink';
import { LinkForHoteliers } from '../LinkForHoteliers';
import { LoginButton } from '../LoginButton';

import scss from './HeaderNobody.module.scss';

export const HeaderNobody = () => {
  const { isMobile, isDesktop } = useMedia();

  return (
    <div className={scss.headerNobody}>
      <div className={scss.headerNobodyContent}>
        {isMobile && <DownloadAppLink />}

        {isDesktop && <LinkForHoteliers />}

        <LoginButton />
      </div>
    </div>
  );
};
