import { LinkRoute } from 'components/LinkRoute';
import { UserType } from 'context/AuthContext/authReducer';
import { useClickOutside } from 'hooks/UI';
import {
  PREVIEW,
  MAIN,
  MAIN_HOTELIER_EN,
  MAIN_AGENT,
  LOGIN_HOTELIER,
  LOGIN_AGENT,
  LOGIN_USER,
  REGISTER_HOTELIER,
  REGISTER_AGENT,
  REGISTER_USER,
  CABINET_HOTELIER,
  CABINET_AGENT,
  CABINET_USER,
  HOTELIER_CATALOG,
  USER_CATALOG,
  SUPPORT,
  PAGE1,
} from 'navigation/CONSTANTS';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { NavLinksTranslationKeys } from 'types';
import { makeEntity } from 'utils';

import scss from './Nav.module.scss';

type HeadLink =
  | { to: string; i18key: NavLinksTranslationKeys; cat: UserType | 'common' }
  | { header: NavLinksTranslationKeys; cat: UserType | 'common' }
  | { spacer: string };

const linksArr: HeadLink[] = [
  { to: PREVIEW, i18key: 'navLinkPreview', cat: 'common' },

  { header: 'navHeaderCommon', cat: 'common' },
  { header: 'navHeaderHoteliers', cat: 'hotelier' },
  { header: 'navHeaderAgents', cat: 'agent' },
  { header: 'navHeaderUsers', cat: 'user' },

  { to: MAIN, i18key: 'navLinkMain', cat: 'common' },
  { to: MAIN_HOTELIER_EN, i18key: 'navLinkMainHotelier', cat: 'hotelier' },
  { to: MAIN_AGENT, i18key: 'navLinkMainAgent', cat: 'agent' },
  { spacer: ' ' },

  { to: SUPPORT, i18key: 'navLinkSupport', cat: 'common' },
  { to: CABINET_HOTELIER, i18key: 'navLinkCabinetHotelier', cat: 'hotelier' },
  { to: CABINET_AGENT, i18key: 'navLinkCabinetAgent', cat: 'agent' },
  { to: CABINET_USER, i18key: 'navLinkCabinetUser', cat: 'user' },

  { spacer: ' ' },
  { to: LOGIN_HOTELIER, i18key: 'navLinkLoginHotelier', cat: 'hotelier' },
  { to: LOGIN_AGENT, i18key: 'navLinkLoginAgent', cat: 'agent' },
  { to: LOGIN_USER, i18key: 'navLinkLoginUser', cat: 'user' },

  { spacer: ' ' },
  { to: REGISTER_HOTELIER, i18key: 'navLinkRegisterHotelier', cat: 'hotelier' },
  { to: REGISTER_AGENT, i18key: 'navLinkRegisterAgent', cat: 'agent' },
  { to: REGISTER_USER, i18key: 'navLinkRegisterUser', cat: 'user' },

  { spacer: ' ' },
  { to: HOTELIER_CATALOG, i18key: 'navLinkHotelierCatalog', cat: 'hotelier' },
  { spacer: ' ' },
  { to: USER_CATALOG, i18key: 'navLinkUserCatalog', cat: 'user' },

  { spacer: ' ' },
  { spacer: ' ' },
  { spacer: ' ' },
  { to: PAGE1, i18key: 'navLinkAskUser', cat: 'user' },
];

const headersAndLinks = linksArr.filter(item => !('spacer' in item)) as (
  | { to: string; i18key: NavLinksTranslationKeys; cat: UserType | 'common' }
  | { header: NavLinksTranslationKeys; cat: UserType | 'common' }
)[];

const headersAndLinksSorted = headersAndLinks.sort((a, b) => {
  if (a.cat === b.cat) return 0;

  return a.cat === 'common'
    ? -1
    : b.cat === 'common'
    ? 1
    : a.cat === 'hotelier'
    ? -1
    : b.cat === 'hotelier'
    ? 1
    : a.cat === 'agent'
    ? -1
    : b.cat === 'agent'
    ? 1
    : a.cat === 'user'
    ? -1
    : b.cat === 'user'
    ? 1
    : 0;
});

const list = Object.freeze(makeEntity(headersAndLinksSorted));
const list2 = Object.freeze(makeEntity(linksArr));

export const NavLinks = () => {
  const [links] = useState(list2);
  const { t } = useTranslation();

  return (
    <ul className="links-list">
      {links.ids.map(linkId => {
        const item = links.entities[linkId];

        if (!item) return null;

        let header;
        let elem = null;

        if ('spacer' in item) {
          elem = item.spacer;
        } else if ('to' in item) {
          const to = item.to;
          const text = t(item.i18key);

          elem = <LinkRoute to={to}>{text}</LinkRoute>;
        } else if ('header' in item) {
          header = t(item.header);

          elem = header;
        }

        const liClassName = header ? 'nav-link-header' : 'nav-link-item';

        return (
          <li key={linkId} className={liClassName}>
            {elem}
          </li>
        );
      })}
    </ul>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  const [nav] = useState(list);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = useCallback(() => {
    setShowNav(prev => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setShowNav(false);
  }, []);

  const toggleBtnRef = useRef(null);
  const ref = useClickOutside(closeNav, toggleBtnRef);

  return (
    <nav className={scss.nav} ref={ref}>
      <button className={scss.navButton} type="button" onClick={toggleNav} ref={toggleBtnRef}>
        Nav
      </button>

      {showNav && (
        <ul className={scss.navList}>
          {nav.ids.map(itemId => {
            const item = nav.entities[itemId];
            if (!item) return null;

            if ('header' in item) {
              const { header } = item;
              const text = t(header);

              return (
                <li key={itemId} className={scss.navItemHeader}>
                  <p className={scss.navHeader}>{text}</p>
                </li>
              );
            }

            if ('to' in item) {
              const { to, i18key } = item;
              const text = t(i18key);

              return (
                <li key={itemId}>
                  <NavLink to={to} className={scss.navLink}>
                    {text}
                  </NavLink>
                </li>
              );
            }

            return null;
          })}
        </ul>
      )}
    </nav>
  );
};
