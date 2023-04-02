import { useAppSelector } from 'features';
import { selectObjectActiveTabId } from 'features/objects';
import { ObjectTabsDots } from './ObjectTabsDots';
import { ObjectTabsButtons } from './ObjectTabsButtons';

export const ObjectTabsNavigation = () => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);

  if (activeTabId === undefined) return null;

  return (
    <div className="object__navigation">
      <ObjectTabsButtons />
      <ObjectTabsDots />
    </div>
  );
};
