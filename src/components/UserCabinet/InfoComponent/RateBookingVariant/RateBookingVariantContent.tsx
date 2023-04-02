import type { FormEvent } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import type { Ids } from 'types';
import { useCallback, useState } from 'react';
import scss from './RateBookingVariant.module.scss';
import iconStar from 'assets/images/sidemenu/rating/Star 13.svg';
import iconCarma from 'assets/icons/proposeCard/clock_karma.svg';

import { CloseFeedbackModalButton } from 'components/BookingFeedBack/sendFeedback';
import { useTranslation } from 'react-i18next';

type RatingElem = { label: 'staff' | 'location' | 'cleanliness' | 'amenities'; rating: number };
type RatingElement = { id: EntityId } & RatingElem;

const initArray: RatingElem[] = [
  { label: 'staff', rating: 0 },
  { label: 'location', rating: 0 },
  { label: 'cleanliness', rating: 0 },
  { label: 'amenities', rating: 0 },
];

const initState = initArray.reduce<{ ids: Ids; entities: Record<EntityId, RatingElement> }>(
  ({ ids, entities }, item, i) => ({ ids: [...ids, i], entities: { ...entities, [i]: { id: i, ...item } } }),
  { ids: [], entities: {} }
);

type RatingProps = RatingElement & { chooseRating: (id: EntityId, rating: number) => void };

const RatingItem = ({ id, label, rating, chooseRating }: RatingProps) => {
  const { t } = useTranslation();
  const [ratingButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const category = t(`${label}`);

  return (
    <li className={scss.RatingRow}>
      <span className={scss.RatingCategory}>{category}:</span>

      <ul className={scss.RatingButtonsList}>
        {ratingButtons.map(number => {
          const inputId = `rate${label[0].toUpperCase() + label.slice(1)}Input${number}`;

          const isActive = number === rating;

          const inputClassName = `visually-hidden ${scss.BookingVariantRatingInput}`;

          const labelClassName = `${scss.BookingVariantRatingLabel} ${
            isActive ? scss.BookingVariantRatingLabelActive : ''
          }`;

          return (
            <li key={number} className={scss.ItemClassName}>
              <input
                id={inputId}
                className={inputClassName}
                type="radio"
                name={label}
                value={number}
                onChange={() => chooseRating(id, number)}
                defaultChecked={isActive}
                required
              />

              <label htmlFor={inputId} className={labelClassName}>
                {number}
              </label>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export const RateBookingVariantContent = ({ closeModal }: { closeModal: () => void }) => {
  const { t } = useTranslation();

  const [ratingEntity, setRatingEntity] = useState(initState);

  const chooseRating = useCallback(
    (id: EntityId, rating: number) => {
      const newRatingEntity = {
        ...ratingEntity,
        entities: { ...ratingEntity.entities, [id]: { ...ratingEntity.entities[id], rating } },
      };

      setRatingEntity(newRatingEntity);
    },
    [ratingEntity]
  );

  const onRatingSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log(ratingEntity);
    },
    [ratingEntity]
  );

  const isValid = Object.values(ratingEntity.entities).every(({ rating }) => Boolean(rating));

  const submitButtonClassName = `${scss.SubmitRatingButton} ${isValid ? scss.SubmitRatingButtonValid : ''}`;

  const tooltipClassName = `${scss.SubmitRatingButtonTooltip} ${isValid ? scss.SubmitRatingButtonTooltipValid : ''}`;

  return (
    <div className={scss.ContentWrapper}>
      <div className={scss.CloseButtonWrapper}>
        <CloseFeedbackModalButton closeModal={closeModal} />
      </div>

      <form className={scss.RateBookingVariantForm} onSubmit={onRatingSubmit}>
        <h2 className={scss.RateBookingVariantModalTitle}>
          <img className={scss.StarIcon} src={iconStar} alt="star" />
          <span>{t('rateYourStay')}</span>
        </h2>

        <ul className={scss.RateBookingVariantModalRatingRows}>
          {ratingEntity.ids.map(ratingItemId => {
            const { label, rating } = ratingEntity.entities[ratingItemId];

            return (
              <RatingItem
                key={ratingItemId}
                id={ratingItemId}
                label={label}
                rating={rating}
                chooseRating={chooseRating}
              />
            );
          })}
        </ul>

        <div className={scss.SubmitButtonWrapper}>
          <button className={submitButtonClassName} type="submit">
            {t('submitRating')}
          </button>

          <div className={tooltipClassName}>
            <span className={scss.BookingKarmaTooltipNumber}>+&nbsp;1</span>
            <img className={scss.BookingKarmaTooltipCarmaIcon} src={iconCarma} alt="carma clock" />
            <span className={scss.BookingKarmaTooltipText}>
              Booking <br />
              Karma
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
