import { GOOGLE_PLAY_YPB } from 'navigation/CONSTANTS';
import { useTranslation } from 'react-i18next';

import scss from './DownloadAppLink.module.scss';

export const DownloadAppLink = () => {
  const { t } = useTranslation();

  return (
    <a href={GOOGLE_PLAY_YPB} target="_blank" className={scss.downloadAppLink} rel="noopener noreferrer">
      {t('useApp')}
    </a>
  );
};
