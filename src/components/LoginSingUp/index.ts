import { lazy } from 'react';

export const LoginUser = lazy(() => import(/* webpackChunkName: "LoginUser" */ './LoginUser/LoginUser'));
export const RegisterUser = lazy(() => import(/* webpackChunkName: "RegisterUser" */ './RegisterUser/RegisterUser'));
export const RegisterHotelier = lazy(
  () => import(/* webpackChunkName: "RegisterHotelier" */ './RegisterHotelier/RegisterHotelier')
);
export const LoginHotelier = lazy(
  () => import(/* webpackChunkName: "LoginHotelier" */ './LoginHotelier/LoginHotelier')
);
export const LoginAgent = lazy(() => import(/* webpackChunkName: "LoginAgent" */ './LoginAgent/LoginAgent'));
export const RegisterAgent = lazy(
  () => import(/* webpackChunkName: "registerAgent" */ './RegisterAgent/RegisterAgent')
);
