import type { EntityId } from '@reduxjs/toolkit';
import scss from './Reviews.module.scss';

export type TReview = { id: EntityId; text: string };

export const ReviewsList = ({ reviews }: { reviews: TReview[] }) => (
  <ul className={scss.reviewsList}>
    {reviews.map(review => (
      <li className={scss.reviewItem} key={review?.id}>
        <p className={scss.reviewText}>{review?.text}</p>
      </li>
    ))}
  </ul>
);
