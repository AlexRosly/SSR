import { useAppDispatch, useAppSelector } from 'features';
import { objectOpenPrevTab, selectObjectActiveTabId, selectObjectStatus } from 'features/objects';
import { useCallback, useMemo } from 'react';

export const useObjectPrevTab = () => {
  const status = useAppSelector(selectObjectStatus);
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const appDispatch = useAppDispatch();

  const isPrevDisabled = activeTabId <= 0;

  const openPrevTab = useCallback(() => {
    if (!status || isPrevDisabled) return;

    appDispatch(objectOpenPrevTab());
  }, [isPrevDisabled, status, appDispatch]);

  return useMemo(() => [isPrevDisabled, openPrevTab] as const, [isPrevDisabled, openPrevTab]);
};
