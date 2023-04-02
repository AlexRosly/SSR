import { useAppSelector } from 'features';
import { selectObjectStatus } from 'features/objects';
import { ObjectIcon } from '../ObjectIcon';
import { useObjectNextTab } from './useObjectNextTab';

export const NextButton = () => {
  const status = useAppSelector(selectObjectStatus);
  const [isShowNextButton, openNextTab] = useObjectNextTab();

  const nextTabIconClass = `selecthouse-listDirection-iconRight ${status ? 'active' : ''}`;

  return (
    <button
      className="selecthouse-listDirection-buttonRight"
      onClick={openNextTab}
      disabled={!isShowNextButton}
      type="button"
    >
      <ObjectIcon className={nextTabIconClass} iconId="right" />
    </button>
  );
};
