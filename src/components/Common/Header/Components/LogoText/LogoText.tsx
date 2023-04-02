import scss from './LogoText.module.scss';

export const LogoText = () => (
  <span className={scss.logoText}>
    <span className={scss.logoFirstPart}>YOUR PRICE</span> <span className={scss.logoSecondPart}>BOOKING</span>
  </span>
);
