import type { EntityId } from '@reduxjs/toolkit';

const userTypesArr = ['hotelier', 'agent', 'user'] as const;
export const allowedUserTypesArr = Object.freeze(userTypesArr);

export type UserType = typeof allowedUserTypesArr[number];

type CommonUser = {
  _id: EntityId;
  name: string;
  surname: string;
  email: string;
  photo: string;
};

export type Hotelier = CommonUser & {
  userType: typeof allowedUserTypesArr[0];
};

export type Agent = CommonUser & {
  userType: typeof allowedUserTypesArr[1];
};

export type User = CommonUser & {
  userType: typeof allowedUserTypesArr[2];
};

export const TEST_USER: User = {
  _id: 'user0000000000000000',
  userType: 'user',
  name: 'Игорь',
  surname: 'Петров',
  email: 'user@mail.com',
  photo: '',
};

export const TEST_AGENT: Agent = {
  _id: 'agent0000000000000001',
  userType: 'agent',
  name: 'Agent',
  surname: 'Smith',
  email: 'agent@mail.com',
  photo: '',
};

export const TEST_HOTELIER: Hotelier = {
  _id: 'hotelier0000000000000002',
  userType: 'hotelier',
  name: 'John',
  surname: 'Snow',
  email: 'hotelier@mail.com',
  photo: '',
};

export type USERS = Hotelier | Agent | User;
export type HOTELIER_BOOLEANS = { user: Hotelier; isHotelier: true; isAgent: false; isUser: false; isNobody: false };
export type AGENT_BOOLEANS = { user: Agent; isHotelier: false; isAgent: true; isUser: false; isNobody: false };
export type USER_BOOLEANS = { user: User; isHotelier: false; isAgent: false; isUser: true; isNobody: false };
export type NOBODY_BOOLEANS = { user: null; isHotelier: false; isAgent: false; isUser: false; isNobody: true };

export type AuthState = HOTELIER_BOOLEANS | AGENT_BOOLEANS | USER_BOOLEANS | NOBODY_BOOLEANS;

export type AuthReducerState = Pick<AuthState, 'user'>;

const initUser = { user: null };

export const authReducerInitialState: AuthReducerState = initUser;

export const authContextInitialState: NOBODY_BOOLEANS = {
  ...initUser,
  isHotelier: false,
  isAgent: false,
  isUser: false,
  isNobody: true,
};

const authActions = ['chooseUserType', 'setUserEmail', 'logIn', 'logOut'] as const;

export type TChooseUserType = { type: 'chooseUserType'; payload: UserType };
export type TSetUserEmail = { type: 'setUserEmail'; payload: string };
export type TLogIn = { type: 'logIn'; payload: USERS };
export type TLogOut = { type: 'logOut'; payload?: undefined };

export const chooseUserType = (payload: UserType) => ({ type: authActions[0], payload });
export const setUserEmail = (payload: string) => ({ type: authActions[1], payload });
export const logIn = (payload: USERS) => ({ type: authActions[2], payload });
export const logOut = () => ({ type: authActions[3] });

export type AuthReducerPayloadAction = TChooseUserType | TSetUserEmail | TLogIn | TLogOut;

export const authReducer = (state: AuthReducerState, { type, payload }: AuthReducerPayloadAction): AuthReducerState => {
  switch (type) {
    case authActions[0]:
      return !state.user ? state : { ...state, user: { ...state.user, userType: payload } };

    case authActions[1]:
      return !state.user ? state : { ...state, user: { ...state.user, email: payload } };

    case authActions[2]:
      return { ...state, user: payload };

    case authActions[3]:
      return { ...state, user: null };

    default:
      return state;
  }
};
