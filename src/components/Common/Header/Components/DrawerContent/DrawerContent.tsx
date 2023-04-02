import { useClickOutside, useCloseOnResize } from 'hooks/UI';

import { DrawerBody } from '../DrawerBody';
import { DrawerFooter } from '../DrawerFooter';
import { DrawerTopRow } from '../DrawerTopRow';
import scss from './DrawerContent.module.scss';

export const DrawerContent = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const containerRef = useClickOutside(closeDrawer);
  useCloseOnResize(closeDrawer);

  return (
    <div className={scss.drawerContentWide}>
      <div className={scss.drawerContentSlim} ref={containerRef}>
        <DrawerTopRow closeDrawer={closeDrawer} />

        <div className={scss.drawerBodyAndFooter}>
          <DrawerBody closeDrawer={closeDrawer} />
          <DrawerFooter />
        </div>
      </div>
    </div>
  );
};
