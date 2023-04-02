import { useTranslation } from 'react-i18next';
import scss from './LoginOrRegisterBtn.module.scss';

export const LoginOrRegisterBtn = () => {
  const { t } = useTranslation();

  return (
    <button className={scss.loginOrRegisterBtn} type="button">
      {t('loginOrRegister')}
    </button>
  );
};
