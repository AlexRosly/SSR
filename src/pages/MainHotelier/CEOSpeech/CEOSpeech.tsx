import { useTranslation } from 'react-i18next';
import ceoAvatar from 'assets/images/pages/MainHotelier/ceo-avatar.png';
import { COMMISSIONS } from 'config';

import s from './CEOSpeech.module.scss';

const { commission, coefficient } = COMMISSIONS;

export const CEOSpeech = () => {
  const { t } = useTranslation('mainHotelier');

  const the = t('the');

  return (
    <div className={s.ceoSpeech}>
      <div className={s.ceoSpeechMain}>
        <div>
          <img className={s.ceoAvatar} src={ceoAvatar} alt="" />

          <p className={s.titleAndFullName}>
            {t('CEO')} {t('yourPriceBooking')} — {t('ceoFullName')}
          </p>
        </div>

        <div className={s.block_five_left_content_text}>
          <h2 className={s.title}>{t('helloDearPartners')}</h2>

          <div className={s.block_five_left_content_text_p}>
            <p>{t('youSimplyAddAnObjectToOurSite')}</p>

            <p>{t('descriptionsOfHotelsAreTranslatedByOurTeam')}</p>
          </div>

          <p className={s.block_five_left_content_text_p}>
            {the ? `${the} ` : ''}
            <b className={s.yourPriceBooking}>{t('yourPriceBooking')}</b> {t('service')}{' '}
            {t('doesNotAcceptPaymentFromGuests')}
          </p>

          <p className={s.block_five_left_content_text_p}>
            {t('weHaveReducedIndustryStandardFeesByMoreThanX', { coefficient })}{' '}
            {t('ourCommissionIsXPercent', { commission })}
          </p>

          <p className={s.block_five_left_content_text_p}>
            {t('youSeeUsersSuitableForYourBookings')} {t('makeThemIndividualOffersOrSetAFixedPrice')}
          </p>

          <p className={s.block_five_left_content_text_p}>
            {t('weVerifiedEachHotelOnOurSite')} {t('objectIsVerifiedDuringItsListing')}
          </p>

          <p className={s.block_five_left_content_text_p}>
            {t('weStoreReviewsAndBookingStatisticsForUsersAndHoteliers')}
          </p>

          <p className={s.block_five_left_content_text_p}>
            {t('ourMissionIsToConnectTravelersWithHoteliers')}{' '}
            {t('weWorkSoThatYouCanSellYourFreeBookingOptionsOnYourTerms')}
          </p>

          <p className={s.block_five_left_content_text_p}>
            <span className={s.block_five_left_content_text_p_footer}>
              {t('peaceAndGoodness')}
              {t('CEO')}
              <span className={s.logoFirstPart}> Your Price</span>
              <span className={s.logoSecondPart}> Booking</span> — {t('ceoFullName')}.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
