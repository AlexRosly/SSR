import closeIcon from 'assets/icons/Header/icon-close.svg';
import scss from './CloseDrawerButton.module.scss';

const close = `${closeIcon}#close`;

const CloseIcon = () => (
  <svg className={scss.closeDrawerIcon} aria-hidden>
    <use href={close} />
  </svg>
);

type CloseDrawerButtonProps = { closeDrawer: () => void };

export const CloseDrawerButton = ({ closeDrawer }: CloseDrawerButtonProps) => (
  <button className={scss.closeDrawerButton} onClick={closeDrawer} aria-label="close">
    <CloseIcon />
  </button>
);
