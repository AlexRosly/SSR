import type { TReview } from './ReviewsList';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import reviewsBgMain from 'components/MainPage/Assents/image/Vector.jpg';

// Assents/image/Vector.jpg
import reviewsBgMainHotelier from 'assets/images/feedback/feedbackMotel.jpg';
import reviewsBgMainAgent from 'assets/images/feedback/feedbackKvartiry1.jpg';
import feedBackDOM from 'assets/images/feedback/feedbackDOM.jpg';
import feedBackApart from 'assets/images/feedback/feedbackApart.jpg';
import feedBackGostinicy from 'assets/images/feedback/feedbackGostinicy.jpg';
import feedBackHostel from 'assets/images/feedback/feedbackHostel.jpg';
import feedBackHotel from 'assets/images/feedback/feedbackHotel.jpg';
import feedBackKomnaty from 'assets/images/feedback/feedbackKomnaty.jpg';
import feedBackMotel from 'assets/images/feedback/feedbackMotel.jpg';
import feedBackDomCatalog from 'assets/images/feedback/feedbackDomCatalog.jpg';
import feedBackHotelCatalog from 'assets/images/feedback/feedbackHotelCatalog.jpg';
import feedBackMotelCatalog from 'assets/images/feedback/feedbackMotelCatalog.jpg';
import feedBackGuestCatalog from 'assets/images/feedback/feedbackGuestCatalog.jpg';
import feedBackApartCatalog from 'assets/images/feedback/feedbackApartCatalog.jpg';
import {
  APART_HOTEL_CATALOG,
  CABINET_AGENT,
  CAPSULE_HOTEL_CATALOG,
  DOM_CATALOG,
  GOSTINICY_CATALOG,
  GUEST_HOUSE_CATALOG,
  HOSTEL_CATALOG,
  HOTELIER_CATALOG,
  HOTEL_CATALOG,
  isOnMainHotelier,
  KOMNATA_CATALOG,
  KOMNATA_DOM_CATALOG,
  KVARTIRY_CATALOG,
  MAIN,
  MAIN_AGENT,
  MOTEL_CATALOG,
} from 'navigation/CONSTANTS';

import { ReviewsList } from './ReviewsList';

import s from './Reviews.module.scss';

type ReviewsProps = { reviews?: TReview[]; bg?: string };

const makeBg = (bg: string) =>
  `center linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(96, 96, 96, 0.305) 50.83%, rgba(56, 56, 56, 0.43) 71.67%, rgba(0, 0, 0, 0.44) 100%), url(${bg})`;

const getReviewsBgUrl = (pathname: string) => {
  if (isOnMainHotelier(pathname)) return reviewsBgMainHotelier;

  switch (pathname) {
    case MAIN:
      return reviewsBgMain;
    case MAIN_AGENT:
      return reviewsBgMainAgent;
    case CABINET_AGENT:
      return reviewsBgMainAgent;
    case HOTELIER_CATALOG:
      return feedBackHostel;
    case KVARTIRY_CATALOG:
      return feedBackDOM;
    case KOMNATA_DOM_CATALOG:
      return feedBackMotel;
    case DOM_CATALOG:
      return feedBackDomCatalog;
    case KOMNATA_CATALOG:
      return feedBackKomnaty;
    case HOSTEL_CATALOG:
      return feedBackHotel;
    case GOSTINICY_CATALOG:
      return feedBackApart;
    case HOTEL_CATALOG:
      return feedBackHotelCatalog;
    case MOTEL_CATALOG:
      return feedBackMotelCatalog;
    case APART_HOTEL_CATALOG:
      return feedBackApartCatalog;
    case GUEST_HOUSE_CATALOG:
      return feedBackGuestCatalog;
    case CAPSULE_HOTEL_CATALOG:
      return feedBackGostinicy;
    default:
      return '';
  }
};

export const Reviews = ({ reviews, bg }: ReviewsProps) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const bgUrl = getReviewsBgUrl(pathname);
  const background = makeBg(bg ?? bgUrl);

  return (
    <section className={s.reviewsSection}>
      <div className={s.reviewsBg} style={{ background }}>
        <h2 className={s.reviewsTitle}>{t('reviews')}</h2>
      </div>

      <div className={s.reviewsBlock}>
        {reviews?.length ? <ReviewsList reviews={reviews} /> : <p className={s.reviewsMessages}>{t('noReviewsYet')}</p>}
      </div>
    </section>
  );
};
