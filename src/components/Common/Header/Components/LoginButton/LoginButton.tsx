import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import scss from './LoginButton.module.scss';
import { LOGIN_HOTELIER } from 'navigation/CONSTANTS';
import { Link } from 'react-router-dom';
export const LoginButton = () => {
	const { t } = useTranslation();
	const linkToLoginPage = LOGIN_HOTELIER;
	const onClickLogIn = useCallback(() => {}, []);

	return (
		<Link className={scss.loginButton} onClick={onClickLogIn} to={linkToLoginPage}>
			{t('login')}
		</Link>
		// <button className={scss.loginButton} onClick={onClickLogIn}>
		// 	{t('login')}
		// </button>
	);
};
