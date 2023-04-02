import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const language = useAppSelector(selectActiveLang);

  useEffect(() => {
    // This is one time set of language on App mount, no need to rerun on each render.
    i18n.changeLanguage(language);

    // no need array of dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
