import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  APART_HOTEL_CATALOG,
  CAPSULE_HOTEL_CATALOG,
  DOM_CATALOG,
  GOSTINICY_CATALOG,
  GUEST_HOUSE_CATALOG,
  HOSTEL_CATALOG,
  HOTELIER_CATALOG,
  HOTEL_CATALOG,
  KOMNATA_CATALOG,
  KVARTIRY_CATALOG,
  MOTEL_CATALOG,
  KOMNATA_DOM_CATALOG,
} from 'navigation/CONSTANTS';
import { selectActiveSearchId, selectLocalActiveObjectCity, selectSearchTerm } from 'features/search';

import catalogHotelier from '../../assets/images/catalogHotelier/Catalog_search.png';
import diamond from 'assets/images/hoteliers/diamond.png';

import { CommonContainer } from 'components/Common/CommonContainer';
import { Beta } from 'components/Beta';
import { Advantages } from 'components/Hotelier';
import { InstructionHotelier } from 'components/Hotelier';
import { Reviews } from 'components/Common/Reviews';
import { RentListHotelierCatalog } from 'pages/MainHotelier/RentList';
import { Footer } from 'components/Common/Footer';
import { useActiveRentOption } from 'components/Common/Header/Subheaders';

import s from './HotelierCatalog.module.scss';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
////////////////////////////////////////////////////
import { useState, useEffect, useCallback } from 'react';
import { AddObjectModal } from '../../components/AddObject/ObjectModal';
import { ObjectAddDocuments } from '../../components/AddObject/ObjectAddDocuments';
import { objectTabs, ObjectTabsNavigation } from '../../components/AddObject/ObjectTabsNavigation'
import { Toaster } from 'react-hot-toast';
import { useAppDispatch } from 'features';
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

const HotelierCatalog = () => {
  const { t } = useTranslation('mainHotelier');
  const activeObjectCityI18nKey = useAppSelector(selectLocalActiveObjectCity);
  const lang = useAppSelector(selectActiveLang);
  const search = useAppSelector(selectSearchTerm);
  const activeSearchId = useAppSelector(selectActiveSearchId);

  // TODO: replace api from `/api/autocomplete` to `api/search`
  const { cityName } = useGetAutocompleteQuery(
    { search, lang },
    {
      selectFromResult: ({ data }) => ({ cityName: data?.entities?.[activeSearchId]?.cityName }),
      skip: !activeSearchId,
    }
  );
  const seoLocation = useActiveRentOption();

  let cityNamePlaceholder = '';
  if (activeObjectCityI18nKey) {
    cityNamePlaceholder = t(activeObjectCityI18nKey);
  }

  const searchObject = (pathname: string) => {
  switch (pathname) {
    case HOTELIER_CATALOG:
      return (t('registrationBlockHotelierCatalog'));
    case KVARTIRY_CATALOG:
      return (t('registrationBlockHotelierFlat'));
    case KOMNATA_DOM_CATALOG:
      return (t('registrationBlockHotelierRoomInHouse'));
    case DOM_CATALOG:
      return (t('registrationBlockHotelierHouse'));
    case KOMNATA_CATALOG:
      return (t('registrationBlockHotelierRoomInFlat'));
    case HOSTEL_CATALOG:
      return (t('registrationBlockHotelierHostel'));
    case GOSTINICY_CATALOG:
      return (t('registrationBlockHotelierHotel'));
    case HOTEL_CATALOG:
      return (t('registrationBlockHotelierHotelRigthNow'));
    case MOTEL_CATALOG:
      return (t('registrationBlockHotelierMotel'));
    case APART_HOTEL_CATALOG:
      return (t('registrationBlockHotelierApartment'));
    case GUEST_HOUSE_CATALOG:
      return (t('registrationBlockHotelierGuestHouse'));
    case CAPSULE_HOTEL_CATALOG:
      return (t('registrationBlockHotelierCapsulHotel'));
    default:
      return '';
  }
  };
  
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

  const { pathname } = useLocation();
  const searchLocation = searchObject(pathname);

  return (
    <CommonContainer>
      <div className={s.hotelierCatalogContainer}>
        <Beta className={s.betaHotelierCatalog} />

        <div className={s.columnOne}>
          <Advantages openModal={openModal}/>

          <div className={s.seoActiveRentOption}>
            <div>
              <p>{seoLocation}</p>
              <p className={s.cityName}>{cityName || cityNamePlaceholder}</p>
              <p>{t('rentOnYourTerms')}</p>
            </div>

            <img
              src={catalogHotelier}
              className={s.activeRentOptionDecorImg}
              alt="magnifying glass and three circles"
            />
          </div>

          <InstructionHotelier />

          <div className={s.blockFoure}>
            <div className={s.blockFoure_general}>
              <div className={s.blockImage}>
                <img src={diamond} alt="Diamond" className={s.blockImages} />
              </div>
              <div className={s.blockFoure_texts}>
                <div>{searchLocation}</div>
              </div>
            </div>
            <div className={s.registrationBlock}>
              <div className={s.registrationBlockText}>{t('averageRegistrationDuration', { minutes: 2 })}</div>
              <button className={s.blockButton} id={s.registration} onClick={openModal}>
                    {t('registerAnObject')}
              </button>
            </div>
          </div>
        </div>

        <aside className={s.aside}>

          <div className={s.fifthBlock}>
            <Reviews />
            <div className={s.rentLinksWrapper}>
               <RentListHotelierCatalog />
            </div>
          </div>
          <Footer />
        </aside>
      </div>
          {isModalOpen && <AddObjectModal isModalOpen={isModalOpen} closeModal={closeModal}>
            <ObjectTabsModalContent times={times} setFinishTime={setFinishTime} />
             <Toaster position="bottom-center" toastOptions={{ duration: 3500 }} />
          </AddObjectModal>}

    </CommonContainer>
  );
};

export default HotelierCatalog;
