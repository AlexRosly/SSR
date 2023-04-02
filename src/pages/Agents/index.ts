import { lazy } from 'react';

export const MainAgent = lazy(() => import(/* webpackChunkName: "MainAgent" */ './MainAgent'));
