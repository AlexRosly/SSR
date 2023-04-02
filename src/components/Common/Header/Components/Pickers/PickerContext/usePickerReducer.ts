import { useReducer } from 'react';
import { initPickerState } from '../pickerTypes';
import { pickerReducer } from './pickerReducer';

export const usePickerReducer = () => useReducer(pickerReducer, initPickerState);
