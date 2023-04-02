import type { Dispatch } from 'react';
import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { LanguageFrontend, CurrencyFrontend, Mode } from 'types';

export enum TPicker {
  open = 'open',
  close = 'close',
  toggle = 'toggle',
  onOptionClick = 'onOptionClick',
  setPickerTheme = 'setPickerTheme',
  setPickerToggleButtonRef = 'setPickerToggleButtonRef',
}

export type OpenPicker = { type: TPicker.open };
export type ClosePicker = { type: TPicker.close };
export type TogglePicker = { type: TPicker.toggle };
export type OnOptionClick = { type: TPicker.onOptionClick; payload: EntityId };
export type SetPickerTheme = { type: TPicker.setPickerTheme; payload: Mode };

export type PickerActions = OpenPicker | ClosePicker | TogglePicker | OnOptionClick | SetPickerTheme;

type PickerOption = LanguageFrontend | CurrencyFrontend;
export type PickerOptions = EntityState<PickerOption>;

export type TPickerState = {
  isDropdownOpen: boolean;
  activeOptionId: EntityId;
  options: PickerOptions;
  theme: Mode;
};

export type TPickerCtx = TPickerState & {
  isDark: boolean;
};

export type PickerContext = [TPickerCtx, Dispatch<PickerActions>];

export const initPickerState: TPickerCtx = {
  isDropdownOpen: false,
  activeOptionId: '',

  options: { ids: [], entities: {} },
  theme: 'light',
  isDark: false,
};
