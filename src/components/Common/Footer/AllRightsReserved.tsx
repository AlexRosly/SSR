import { useTranslation } from 'react-i18next';
import scss from './Footer.module.scss';

export const AllRightsReserved = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const text = t('allRightsReserved', { currentYear });

  return <p className={scss.footerAllRightsReserved}>{text}</p>;
};
