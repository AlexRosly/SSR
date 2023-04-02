import { useMedia } from 'hooks/UI';

import { CommonContainer } from 'components/Common/CommonContainer';
import { Beta } from 'components/Beta';
import { ImageGallery } from './ImageGallery';
import { Advantages } from 'components/Hotelier';
import { CompanyDescription } from './CompanyDescription';
import { InstructionHotelier } from 'components/Hotelier';
import { CitiesCards } from './CitiesCards';
import { CEOSpeech } from './CEOSpeech';
import { RentListMainHotelier } from './RentList';
import { Aside } from 'components/Common/Aside';
import { Reviews } from 'components/Common/Reviews';
import { Footer } from 'components/Common/Footer';

import s from './MainHotelier.module.scss';

import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'features';
import { useAppSelector } from 'features';
import { AddObjectModal } from '../../components/AddObject/ObjectModal';
import { ObjectAddDocuments } from '../../components/AddObject/ObjectAddDocuments';
import { objectTabs, ObjectTabsNavigation } from '../../components/AddObject/ObjectTabsNavigation'
import { Toaster } from 'react-hot-toast';
import { useModal } from 'hooks/UI';
import '../../components/AddObject/AddObject.scss'

import { CABINET_HOTELIER } from 'navigation/CONSTANTS';

import {resetObjectState,
  selectActiveObjectId,
  selectIsEditingExistingObjectBeforeVerification,
  selectObjectActiveTabId,
} from 'features/objects';



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



const RentListWrapper = () => (
  <div className={s.linksWrapper}>
    <RentListMainHotelier />
  </div>
);

const MobileView = ({openModal}:any) => (
  <>
    <main className={s.main}>
      <div className={s.smallGap}>
        <ImageGallery />

        <div>
          <Advantages openModal={openModal} />
          <CompanyDescription />
          <InstructionHotelier />
        </div>

        <RentListWrapper />

        <CitiesCards />
        <Reviews />
      </div>

      <CEOSpeech />
      <Beta />
    </main>
  </>
);

const TabletView = ({openModal}:any) => (
  <>
    <main className={s.main}>
      <ImageGallery />

      <div>
        <Advantages openModal={openModal}/>
        <CompanyDescription />
        <InstructionHotelier />
      </div>

      <div className={s.reviewsTabletWrapper}>
        <Reviews />
        <RentListWrapper />
      </div>

      <CitiesCards />

      <CEOSpeech />
    </main>

    <Footer className={s.footerTablet} />
  </>
);

const DesktopView = ({openModal}:any) => (
  <>
    <main className={s.main}>
      <Beta />

      <ImageGallery />
      <Advantages openModal={openModal}/>
      <CompanyDescription />
      <InstructionHotelier />

      <CitiesCards />

      <CEOSpeech />
    </main>

    <Aside>
      <RentListWrapper />
    </Aside>
  </>
);

const MainHotelier = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();

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
    <CommonContainer className={s.mainHotelier}>
      <div className={s.mainHotelierContainer}>
        {isMobile && <MobileView openModal={openModal}/>}
        {isTablet && <TabletView openModal={openModal}/>}
        {isDesktop && <DesktopView openModal={openModal}/>}
      </div>
                {isModalOpen && <AddObjectModal isModalOpen={isModalOpen} closeModal={closeModal}>
            <ObjectTabsModalContent times={times} setFinishTime={setFinishTime} />
             <Toaster position="bottom-center" toastOptions={{ duration: 3500 }} />
          </AddObjectModal>}

    </CommonContainer>
  );
};

export default MainHotelier;
