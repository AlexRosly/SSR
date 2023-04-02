import { lazy } from 'react';

export const AccountSetting = lazy(() => import(/* webpackChunkName: "AccountSetting" */ './AccountSetting'));
export const Finances = lazy(() => import(/* webpackChunkName: "Finances" */ './Finances'));
export const FeedbackReviews = lazy(() => import(/* webpackChunkName: "FeedbackReviews" */ './FeedbackReviews'));
export const SmsSettings = lazy(() => import(/* webpackChunkName: "SmsSettings" */ './SmsSettings'));
export const HistorySales = lazy(() => import(/* webpackChunkName: "HistorySales" */ './HistorySales'));

export const UserAccountSetting = lazy(
  () => import(/* webpackChunkName: "UserAccountSetting" */ './UserAccountSetting')
);
export const UserSmsSettings = lazy(() => import(/* webpackChunkName: "UserSmsSettings" */ './UserSmsSettings'));
export const UserBookingKarma = lazy(() => import(/* webpackChunkName: "UserBookingKarma" */ './UserBookingKarma'));
export const UserBookingHistory = lazy(
  () => import(/* webpackChunkName: "UserBookingHistory" */ './UserBookingHistory')
);
