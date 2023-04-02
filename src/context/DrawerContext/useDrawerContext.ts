import { useContext } from 'react';
import { drawerCtx } from './drawerContext';

export const useDrawerContext = () => useContext(drawerCtx);
