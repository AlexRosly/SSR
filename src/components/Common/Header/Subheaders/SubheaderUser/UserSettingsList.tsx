import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { USER_ACCOUNT_SETTING, USER_BOOKING_KARMA, USER_SMS_SETTINGS, USER_CONTACTS } from 'navigation/CONSTANTS';
import { makeEntity } from 'utils';

// import slidersHorizontal from 'assets/icons/Header/SubheaderUser/UserSettings/icon-sliders-horizontal.svg';

import scss from './UserSettingsList.module.scss';
import { IconHeader } from '../../Components/IconHeader';
import { HeaderSpriteIcons } from 'types';


const settingsLinksArr: { link: string; icon: HeaderSpriteIcons; i18nKey: string; text: string }[] = [
  // TODO: check if link to profile should be the same as link to account settings?
  { link: USER_ACCOUNT_SETTING, icon: 'person', i18nKey: 'myProfile', text: 'Мой профиль' },
  {
    link: USER_ACCOUNT_SETTING,
    icon: 'gear',
    i18nKey: 'accountSettings',
    text: 'Настройки аккаунта',
  },
  {
    link: USER_CONTACTS,
    icon: 'old-phone',
    i18nKey: 'userMyContacts',
    text: 'Мои контакты',
  },
  {
    link: USER_BOOKING_KARMA,
    icon: 'karma',
    i18nKey: 'bookingKarma',
    text: 'Booking Karma',
  },
  {
    link: USER_SMS_SETTINGS,
    icon: 'slidersH',
    i18nKey: 'SMSNotificationSettings',
    text: 'Настройка SMS уведомлений',
  },
];

const settingsLinks = Object.freeze(makeEntity(settingsLinksArr));

const SettingsIcon = ({ iconSrc }: { iconSrc: HeaderSpriteIcons }) => (
  <div className={scss.settingsIconWrapper}>
    <IconHeader iconId={iconSrc} className={scss.settingsIcon} />
  </div>
);

const SettingsExitButton = ({ closeSettings }: { closeSettings: () => void }) => {
  const { t } = useTranslation();

  return (
    <li className={scss.settingsItem}>
      <button className={scss.userSettingsLink} onClick={closeSettings}>
        <div className={scss.settingsIconWrapper}>
          <IconHeader className={scss.iconExit} iconId='exit'/>
        </div>

        <span className={scss.settingsItemText}>{t('exitButton')}</span>
      </button>
    </li>
  );
};

export const UserSettingsList = ({ closeSettings }: { closeSettings: () => void }) => {
  const [settingsEntity] = useState(settingsLinks);

  return (
    <ul className={scss.userSettingsList}>
      {settingsEntity.ids.map(id => {
        const item = settingsEntity.entities[id];
        if (!item) return null;

        const { link, text, icon } = item;

        return (
          <li key={id} className={scss.settingsItem}>
            <Link to={link} className={scss.userSettingsLink}>
              <SettingsIcon iconSrc={icon} />

              {text}
            </Link>
          </li>
        );
      })}

      <SettingsExitButton closeSettings={closeSettings} />
    </ul>
  );
};
