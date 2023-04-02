import type { EntityId } from '@reduxjs/toolkit';
import type { MainHotelierTranslationKeys } from 'types';
import { useTranslation } from 'react-i18next';
import { COMMISSIONS, METRICS } from 'config';
import { makeEntity } from 'utils';
import diamond from 'assets/images/hoteliers/diamond.png';
import s from './Advantages.module.scss';

const { commission } = COMMISSIONS;
const { minutes } = METRICS;

const advantagesArr: { i18nKey: MainHotelierTranslationKeys; commissionVal?: string }[] = [
  { i18nKey: 'youGetPaidBeforeCheckin' },
  { i18nKey: 'ourCommissionIs', commissionVal: commission },
  { i18nKey: 'changeThePriceWhenItSuitsYou' },
  { i18nKey: 'payOurCommissionAfterYouHadBeenPaid' },
  { i18nKey: 'visibleToUsersSearchingForBookings' },
  { i18nKey: 'offerAnIndividualPriceForEveryone' },
];

const advantages = Object.freeze(makeEntity(advantagesArr));
const firstRow = advantages.ids.slice(0, 3);
const secondRow = advantages.ids.slice(3);

const AdvantageItem = ({ advantageId }: { advantageId: EntityId }) => {
  const { t } = useTranslation('mainHotelier');
  const item = advantages.entities[advantageId];
  if (!item) return null;
  const { i18nKey, commissionVal } = item;

  return (
    <li className={s.advantageItem}>
      <div className={s.advantageItemText}>
        {t(i18nKey)}

        {commissionVal && <p className={s.commissionDigit}>{commissionVal}</p>}
      </div>

      <img className={s.diamond} src={diamond} alt="Diamond" />
    </li>
  );
};

type OpenModalButtonProps = { openModal?: () => void };

export const Advantages = ({ openModal }: OpenModalButtonProps) => {
  const { t } = useTranslation('mainHotelier');

  return (
    <section className={s.advantages}>
      <ul className={s.advantagesList1}>
        {firstRow.map(id => (
          <AdvantageItem key={id} advantageId={id} />
        ))}
      </ul>

      <div className={s.registerObject}>
        <div className={s.floatWrapper}>
          <button className={s.registerObjectButton} onClick={openModal}>{t('registerAnObject')}</button>
        </div>

        <p className={s.registerObjectCallToAction}>{t('registerAnObjectRightNowAndVerifyOnline')}</p>
        <p className={s.registerObjectCallToActionSmall}>{t('averageRegistrationDuration', { minutes })}.</p>
      </div>

      <ul className={s.advantagesList2}>
        {secondRow.map(id => (
          <AdvantageItem key={id} advantageId={id} />
        ))}
      </ul>
    </section>
  );
};
