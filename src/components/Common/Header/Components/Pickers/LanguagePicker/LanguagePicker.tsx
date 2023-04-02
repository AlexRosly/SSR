import type { Mode } from 'types';
import { PickerContextProvider } from '../PickerContext';
import { Picker, PickerDropdown, LanguageOptionsList } from '../Parts';
import { LanguagePickerBtn } from './LanguagePickerBtn';

export const LanguagePicker = ({ mode }: { mode?: Mode }) => (
  <PickerContextProvider mode={mode}>
    <Picker>
      <LanguagePickerBtn />

      <PickerDropdown>
        <LanguagePickerBtn />
        <LanguageOptionsList />
      </PickerDropdown>
    </Picker>
  </PickerContextProvider>
);
