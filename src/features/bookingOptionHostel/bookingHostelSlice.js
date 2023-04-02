import { createSlice, createSelector } from '@reduxjs/toolkit';
import { bookingPhotosAdapter, bookingPhotosAdapterInitState } from '../bookingOptionHotel/bookingPhotosAdapter';

export const initBookingPhotos = new Array(7).fill(1).reduce(
  ({ ids, entities }, _, i) => ({
    ids: [...ids, `${i}`],
    entities: { ...entities, [`${i}`]: { id: `${i}`, localUrl: '' } },
  }),
  { ids: [], entities: {} }
);

const initialState = {
  typeOfObject: '',
  bedInRoom: 0,
  bedAddSite: 0,
  roomServicesIds: [],
  description: '',
  uniqueNumber: '',
  photos: initBookingPhotos,
  activeBookingId: '',
  status: false,
  editedFields: [],
};

const bookingHostelSlice = createSlice({
  name: 'bookingHostel',
  initialState,
  reducers: {
    setBookingHostelTypeOfObject(state, { payload }) {
      state.typeOfObject = payload;
    },
    setBookingHostelIncreaseBedInRoom(state) {
      state.bedInRoom++;
    },
    setBookingHostelDecreaseBedInRoom(state) {
      state.bedInRoom--;
    },
    setBookingHostelIncreaseBedAddSite(state) {
      state.bedAddSite++;
    },
    setBookingHostelDecreaseBedAddSite(state) {
      state.bedAddSite--;
    },
    chooseBookingHostelRoomServices(state, { payload }) {
      state.roomServicesIds = payload;
    },
    setBookingHostelDescription(state, { payload }) {
      state.description = payload;
    },
    setBookingHostelUniqueNumber(state, { payload }) {
      state.uniqueNumber = payload;
    },
    setBookingHostelActiveBookingId(state, { payload }) {
      state.activeBookingId = payload;
    },
    setBookingHostelPhotos(state, { payload }) {
      state.photos = bookingPhotosAdapter.setAll(state.photos, payload);
    },
    updateBookingHostelPhoto(state, { payload }) {
      state.photos = bookingPhotosAdapter.upsertOne(state.photos, payload);
    },
    deleteBookingHostelPhoto(state, { payload }) {
      state.photos = bookingPhotosAdapter.removeOne(state.photos, payload);
    },
    setBookingHostelStatus(state, { payload }) {
      state.status = payload;
    },
    setBookingHostelEditedFields(state, { payload }) {
      state.editedFields = payload;
    },
    resetBookingHostelState: () => initialState,
  },
});

export const {
  setBookingHostelTypeOfObject,
  setBookingHostelIncreaseBedInRoom,
  setBookingHostelDecreaseBedInRoom,
  setBookingHostelIncreaseBedAddSite,
  setBookingHostelDecreaseBedAddSite,
  chooseBookingHostelRoomServices,
  setBookingHostelDescription,
  setBookingHostelUniqueNumber,
  setBookingHostelActiveBookingId,
  setBookingHostelPhotos,
  updateBookingHostelPhoto,
  deleteBookingHostelPhoto,
  setBookingHostelStatus,
  setBookingHostelEditedFields,
  resetBookingHostelState,
} = bookingHostelSlice.actions;

export const bookingHostelReducer = bookingHostelSlice.reducer;

export const selectActiveBookingId = state => state.bookingHotel.activeBookingId;
export const selectBookingHostelTypeOfObject = state => state.bookingHostel.typeOfObject;
export const selectBookingHostelBedInRoom = state => state.bookingHostel.bedInRoom;
export const selectBookingHostelBedAddSites = state => state.bookingHostel.bedAddSite;
export const selectBookingHostelRoomServicesIds = state => state.bookingHostel.roomServicesIds;
export const selectBookingHostelDescription = state => state.bookingHostel.description;
export const selectBookingHostelUniqueNumber = state => state.bookingHostel.uniqueNumber;
export const selectHostelPhotos = state => state.bookingHostel.photos;
export const selectBookingHostelStatus = state => state.bookingHostel.status;
export const selectBookingHostelEditedFields = state => state.bookingHotel.editedFields;

export const {
  selectAll: selectAllBookingPhotos,
  selectIds: selectBookingPhotosIds,
  selectById: selectBookingPhotoById,
} = bookingPhotosAdapter.getSelectors(state => selectHostelPhotos(state) ?? bookingPhotosAdapterInitState);

export const selectHostelPhotosFilesOrUrls = createSelector(
  [selectAllBookingPhotos, selectBookingHostelEditedFields],
  (bookingPhotosArray, bookingEditedFields) =>
    bookingPhotosArray.reduce((acc, photo) => {
      const isEdited = bookingEditedFields.includes('photos');

      const isLocalFile = 'localUrl' in photo;
      const isUrlFromBackend = 'url' in photo;

      const isPhoto = (isLocalFile && photo.localUrl) || (isUrlFromBackend && photo.url);

      const photoToPostOrPatch =
        (isLocalFile && !isUrlFromBackend) || (isLocalFile && isUrlFromBackend && isEdited)
          ? photo.localUrl
          : photo.url;

      return [...acc, ...(isPhoto ? [photoToPostOrPatch] : [])];
    }, [])
);

export const selectBookingHostelPhotosLocalUrls = createSelector([selectAllBookingPhotos], objectPhotosArray =>
  objectPhotosArray.reduce(
    (acc, photo, i) => [
      ...acc,
      ...('localUrl' in photo && photo.localUrl ? [{ localUrl: photo.localUrl, position: `${i}` }] : []),
    ],
    []
  )
);
