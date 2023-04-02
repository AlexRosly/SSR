import type { Mode } from 'types';
import type { PickerActions, TPickerCtx } from '../pickerTypes';

import type { Dispatch, ReactNode } from 'react';
import { useMemo } from 'react';
import { usePickerReducer } from './usePickerReducer';
import { pickerContext } from './pickerContext';

export const PickerContextProvider = ({ mode, children }: { mode?: Mode; children: ReactNode }) => {
  const [state, dispatch] = usePickerReducer();

  const value: [TPickerCtx, Dispatch<PickerActions>] = useMemo(
    () => [{ ...state, isDark: (mode ?? state.theme) === 'dark' }, dispatch],
    [dispatch, mode, state]
  );

  return <pickerContext.Provider value={value}>{children}</pickerContext.Provider>;
};
