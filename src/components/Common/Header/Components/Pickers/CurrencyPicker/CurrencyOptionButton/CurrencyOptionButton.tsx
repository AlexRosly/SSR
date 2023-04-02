import { EntityId } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from 'features';
import { chooseCurrency, selectActiveCurrencyId } from 'features/common';
import { ReactNode, useCallback } from 'react';
import { usePickerContext } from '../../PickerContext';

import scss from './CurrencyOptionButton.module.scss';

type CurrencyOptionButtonProps = {
  optionId: EntityId;
  title?: string;
  children: ReactNode;
};

export const CurrencyOptionButton = ({ optionId, title, children }: CurrencyOptionButtonProps) => {
  const activeCurrencyId = useAppSelector(selectActiveCurrencyId);
  const [{ isDark }] = usePickerContext();

  const appDispatch = useAppDispatch();

  const onClickChooseCurrency = useCallback(() => {
    appDispatch(chooseCurrency(optionId));
  }, [appDispatch, optionId]);

  const dark = isDark ? scss.dark : '';
  const active = optionId === activeCurrencyId ? scss.active : '';

  return (
    <button
      className={`${scss.currencyOptionButton} ${dark} ${active}`}
      onClick={onClickChooseCurrency}
      type="button"
      title={title}
    >
      {children}
    </button>
  );
};
