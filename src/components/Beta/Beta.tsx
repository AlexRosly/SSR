import { Logo } from 'components/Common/Header/Components/Logo';
import { useTranslation } from 'react-i18next';
import scss from './Beta.module.scss';

export const Beta = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation('mainHotelier');

  return (
    <div className={`${scss.betaOverlay} ${className}`}>
      <p className={scss.betaText}>{t('betaIndicator')}</p>

      <Logo linkClassName={scss.betaLink} />
    </div>
  );
};
