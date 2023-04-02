import { useAppDispatch, useAppSelector } from 'features';
import {
  objectOpenNextTab,
  selectActiveObjectId,
  selectObjectActiveTabId,
  selectObjectEditedFields,
  selectObjectStatus,
  setIsEditingExistingObjectBeforeVerification,
} from 'features/objects';
import { useCallback, useMemo } from 'react';
import { objectTabs } from './ObjectTabs';

const lastTabId = objectTabs.ids.length - 1;

export const useObjectNextTab = () => {
  const status = useAppSelector(selectObjectStatus);
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const activeObjectIdFromBackend = useAppSelector(selectActiveObjectId);
  const isEdited = useAppSelector(selectObjectEditedFields).length;

  const appDispatch = useAppDispatch();

  const isLastTab = lastTabId === activeTabId;

  const isLessThanLastTabId = activeTabId < lastTabId;

  // creation function
  const showInCreationMode = !activeObjectIdFromBackend && isLessThanLastTabId;

  // edit function
  const isModified = activeObjectIdFromBackend && isEdited;
  const isVisibleInEditorModeAndNotEdited = activeObjectIdFromBackend && !isEdited;
  const isVisibleInEditorModeAndNotEditedAndIsLastTab = isVisibleInEditorModeAndNotEdited && isLastTab;

  const openNextTab = useCallback(() => {
    if (!status) return;

    // creation function
    if (showInCreationMode || isLessThanLastTabId) {
      appDispatch(objectOpenNextTab());
      return;
    }

    if (isVisibleInEditorModeAndNotEditedAndIsLastTab) {
      appDispatch(setIsEditingExistingObjectBeforeVerification(false));
      return;
    }
  }, [isLessThanLastTabId, isVisibleInEditorModeAndNotEditedAndIsLastTab, showInCreationMode, status, appDispatch]);

  // edit function
  const showInEditorMode = isVisibleInEditorModeAndNotEdited || (isModified && isLessThanLastTabId);

  // is 'next' arrow-button visible
  const showNextButton = showInCreationMode || showInEditorMode;

  return useMemo(() => [showNextButton, openNextTab] as const, [showNextButton, openNextTab]);
};
