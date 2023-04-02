import { AUTH_CODE, AUTH_PAGE, AUTH_PHONE, SHOW_TEXT } from "./authentication.types";

const initialState = {
  page: 0,
  code: null,
  phone: null,
  isShowText: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PAGE:
      return {
        ...state,
        page: +action.payload,
      };
    case AUTH_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case AUTH_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SHOW_TEXT:
      return {
        ...state,
        isShowText: action.payload,
      };

    default:
      return state;
  }
};

export const authPage = (state) => state.auth.page;
export const authCode = (state) => state.auth.code;
export const authPhone = (state) => state.auth.phone; 
export const userCardShowText = (state) => state.auth.isShowText; 
