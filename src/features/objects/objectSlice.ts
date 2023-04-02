import type { EntityId, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import type {
  Ids,
  ObjectBookingTime,
  AddObjectState,
  AddObjectAddressType,
  ObjectPhoto,
  ObjectPhotosEntity,
  Hotel,
} from 'types';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { objectPhotosAdapter, objectPhotosAdapterInitState } from './objectPhotosAdapter';

export const initObjectPhotos = new Array(12).fill(1).reduce<ObjectPhotosEntity>(
  ({ ids, entities }, _, i) => ({
    ids: [...ids, `${i}`],
    entities: { ...entities, [`${i}`]: { _id: `${i}`, localUrl: '', position: `${i}` } },
  }),
  { ids: [], entities: {} }
);

export const initObjectAddress: AddObjectAddressType = {
  country: '',
  state: '',
  city: '',
  street: '',
  house: '',
  apartment: '',
  zipCode: '',
  phone: '',
  email: '',
};

export const initObjectBookingTime: ObjectBookingTime = {
  checkin: '',
  checkout: '',
};

const initialState: AddObjectState = {
  activeObjectId: '',
  isEditingExistingObjectBeforeVerification: false,
  status: false,
  activeLocationId: '',
  typeId: '',
  objectName: '',
  address: initObjectAddress,
  description: '',
  photos: initObjectPhotos,
  time: initObjectBookingTime,
  activeServicesIds: [],
  activePaymentsIds: [],
  activeTabId: 0,
  editedFields: [],
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    setActiveObjectId(state, { payload }: PayloadAction<EntityId>) {
      state.activeObjectId = payload;
    },
    setIsEditingExistingObjectBeforeVerification(state, { payload }: PayloadAction<boolean>) {
      state.isEditingExistingObjectBeforeVerification = payload;
    },
    setObjectEditedFields(state, { payload }: PayloadAction<Array<keyof Hotel>>) {
      state.editedFields = payload;
    },
    setObjectStatus(state, { payload }: PayloadAction<boolean>) {
      state.status = payload;
    },
    chooseObjectLocation(state, { payload }: PayloadAction<EntityId>) {
      state.activeLocationId = payload;
    },
    chooseObjectTypeId(state, { payload }: PayloadAction<EntityId>) {
      state.typeId = payload;
    },
    setObjectName(state, { payload }: PayloadAction<string>) {
      state.objectName = payload;
    },
    setObjectAddress(state, { payload }: PayloadAction<AddObjectAddressType>) {
      state.address = payload;
    },
    setObjectDescription(state, { payload }: PayloadAction<string>) {
      state.description = payload;
    },
    setObjectPhotos(state, { payload }: PayloadAction<ObjectPhoto[]>) {
      state.photos = objectPhotosAdapter.setAll(state.photos, payload);
    },
    updateObjectPhoto(state, { payload }: PayloadAction<ObjectPhoto>) {
      state.photos = objectPhotosAdapter.upsertOne(state.photos, payload);
    },
    deleteObjectPhoto(state, { payload }: PayloadAction<EntityId>) {
      state.photos = objectPhotosAdapter.removeOne(state.photos, payload);
    },
    setObjectTime(state, { payload }: PayloadAction<ObjectBookingTime>) {
      state.time = payload;
    },
    chooseObjectServices(state, { payload }: PayloadAction<Ids>) {
      state.activeServicesIds = payload;
    },
    chooseObjectPayments(state, { payload }: PayloadAction<Ids>) {
      state.activePaymentsIds = payload;
    },
    setObjectActiveTab(state, { payload }: PayloadAction<number>) {
      state.activeTabId = payload;
    },
    objectOpenNextTab(state) {
      state.activeTabId += 1;
    },
    objectOpenPrevTab(state) {
      state.activeTabId -= 1;
    },
    resetObjectState: () => initialState,
  },
});

export const {
  setActiveObjectId,
  setIsEditingExistingObjectBeforeVerification,
  setObjectEditedFields,
  setObjectStatus,
  chooseObjectLocation,
  chooseObjectTypeId,
  setObjectName,
  setObjectAddress,
  setObjectDescription,
  setObjectPhotos,
  updateObjectPhoto,
  deleteObjectPhoto,
  setObjectTime,
  chooseObjectServices,
  chooseObjectPayments,
  setObjectActiveTab,
  objectOpenNextTab,
  objectOpenPrevTab,
  resetObjectState,
} = objectSlice.actions;

export const objectReducer = objectSlice.reducer;

export const selectActiveObjectId = (state: RootState) => state.object.activeObjectId;
export const selectIsEditingExistingObjectBeforeVerification = (state: RootState) =>
  state.object.isEditingExistingObjectBeforeVerification;
export const selectObjectEditedFields = (state: RootState) => state.object.editedFields;
export const selectObjectStatus = (state: RootState) => state.object.status;
export const selectObjectActiveLocationId = (state: RootState) => state.object.activeLocationId;
export const selectObjectTypeId = (state: RootState) => state.object.typeId;
export const selectObjectName = (state: RootState) => state.object.objectName;
export const selectObjectAddress = (state: RootState) => state.object.address;
export const selectObjectDescription = (state: RootState) => state.object.description;
export const selectObjectPhotos = (state: RootState) => state.object.photos;
export const selectObjectTime = (state: RootState) => state.object.time;
export const selectObjectActiveServicesIds = (state: RootState) => state.object.activeServicesIds;
export const selectObjectActivePaymentsIds = (state: RootState) => state.object.activePaymentsIds;
export const selectObjectActiveTabId = (state: RootState) => state.object.activeTabId;

export const {
  selectAll: selectAllObjectPhotos,
  selectIds: selectObjectPhotosIds,
  selectById: selectObjectPhotoById,
} = objectPhotosAdapter.getSelectors<RootState>(state => selectObjectPhotos(state) ?? objectPhotosAdapterInitState);

export const selectObjectPhotosFilesOrUrls = createSelector(selectAllObjectPhotos, objectPhotosArray =>
  objectPhotosArray.reduce<string[]>((acc, photo) => {
    const photoUrl = 'localUrl' in photo && photo.localUrl ? photo.localUrl : 'url' in photo && photo.url;
    return photoUrl ? [...acc, photoUrl] : acc;
  }, [])
);

export const selectObjectPhotosLocalUrls = createSelector([selectAllObjectPhotos], objectPhotosArray =>
  objectPhotosArray.reduce<{ localUrl: string; position: string }[]>(
    (acc, photo, i) => [
      ...acc,
      ...('localUrl' in photo && photo.localUrl ? [{ localUrl: photo.localUrl, position: `${i}` }] : []),
    ],
    []
  )
);
