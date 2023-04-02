import type { Agent, AuthState, Hotelier, User } from './authReducer';
import { useMemo, useReducer } from 'react';
import { TAuthContext } from './authContext';
import { authReducer, authReducerInitialState } from './authReducer';

const getUserObject = (user: Hotelier | Agent | User | null): AuthState => {
  if (!user) return { user, isHotelier: false, isAgent: false, isUser: false, isNobody: true };

  const { userType } = user;

  switch (userType) {
    case 'hotelier':
      return { user, isHotelier: true, isAgent: false, isUser: false, isNobody: false };

    case 'agent':
      return { user, isHotelier: false, isAgent: true, isUser: false, isNobody: false };

    case 'user':
      return { user, isHotelier: false, isAgent: false, isUser: true, isNobody: false };
  }
};

export const useAuthReducer = (): TAuthContext => {
  const [{ user }, dispatch] = useReducer(authReducer, authReducerInitialState);

  return useMemo(() => [getUserObject(user), dispatch], [user]);
};
