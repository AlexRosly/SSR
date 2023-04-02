import { IconSmallArrow } from '../SubheaderUser';
import { Avatar } from './Avatar';
import { PersonInfo } from './PersonInfo';
import scss from './SubheaderUserCard.module.scss';

export const MobileUserCard = ({ isUp }: { isUp: boolean }) => (
  <div className={scss.mobileUserCard}>
    <div className={scss.userCardContent}>
      <Avatar />
      <PersonInfo />
    </div>

    <IconSmallArrow isUp={isUp} />
  </div>
);
