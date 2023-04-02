import type { Dispatch } from 'react';
import { createContext } from 'react';
import type { AuthState, AuthReducerPayloadAction } from './authReducer';
import { authContextInitialState } from './authReducer';

export type TAuthContext = [AuthState, Dispatch<AuthReducerPayloadAction>];

export const authCtx = createContext<TAuthContext>([authContextInitialState, () => {}]);
