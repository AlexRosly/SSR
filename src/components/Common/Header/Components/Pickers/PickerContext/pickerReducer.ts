import type { PickerActions, TPickerState } from '../pickerTypes';
import { TPicker } from '../pickerTypes';

export const pickerReducer = (state: TPickerState, action: PickerActions): TPickerState => {
  switch (action.type) {
    case TPicker.open:
      return { ...state, isDropdownOpen: true };
    case TPicker.close:
      return { ...state, isDropdownOpen: false };
    case TPicker.toggle:
      return { ...state, isDropdownOpen: !state.isDropdownOpen };
    case TPicker.onOptionClick:
      return { ...state, activeOptionId: action.payload };
    case TPicker.setPickerTheme:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};
