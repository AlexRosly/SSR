import type { HeaderSpriteIcons, MainAgentTranslationKeys } from 'types';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeEntity } from 'utils';
import { useClickOutside, useMedia, useStateToggle } from 'hooks/UI';
import { useAuthContext } from 'context/AuthContext';

import { IconSmallArrow } from '../SubheaderUser';
import { IconHeader } from '../../Components/IconHeader';
import { Avatar } from '../SubheaderUserCard/Avatar';

import s from './SubheaderAgent.module.scss';
import { logOut } from 'context/AuthContext/authReducer';

const AgentExitButton = () => {
  const { t } = useTranslation('mainAgent');
  const [, dispatch] = useAuthContext();

  const onClickLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <li className={s.agentSettingsItem}>
      <button className={`${s.settingsButton} ${s.bold}`} onClick={onClickLogOut}>
        <div className={s.iconThumb}>
          <IconHeader className={s.exit} iconId="exit" />
        </div>

        <span className={s.buttonTextWrapper}>{t('logout')}</span>
      </button>
    </li>
  );
};

type AgentSettingsItem = {
  iconId: HeaderSpriteIcons;
  iconClassName: string;
  i18nKey: MainAgentTranslationKeys;
  value: string;
  buttonClassName?: string;
};

const arr: AgentSettingsItem[] = [
  { iconId: 'house-small-grey', iconClassName: s.houseSmall, i18nKey: 'objectsRegistered', value: '9900' },
  { iconId: 'two-persons', iconClassName: s.twoPersons, i18nKey: 'agentsRegistered', value: '9900' },
  { iconId: 'dollar', iconClassName: s.dollar, buttonClassName: s.bold, i18nKey: 'available', value: '0 USD' },
];

const agentSettings = makeEntity(arr);

const AgentMeta = () => {
  const { t } = useTranslation('mainAgent');
  const [agentId] = useState('0987989');

  return (
    <div className={s.agentNameWrapper}>
      <span className={s.agentId}>
        {t('agent')} ID {agentId}
      </span>
    </div>
  );
};

const AgentCardMobile = () => {
  return (
    <div className={s.agentCardMobile}>
      <Avatar />
      <AgentMeta />
    </div>
  );
};

const AgentCardDesktop = () => {
  const { isMobile } = useMedia();

  return (
    <div className={s.agentCard}>
      <Avatar />
      {!isMobile && <AgentMeta />}
    </div>
  );
};

const AgentSettingsList = () => {
  const { isMobile } = useMedia();
  const { t } = useTranslation('mainAgent');

  const [settings] = useState(agentSettings);

  return (
    <div className={s.agentSettingsDropdownOverlay}>
      {isMobile && <AgentCardMobile />}

      <ul className={s.agentSettingList}>
        {settings.ids.map(id => {
          const item = settings.entities[id];
          if (!item) return null;

          const { i18nKey, value, buttonClassName, iconId, iconClassName } = item;

          return (
            <li key={id} className={s.agentSettingsItem}>
              <button className={`${s.settingsButton} ${buttonClassName}`} type="button">
                <div className={s.iconThumb}>
                  <IconHeader className={iconClassName} iconId={iconId} />
                </div>

                <div className={s.buttonTextWrapper}>
                  <span className={s.alignLeft}>{t(i18nKey)}</span>
                  <span className={s.bold}>{value}</span>
                </div>
              </button>
            </li>
          );
        })}

        <AgentExitButton />
      </ul>
    </div>
  );
};

export const SubheaderAgent = () => {
  const { isMobile } = useMedia();
  const [showSettings, , closeSettings, toggleSettings] = useStateToggle();
  const toggleButtonRef = useRef(null);
  const containerRef = useClickOutside(closeSettings, toggleButtonRef);

  const toggleButtonClassName = `${s.toggleAgentSettingsButton} ${showSettings ? s.overlayOpen : ''}`;

  return (
    <div className={s.subheaderAgent}>
      <div className={s.relativeContainer} ref={containerRef}>
        <button className={toggleButtonClassName} onClick={toggleSettings} type="button" ref={toggleButtonRef}>
          <AgentCardDesktop />

          {!isMobile && <IconSmallArrow isUp={showSettings} />}
        </button>

        {showSettings && <AgentSettingsList />}
      </div>
    </div>
  );
};
