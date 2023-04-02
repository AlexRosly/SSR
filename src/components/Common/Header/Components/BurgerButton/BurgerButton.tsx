import burgerIcon from 'assets/icons/Header/icon-burger.svg';
import scss from './BurgerButton.module.scss';

const burger = `${burgerIcon}#burger`;

const BurgerIcon = () => (
  <svg className={scss.burgerIcon} aria-hidden>
    <use href={burger} />
  </svg>
);

export const BurgerButton = ({ openDrawer }: { openDrawer: () => void }) => (
  <button className={scss.burgerButton} onClick={openDrawer} aria-label="open menu">
    <BurgerIcon />
  </button>
);
