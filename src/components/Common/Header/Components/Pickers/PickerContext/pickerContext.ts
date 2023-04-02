import type { PickerContext } from '../pickerTypes';
import { initPickerState } from '../pickerTypes';
import { createContext } from 'react';

const initPickerCtx: PickerContext = [initPickerState, () => {}];

export const pickerContext = createContext<PickerContext>(initPickerCtx);
