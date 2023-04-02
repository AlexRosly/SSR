import { useTranslation } from 'react-i18next';
import { ObjectIcon } from '../ObjectIcon';

type OpenModalButtonProps = { openModal: () => void };

export const AddObjectButton = ({ openModal }: OpenModalButtonProps) => {
  const { t } = useTranslation();

  return (
    <button className="object-button" type="button" onClick={openModal}>
      <span className="object-span">
        <ObjectIcon className="object-icon" iconId="plushome" />
      </span>

      <span>{t('addYourFirstObject')}</span>

      <ObjectIcon className="object-iconHome" iconId="addhome" />
    </button>
  );
};
