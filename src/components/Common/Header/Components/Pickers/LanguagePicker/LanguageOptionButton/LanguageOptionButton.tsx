import type { EntityId } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import { chooseLanguage, selectActiveLanguageId } from 'features/common';
import { useCallback } from 'react';
import { usePickerContext } from '../../PickerContext';

import scss from './LanguageOptionButton.module.scss';
import { useTranslation } from 'react-i18next';

type LanguageOptionButtonProps = {
  optionId: EntityId;

  children: ReactNode;
};

export const LanguageOptionButton = ({ optionId, children }: LanguageOptionButtonProps) => {
  const activeLanguageId = useAppSelector(selectActiveLanguageId);
  const { i18n } = useTranslation();
  const [{ isDark }] = usePickerContext();

  const appDispatch = useAppDispatch();

  const onClickChooseLanguage = useCallback(() => {
    appDispatch(chooseLanguage(optionId));
    if (typeof optionId !== 'string') return;
    i18n.changeLanguage(optionId);
  }, [appDispatch, i18n, optionId]);

  const dark = isDark ? scss.dark : '';
  const active = optionId === activeLanguageId ? scss.active : '';

  return (
    <button className={`${scss.languageOptionButton} ${dark} ${active}`} onClick={onClickChooseLanguage} type="button">
      {children}
    </button>
  );
};
