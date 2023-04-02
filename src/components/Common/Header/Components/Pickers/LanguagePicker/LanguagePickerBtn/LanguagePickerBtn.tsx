import { selectActiveLang } from 'features/common';
import { useAppSelector } from 'features';

import { TogglePickerButton } from '../../TogglePickerButton';
import scss from './LanguagePickerBtn.module.scss';

export const LanguagePickerBtn = () => {
  const activeLanguageCode = useAppSelector(selectActiveLang);

  return (
    <TogglePickerButton className={scss.languagePickerBtn} title={'Select language'}>
      {activeLanguageCode}
    </TogglePickerButton>
  );
};
