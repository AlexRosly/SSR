import { useAppDispatch, useAppSelector } from 'features';
import { objectOpenPrevTab, selectObjectActiveTabId } from 'features/objects';
import { useCallback } from 'react';
import { ObjectIcon } from '../ObjectIcon';
import { objectTabs } from './ObjectTabs';

const lastTabId = objectTabs.ids.length - 1;

export const PrevButton = () => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);

  const appDispatch = useAppDispatch();

  const isPrevDisabled = activeTabId <= 0 || activeTabId > lastTabId;

  const prev = useCallback(() => {
    if (isPrevDisabled) return;

    appDispatch(objectOpenPrevTab());
  }, [isPrevDisabled, appDispatch]);

  const prevTabIconClass = `selecthouse-listDirection-iconLeft ${isPrevDisabled ? '' : 'active'}`;

  return (
    <button className="selecthouse-listDirection-buttonLeft" onClick={prev} disabled={isPrevDisabled} type="button">
      <ObjectIcon className={prevTabIconClass} iconId="right" />
    </button>
  );
};
