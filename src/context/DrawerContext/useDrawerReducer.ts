import type { TDrawerContext } from './drawerContext';
import { useMemo, useReducer } from 'react';
import { drawerReducer } from './drawerReducer';
import { initDrawerState } from './drawerContext';

export const useDrawerReducer = (): TDrawerContext => {
  const [{ isDrawerOpen }, dispatch] = useReducer(drawerReducer, initDrawerState);
  return useMemo(() => [{ isDrawerOpen }, dispatch], [isDrawerOpen]);
};
