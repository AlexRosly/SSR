import { lazy } from 'react';

export * from './PrivateRoute';

export const Login = lazy(() => import(/* webpackChunkName: "Login" */ './Login'));
export const Registration = lazy(() => import(/* webpackChunkName: "Registration" */ './Registration'));
