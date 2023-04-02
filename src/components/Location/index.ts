import { lazy } from 'react';

export const UserCatalog = lazy(() => import(/* webpackChunkName: "UserCatalog" */ './Location'));
