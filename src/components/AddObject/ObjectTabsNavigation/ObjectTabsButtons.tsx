import { useAppSelector } from 'features';
import { selectObjectActiveTabId } from 'features/objects';
import { AddObjectSubmitForm } from '../AddObjectSubmitForm';
import { objectTabs } from './ObjectTabs';
import { NextButton } from './ObjectTabsNextButton';
import { PrevButton } from './ObjectTabsPrevButton';
import { useObjectNextTab } from './useObjectNextTab';

const lastTabId = objectTabs.ids.length - 1; // 8

export const ObjectTabsButtons = () => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const isLastTab = lastTabId === activeTabId;
  const [isShowNextButton] = useObjectNextTab();

  const showSubmitForm = isLastTab;

  return (
    <div className="selecthouse-list-direction-wrapper">
      {showSubmitForm && <AddObjectSubmitForm />}

      <ul className="selecthouse-list-direction">
        <li className="selecthouse-listDirection-item">
          <PrevButton />
        </li>

        <li className="selecthouse-listDirection-item">{isShowNextButton && <NextButton />}</li>
      </ul>
    </div>
  );
};
