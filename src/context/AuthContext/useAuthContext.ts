import { useContext } from 'react';
import { authCtx } from './authContext';

export const useAuthContext = () => useContext(authCtx);
