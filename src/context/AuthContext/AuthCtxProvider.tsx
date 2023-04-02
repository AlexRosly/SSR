import type { ReactNode } from 'react';
import { useAuthReducer } from './useAuthReducer';
import { authCtx } from './authContext';

export const AuthCtxProvider = ({ children }: { children: ReactNode }) => {
  const ctx = useAuthReducer();
  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};
