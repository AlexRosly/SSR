import { useModal } from 'hooks/UI';

import { BurgerWrapper } from '../BurgerButton';
import { Drawer } from '../Drawer';
import { DrawerContent } from '../DrawerContent';

export const MobileHeader = () => {
  const [isDrawerOpen, openDrawer, closeDrawer] = useModal();

  return (
    <>
      <BurgerWrapper openDrawer={openDrawer} />

      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <DrawerContent closeDrawer={closeDrawer} />
      </Drawer>
    </>
  );
};
