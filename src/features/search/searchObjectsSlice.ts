import { createSelector, EntityId, EntityState, PayloadAction } from '@reduxjs/toolkit';
import type { CitiesCardsTranslationKeys, CountriesCardsTranslationKeys } from 'types';
import type { RootState } from 'redux/store';
import { createSlice } from '@reduxjs/toolkit';
import { makeEntity } from 'utils';

import warsawImg from 'assets/images/pages/MainHotelier/block-four/block-four-1.png';
import kyivImg from 'assets/images/pages/MainHotelier/block-four/kyiv.png';
import odesaImg from 'assets/images/pages/MainHotelier/block-four/block-four-4.png';
import newYorkImg from 'assets/images/pages/MainHotelier/block-four/block-four-3.png';

export type ObjectLocation = {
  _id: EntityId;
  country: string;
  stateName: string;
  cityName: string;
  cityImgUrl: string;
  cityImgAlt: string;
  district?: string;
  districtImgUrl?: string;
  districtImgAlt?: string;
  // only local - remove before real api call
  localImg: string;
  i18nCountry: CountriesCardsTranslationKeys;
  i18nCity: CitiesCardsTranslationKeys;
};

type SearchState = {
  objects: EntityState<ObjectLocation>;
  activeSearchId: EntityId;
  searchTerm: string;
};

const objectsArr: ObjectLocation[] = [
  {
    _id: '0',
    country: 'Польша',
    stateName: 'Мазовецкое воеводство',
    cityName: 'Варшава',
    cityImgUrl: 'https://www.treksplorer.com/wp-content/uploads/things-to-do-in-warsaw-poland-768x512.jpg',
    cityImgAlt: 'Warsaw, Masovian vojvodstvo, Poland',

    // only local, remove before actual api call
    localImg: warsawImg,
    i18nCountry: 'countryPoland',
    i18nCity: 'cityWarsaw',
  },
  {
    _id: '1',
    country: 'Украина',
    stateName: 'Киевская область',
    cityName: 'Киев',
    cityImgUrl: 'https://vgorode.ua/img/article/6056/0_main-v1577293973.jpg',
    cityImgAlt: 'Kyiv, Kyiv state, Ukraine',

    // only local
    localImg: kyivImg,
    i18nCountry: 'countryUkraine',
    i18nCity: 'cityKyiv',
  },
  {
    _id: '2',
    country: 'Украина',
    stateName: 'Одесская область',
    cityName: 'Одесса',
    cityImgUrl: 'https://all.accor.com/magazine/imagerie/kartinka-1-9438.jpg',
    cityImgAlt: 'Odessa, Odessa state, Ukraine',

    // only local
    localImg: odesaImg,
    i18nCountry: 'countryUkraine',
    i18nCity: 'cityOdesa',
  },
  {
    _id: '3',
    country: 'США',
    stateName: 'Штат Нью-Йорк',
    cityName: 'Нью-Йорк город',
    cityImgUrl:
      'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-05/Skyline-New-York.jpg',
    cityImgAlt: 'New York City, New York State, USA',

    // local
    localImg: newYorkImg,
    i18nCountry: 'countryUSA',
    i18nCity: 'cityNewYork',
  },
];

const objectsEntity = Object.freeze(makeEntity(objectsArr, '_id'));

// TODO: Use actual api call from searchObjectsApi.
// Do not save whole state to slice, only save activeElementId to slice
// Then select data from endpoint via selector by id.
export const searchObjectInitialState: SearchState = {
  objects: objectsEntity,
  activeSearchId: '1',
  searchTerm: '',
};

const searchObjectLocationSlice = createSlice({
  name: 'search',
  initialState: searchObjectInitialState,
  reducers: {
    chooseActiveLocation(state, { payload }: PayloadAction<EntityId>) {
      state.activeSearchId = payload;
    },
    setSearchTerm(state, { payload }: PayloadAction<string>) {
      state.searchTerm = payload;
    },
  },
});

export const { chooseActiveLocation, setSearchTerm } = searchObjectLocationSlice.actions;
export const searchReducer = searchObjectLocationSlice.reducer;

export const selectActiveSearchId = (state: RootState) => state.search.activeSearchId;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;

// TODO: update to selectors from searchObjectSelectors.ts

// This temporary solution, before backend api deployed
// more close to reality case is in searchObjectSelectors.ts
export const selectLocalSearchObjectsIds = (state: RootState) => state.search.objects.ids;
export const selectLocalSearchObjectsEntities = (state: RootState) => state.search.objects.entities;
export const selectLocalSearchObjectById = (state: RootState, objectId: EntityId) => {
  return selectLocalSearchObjectsEntities(state)?.[objectId];
};

export const selectLocalActiveObject = (state: RootState) => {
  const activeSearchObjectId = selectActiveSearchId(state);
  return activeSearchObjectId ? state.search.objects.entities?.[activeSearchObjectId] : undefined;
};

export const selectLocalActiveObjectCity = createSelector(selectLocalActiveObject, maybeLocalActiveObject =>
  maybeLocalActiveObject ? maybeLocalActiveObject?.i18nCity : undefined
);
