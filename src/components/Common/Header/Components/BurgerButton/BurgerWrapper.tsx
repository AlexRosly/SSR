import { BurgerButton } from './BurgerButton';

import scss from './BurgerWrapper.module.scss';

export const BurgerWrapper = ({ openDrawer }: { openDrawer: () => void }) => (
  <div className={ scss.burgerWrapper}>
    <BurgerButton openDrawer={openDrawer} />
  </div>
);
