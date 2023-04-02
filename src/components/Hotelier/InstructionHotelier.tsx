import { useTranslation } from 'react-i18next';
import like from 'assets/images/pages/MainHotelier/instruction/like.png';
import s from './InstructionHotelier.module.scss';
import { MainHotelierTranslationKeys } from 'types';

const arr: { key1: MainHotelierTranslationKeys; key2?: MainHotelierTranslationKeys }[] = [
  { key1: 'youSeeAllUsersWhoAreEligibleForYourFreeBookingOptions', key2: 'makePromotionalOffersIfYouHaveFreeOptions' },
  { key1: 'youCanOfferEachUserAnIndividualPriceConfidentially' },
  { key1: 'travelersKnowThatTheHotelierPaysAMinimumCommission' },
  { key1: 'weDoNotUseThePriceParityPrincipleInCooperationWithHoteliers' },
];

export const InstructionHotelier = () => {
  const { t } = useTranslation('mainHotelier');

  return (
    <ul className={s.instructionHotelier}>
      {arr.map(({ key1, key2 }, id) => (
        <li key={id} className={s.howYPBookingWorks}>
          <img src={like} alt="Like" />

          <p className={s.strongPoint}>
            {t(key1)} {key2 && t(key2)}
          </p>
        </li>
      ))}
    </ul>
  );
};
