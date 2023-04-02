import type { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from 'features';
import { selectCurrencyById, selectLanguageById } from 'features/common';
import { ReactNode, useCallback } from 'react';
import { CurrencyOptionButton } from '../CurrencyPicker/CurrencyOptionButton';
import { LanguageOptionButton } from '../LanguagePicker/LanguageOptionButton';
import { choosePickerOption, usePickerContext } from '../PickerContext';
import scss from './OptionItem.module.scss';

type OptionItemProps = { optionId: EntityId };

const OptionButton = ({ children, optionId }: { children: ReactNode; optionId: EntityId }) => {
  const [{ isDark, activeOptionId }, dispatch] = usePickerContext();

  const chooseOption = useCallback(() => {
    dispatch(choosePickerOption(optionId));
  }, [dispatch, optionId]);

  const dark = isDark ? scss.dark : '';
  const active = optionId === activeOptionId ? scss.active : '';
  console.log({ optionId, activeOptionId });

  return (
    <button className={`${scss.optionButton} ${dark} ${active}`} onClick={chooseOption} type="button">
      {children}
    </button>
  );
};

export const OptionItem = ({ optionId }: OptionItemProps) => {
  const [{ options }] = usePickerContext();

  const item = options.entities?.[optionId];
  if (!item) return null;
  const { text, value } = item;

  return (
    <li className={scss.optionsItem}>
      <OptionButton optionId={optionId}>
        {text}&nbsp;&nbsp;&nbsp;&nbsp;{value}
      </OptionButton>
    </li>
  );
};

export const LanguageOptionItem = ({ optionId }: OptionItemProps) => {
  const languageFrontend = useAppSelector(state => selectLanguageById(state, optionId));
  if (!languageFrontend) return null;
  const { text, value } = languageFrontend;
  const lowercaseLanguageCode = value.toLowerCase();

  return (
    <li className={scss.optionsItem}>
      <LanguageOptionButton optionId={optionId}>
        <span>{text}</span>
        <span>{lowercaseLanguageCode}</span>
      </LanguageOptionButton>
    </li>
  );
};

export const CurrencyOptionItem = ({ optionId }: OptionItemProps) => {
  const currencyFrontend = useAppSelector(state => selectCurrencyById(state, optionId));
  if (!currencyFrontend) return null;
  const { text, value } = currencyFrontend;

  return (
    <li className={scss.optionsItem}>
      <CurrencyOptionButton optionId={optionId} title={`${text} ${value}`}>
        <span>{text}</span>
        <span>{value}</span>
      </CurrencyOptionButton>
    </li>
  );
};
