import { Link } from 'react-router-dom';
import { ROOT } from 'navigation/CONSTANTS';
import logo from 'assets/icons/Header/icon-logo.svg';

import scss from './Logo.module.scss';

const logoPath = `${logo}#logo`;

const LogoIcon = ({ logoClassName }: { logoClassName?: string }) => (
  <svg className={`${scss.logoIcon} ${logoClassName ? logoClassName : ''}`}>
    <use href={logoPath} />
  </svg>
);

export const Logo = ({ linkClassName, logoClassName }: { linkClassName?: string; logoClassName?: string }) => (
  <Link to={ROOT} className={`${scss.logoLink} ${linkClassName ? linkClassName : ''}`}>
    <LogoIcon logoClassName={logoClassName} />
  </Link>
);

export const DrawerLogo = () => (
  <Link to={ROOT} className={scss.drawerLogoLink}>
    <LogoIcon />
  </Link>
);
