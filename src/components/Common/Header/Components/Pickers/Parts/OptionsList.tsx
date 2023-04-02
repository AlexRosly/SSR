import { useAppSelector } from 'features';
import { selectCurrenciesIds, selectLanguagesIds } from 'features/common';
import { usePickerContext } from '../PickerContext';
import { CurrencyOptionItem, LanguageOptionItem, OptionItem } from './OptionItem';

import scss from './OptionsList.module.scss';

export const OptionsList = () => {
  const [{ options, isDark }] = usePickerContext();

  const listClassName = `${scss.optionsList} ${isDark ? scss.dark : ''}`;

  return (
    <ul className={listClassName}>
      {options.ids.map(id => (
        <OptionItem key={id} optionId={id} />
      ))}
    </ul>
  );
};

export const LanguageOptionsList = () => {
  const languagesIds = useAppSelector(selectLanguagesIds);
  const [{ isDark }] = usePickerContext();

  const listClassName = `${scss.optionsList} ${isDark ? scss.dark : ''}`;

  return (
    <ul className={listClassName}>
      {languagesIds.map(id => (
        <LanguageOptionItem key={id} optionId={id} />
      ))}
    </ul>
  );
};

export const CurrencyOptionsList = () => {
  const currenciesIds = useAppSelector(selectCurrenciesIds);
  const [{ isDark }] = usePickerContext();

  const listClassName = `${scss.optionsList} ${isDark ? scss.dark : ''}`;

  return (
    <ul className={listClassName}>
      {currenciesIds.map(id => (
        <CurrencyOptionItem key={id} optionId={id} />
      ))}
    </ul>
  );
};
