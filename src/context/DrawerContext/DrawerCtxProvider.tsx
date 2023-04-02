import type { ReactNode } from 'react';
import { useDrawerReducer } from './useDrawerReducer';
import { drawerCtx } from './drawerContext';

export const DrawerCtxProvider = ({ children }: { children: ReactNode }) => {
  const ctx = useDrawerReducer();
  return <drawerCtx.Provider value={ctx}>{children}</drawerCtx.Provider>;
};
