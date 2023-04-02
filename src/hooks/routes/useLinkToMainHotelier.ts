import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import { MAIN_HOTELIER_EN, MAIN_HOTELIER_PL, MAIN_HOTELIER_RU, MAIN_HOTELIER_UK } from 'navigation/CONSTANTS';

export const useLinkToMainHotelier = () => {
  const lang = useAppSelector(selectActiveLang);

  switch (lang) {
    case 'en':
      return MAIN_HOTELIER_EN;

    case 'uk':
      return MAIN_HOTELIER_UK;

    case 'pl':
      return MAIN_HOTELIER_PL;

    case 'ru':
      return MAIN_HOTELIER_RU;

    default:
      return MAIN_HOTELIER_EN;
  }
};
