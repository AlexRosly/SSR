import type { Mode } from 'types';
import { PickerContextProvider } from '../PickerContext';
import { Picker, PickerDropdown, CurrencyOptionsList } from '../Parts';
import { CurrencyPickerBtn } from './CurrencyPickerBtn';

export const CurrencyPicker = ({ mode }: { mode?: Mode }) => (
  <PickerContextProvider mode={mode}>
    <Picker>
      <CurrencyPickerBtn />

      <PickerDropdown>
        <CurrencyPickerBtn />
        <CurrencyOptionsList />
      </PickerDropdown>
    </Picker>
  </PickerContextProvider>
);
