import { useAppSelector } from 'features';
import { selectActiveCurrencyCode, selectActiveCurrencyText } from 'features/common';
import { TogglePickerButton } from '../../TogglePickerButton';

import scss from './CurrencyPickerBtn.module.scss';

export const CurrencyPickerBtn = () => {
  const text = useAppSelector(selectActiveCurrencyText);
  const code = useAppSelector(selectActiveCurrencyCode);

  const currency = text.length > 9 ? text.split(' ')[0] : text;

  return (
    <TogglePickerButton className={scss.currencyPickerBtn} title={'Select currency'}>
      <span>{currency}</span>
      <span>{code}</span>
    </TogglePickerButton>
  );
};
