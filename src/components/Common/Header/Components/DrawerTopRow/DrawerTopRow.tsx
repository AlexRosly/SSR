import { CloseDrawerButton } from '../CloseDrawerButton';
import { DrawerLogo } from '../Logo';
import { LogoText } from '../LogoText';
import scss from './DrawerTopRow.module.scss';

export const DrawerTopRow = ({ closeDrawer }: { closeDrawer: () => void }) => (
  <div className={scss.drawerTopRow}>
    <DrawerLogo />

    <LogoText />

    <CloseDrawerButton closeDrawer={closeDrawer} />
  </div>
);
