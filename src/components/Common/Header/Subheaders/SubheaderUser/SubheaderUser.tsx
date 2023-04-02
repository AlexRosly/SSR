import { SubheaderUserCard } from '../SubheaderUserCard';

import scss from './SubheaderUser.module.scss';
import { SubheaderUserButtonsList } from '../SubheaderHotelier/ButtonsList';

export const SubheaderUser = () => (
  <div className={scss.subheaderUser}>
    <SubheaderUserButtonsList />

    <SubheaderUserCard />
  </div>
);
