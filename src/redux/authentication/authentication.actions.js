import { AUTH_CODE, AUTH_PAGE, AUTH_PHONE, SHOW_TEXT } from "./authentication.types";

export const setPage = (item) => ({
  type: AUTH_PAGE,
  payload: item,
});
export const setCode = (item) => ({
  type: AUTH_CODE,
  payload: item,
});

export const setAuthPhone = (item) => ({
  type: AUTH_PHONE,
  payload: item,
});
export const setShowText = (item) => ({
  type: SHOW_TEXT,
  payload: item,
});
