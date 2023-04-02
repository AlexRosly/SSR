import { useTranslation } from 'react-i18next';
import scss from './ExitButton.module.scss';

export const ExitButton = () => {
  const { t } = useTranslation();
  return <button className={scss.exitBtn}>{t('exitButton')}</button>;
};
