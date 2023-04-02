import type { EntityId } from '@reduxjs/toolkit';
import type { Mode } from 'types';
import type { OpenPicker, ClosePicker, TogglePicker, OnOptionClick, SetPickerTheme } from '../pickerTypes';
import { TPicker } from '../pickerTypes';

export const openPicker = (): OpenPicker => ({ type: TPicker.open });
export const closePicker = (): ClosePicker => ({ type: TPicker.close });
export const togglePicker = (): TogglePicker => ({ type: TPicker.toggle });
export const choosePickerOption = (payload: EntityId): OnOptionClick => ({ type: TPicker.onOptionClick, payload });
export const setPickerTheme = (payload: Mode): SetPickerTheme => ({ type: TPicker.setPickerTheme, payload });
