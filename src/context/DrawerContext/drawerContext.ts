import type { Dispatch } from 'react';
import type { DrawerReducerPayloadAction, DrawerState } from './drawerReducer';
import { createContext } from 'react';

export type TDrawerContext = [DrawerState, Dispatch<DrawerReducerPayloadAction>];

export const initDrawerState: DrawerState = {
  isDrawerOpen: false,
};

export const drawerCtx = createContext<TDrawerContext>([initDrawerState, () => {}]);
