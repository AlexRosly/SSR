import { useTranslation } from 'react-i18next';
import { useMedia } from 'hooks/UI';

import { DepositIndicator } from './DepositIndicator';
import { HeaderButton } from '../../Components/HeaderButton';

import scss from './ButtonsList.module.scss';

export const SubheaderHotelierButtonsList = () => {
  const { t } = useTranslation('tooltips');
  const { isMobile } = useMedia();

  return (
    <ul className={scss.buttonsList}>
      {!isMobile && (
        <li className={scss.buttonsItem}>
          <DepositIndicator />
        </li>
      )}

      <li className={scss.buttonsItem}>
        <HeaderButton
          unreadMsgs={0}
          iconId="radar"
          iconClassName={scss.radar}
          // TODO update translation keys for hotelier
          buttonTooltip={t('searchForBookingNearby')}
        />
      </li>

      <li className={scss.buttonsItem}>
        <HeaderButton
          unreadMsgs={2}
          iconId="friends"
          iconClassName={scss.friends}
          buttonClassName={scss.friendsButton}
          // TODO update translation keys for hotelier
          buttonTooltip={t('newBooking')}
        />
      </li>

      <li className={scss.buttonsItem}>
        <HeaderButton unreadMsgs={5} iconId="envelope" iconClassName={scss.envelope} buttonTooltip={t('message')} />
      </li>
    </ul>
  );
};

export const SubheaderUserButtonsList = () => {
  const { t } = useTranslation();

  return (
    <ul className={scss.buttonsList}>
      <li className={scss.buttonsItem}>
        <HeaderButton
          unreadMsgs={21}
          iconId="envelope"
          iconClassName={scss.envelope}
          buttonTooltip={t('btnUserMessages')}
        />
      </li>

      <li className={scss.buttonsItem}>
        <HeaderButton
          unreadMsgs={99}
          iconId="simple-house-with-door"
          iconClassName={scss.simpleHouseWithDoor ?? ''}
          // TODO update translation keys for hotelier
          buttonTooltip={t('btnHotelierProposal')}
        />
      </li>
    </ul>
  );
};
