import { IconHeader } from '../../Components/IconHeader';
import scss from './IconSmallArrow.module.scss';

export const IconSmallArrow = ({ isUp, className = '' }: { isUp: boolean; className?: string }) => (
  <div className={scss.iconWrapper}>
    <IconHeader className={`${isUp ? scss.arrowUp : scss.arrowDown} ${className}`} iconId="arrow-up-chevron" />
  </div>
);
