import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from 'features';
import { useGetHotelQuery } from 'features/hotels';
import {
  resetObjectState,
  selectActiveObjectId,
  selectIsEditingExistingObjectBeforeVerification,
  selectObjectActiveTabId,
} from 'features/objects';

import { ObjectAddDocuments } from './ObjectAddDocuments';
import { AddObjectModal } from './ObjectModal';
import { objectTabs, ObjectTabsNavigation } from './ObjectTabsNavigation';
import { AddObjectButton } from './AddObjectButton';

import './AddObject.scss';
import { CABINET_HOTELIER } from 'navigation/CONSTANTS';
import { useModal } from 'hooks/UI';

type ObjectTabsModalContentProps = {
  times: [number, number];
  setFinishTime: () => void;
};

const useUpdateDocumentTitle = () => {
  const [prevTitle] = useState(document?.title);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!document?.title) return () => {};

    if (pathname === CABINET_HOTELIER && !document.title.includes('Add object')) {
      document.title += '| Add object';
    }

    return () => {
      if (prevTitle !== document.title) {
        document.title = prevTitle;
      }
    };
  }, [pathname, prevTitle]);
};

/*
   const isLocalEmpty = !status && !isSubmitted;
   const isLocalFilled = status && !isSubmitted;
   const isLocalSubmitted = status && isSubmitted;
   const isResponseReceived = status && isSubmitted && isReceived1;
   const isResponseReceivedAndGoBack = status && isSubmitted && received1 && goback;
   const isResponseReceivedAndGoBackAndGoForward = status && isSubmitted && received1 && goback && goForward;
   const isResponseReceivedAndGoBackAndEdit = status && isSubmitted && received1 && goback && edit;
   const isResponseReceivedAndGoBackAndEditAndResubmit = status && isSubmitted && received && goback && resubmit;
   const isResponseReceivedAndGoBackAndEditAndResubmitAndResponseReceived = status && isSubmitted && received1 && goback && resubmit && received2;

 1. Де будуть жити локальні дані форми?
    В редаксі. Чому? Бо треба буде ці дані записувати у різні частини форми.
 2. Де буде жити відповідь з беку?
    На ендпоінті в api в redux. Чому? Бо дані з беку прийдуть, і ми їх закешуємо за допомогою createApi.
 3. Як записати дані
    3.1 у локальний стейт спочатку пусті? - це початковий стан із редаксу та локальний стейт форми.
    3.2 потім локально заповнені? - локально зчитуємо інпут, закидуємо в редакс. Рендеримо із редаксу.
    3.3 потім заповнені відповіддю із беку? Отримуємо відповідь із беку. Записуємо в редакс. Із редаксу рендеримо.
    3.4 потім заповнені вручну заново? - локально зчитуємо інпут, закидуємо в редакс. Рендеримо із редаксу, і якщо поредагували, то в кінці можна зробити ресабміт.

    треба виставити 4 пріоритети - чим більший номер, тим більший пріоритет.
*/

const ActiveTab = () => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const Element = objectTabs.entities?.[activeTabId]?.Element;
  return Element ? <Element key={activeTabId} /> : <div>Empty component</div>;
};

const ObjectTabsModalContent = ({ times, setFinishTime }: ObjectTabsModalContentProps) => {
  useUpdateDocumentTitle();

  const isEditingExistingObjectBeforeVerification = useAppSelector(selectIsEditingExistingObjectBeforeVerification);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const showForm = !activeObjectId || (activeObjectId && isEditingExistingObjectBeforeVerification);

  const showAddDocumentPage = activeObjectId && !isEditingExistingObjectBeforeVerification;

  return (
    <>
      {showForm ? (
        <>
          <ActiveTab />
          <ObjectTabsNavigation />
        </>
      ) : null}

      {showAddDocumentPage ? <ObjectAddDocuments times={times} setFinishTime={setFinishTime} /> : null}
    </>
  );
};

const initialState: [number, number] = [0, 0];

const AddObject = () => {

  const activeObjectId = useAppSelector(selectActiveObjectId);

  useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({
      addedHotel: data?.entities?.[activeObjectId],
    }),
    skip: !activeObjectId,
  });

  const appDispatch = useAppDispatch();

  const [isModalOpen, showModal, hideModal] = useModal();
  const [times, setTimes] = useState<[number, number]>(initialState);

  const setFinishTime = useCallback(() => setTimes(prev => [prev[0], Date.now()]), []);

  const openModal = useCallback(() => {
    showModal();
    setTimes([Date.now(), 0]);
  }, [showModal]);

  const closeModal = useCallback(() => {
    hideModal();
    appDispatch(resetObjectState());
    setTimes(initialState);
  }, [hideModal, appDispatch]);

  return (
    <div className="container-object">
      <div className="object">
        <AddObjectButton openModal={openModal} />

        <AddObjectModal isModalOpen={isModalOpen} closeModal={closeModal}>
          <ObjectTabsModalContent times={times} setFinishTime={setFinishTime} />

          <Toaster position="bottom-center" toastOptions={{ duration: 3500 }} />
        </AddObjectModal>
      </div>
    </div>
  );
};

export default AddObject;
