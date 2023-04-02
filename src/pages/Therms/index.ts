import { lazy } from 'react';

export const PolicyAgents = lazy(() => import(/* webpackChunkName: "PolicyAgents" */ './PolicyAgents'));
export const PolicyHoteliers = lazy(() => import(/* webpackChunkName: "PolicyHoteliers" */ './PolicyHoteliers'));
export const PolicyUsers = lazy(() => import(/* webpackChunkName: "PolicyUsers" */ './PolicyUsers'));
export const TermsAgents = lazy(() => import(/* webpackChunkName: "TermsAgents" */ './TermsAgents'));
export const TermsHoteliers = lazy(() => import(/* webpackChunkName: "TermsHoteliers" */ './TermsHoteliers'));
export const TermsUsers = lazy(() => import(/* webpackChunkName: "TermsUsers" */ './TermsUsers'));
