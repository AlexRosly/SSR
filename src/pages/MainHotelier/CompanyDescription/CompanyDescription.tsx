import { useTranslation } from 'react-i18next';
import twoSpeechBubbles from 'assets/images/pages/MainHotelier/two-speech-bubbles.png';

import s from './CompanyDescription.module.scss';

export const CompanyDescription = () => {
  const { t } = useTranslation('mainHotelier');

  return (
    <div className={s.companyDescription}>
      <div>
        <p className={s.YourPriceBooking}>
          <span className={s.logoFirstPart}>YOUR PRICE </span>
          <span className={s.logoSecondPart}>BOOKING</span>
        </p>
        <p className={s.companyDescriptionText}>{t('onlinePlatform1')}</p>
        <p className={s.text}>{t('onlinePlatform2')}</p>
        <p className={s.text}>{t('onlinePlatform3')}</p>
      </div>

      <img className={s.twoSpeechBubbles} src={twoSpeechBubbles} alt="two speech bubbles" />
    </div>
  );
};
