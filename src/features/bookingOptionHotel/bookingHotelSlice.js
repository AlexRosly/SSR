import { createSlice, createSelector } from '@reduxjs/toolkit';
import { bookingPhotosAdapter, bookingPhotosAdapterInitState } from './bookingPhotosAdapter';

export const initBookingPhotos = new Array(7).fill(1).reduce(
  ({ ids, entities }, _, i) => ({
    ids: [...ids, `${i}`],
    entities: { ...entities, [`${i}`]: { id: `${i}`, localUrl: '' } },
  }),
  { ids: [], entities: {} }
);

export const initDetailedBedrooms = {
  firstBedroom: {
    doubleBed: 0,
    singleBed: 0,
  },
  secondBedroom: {
    doubleBed: 0,
    singleBed: 0,
  },
  thirdBedroom: {
    doubleBed: 0,
    singleBed: 0,
  },
  fourthBedroom: {
    doubleBed: 0,
    singleBed: 0,
  },
};
export const initSelectedAnimals = {
  smallDogSelected: false,
  mediumDogSelected: false,
  bigDogSelected: false,
  catSelected: false,
  raccoonSelected: false,
  anotherAnimalSelected: false,
};

const initialState = {
  type: '',
  bedrooms: 0,
  detailedBedrooms: initDetailedBedrooms,
  roomServicesIds: [],
  animals: initSelectedAnimals,
  description: '',
  uniqueNumber: '',
  totalSquare: 0,
  smoking: false,
  photos: initBookingPhotos,
  activeBookingId: '',
  status: false,
  editedFields: [],
};

const bookingHotelSlice = createSlice({
  name: 'bookingHotel',
  initialState,
  reducers: {
    setTypeOfObject(state, { payload }) {
      state.type = payload;
    },
    chooseBookingHotelIncreaseBedrooms(state) {
      state.bedrooms++;
    },
    chooseBookingHotelDecreaseBedrooms(state) {
      state.bedrooms--;
    },
    setDetailedBedroomsIncrease(state, { payload }) {
      state.detailedBedrooms[payload.bedroom][payload.bed]++;
    },
    setDetailedBedroomsDecrease(state, { payload }) {
      state.detailedBedrooms[payload.bedroom][payload.bed]--;
    },
    chooseRoomServices(state, { payload }) {
      state.roomServicesIds = payload;
    },
    chooseBookingHotelAnimals(state, { payload }) {
      state.animals[payload] = true;
    },
    setBookingHotelDescription(state, { payload }) {
      state.description = payload;
    },
    setUniqueNumber(state, { payload }) {
      state.uniqueNumber = payload;
    },
    setTotalSquare(state, { payload }) {
      state.totalSquare = payload;
    },
    chooseBookingHotelSmoking(state, { payload }) {
      state.smoking = payload;
    },
    setActiveBookingId(state, { payload }) {
      state.activeBookingId = payload;
    },
    setBookingHotelPhotos(state, { payload }) {
      state.photos = bookingPhotosAdapter.setAll(state.photos, payload);
    },
    updateBookingHotelPhoto(state, { payload }) {
      state.photos = bookingPhotosAdapter.upsertOne(state.photos, payload);
    },
    deleteBookingHotelPhoto(state, { payload }) {
      state.photos = bookingPhotosAdapter.removeOne(state.photos, payload);
    },
    setBookingHotelStatus(state, { payload }) {
      state.status = payload;
    },
    setBookingHotelEditedFields(state, { payload }) {
      state.editedFields = payload;
    },
    resetBookingHotelState: () => initialState,
  },
});

export const {
  setTypeOfObject,
  chooseBookingHotelIncreaseBedrooms,
  chooseBookingHotelDecreaseBedrooms,
  setDetailedBedroomsIncrease,
  setDetailedBedroomsDecrease,
  chooseRoomServices,
  chooseBookingHotelAnimals,
  setBookingHotelDescription,
  setUniqueNumber,
  setTotalSquare,
  chooseBookingHotelSmoking,
  setActiveBookingId,
  setBookingHotelEditedFields,
  setBookingHotelPhotos,
  updateBookingHotelPhoto,
  deleteBookingHotelPhoto,
  setBookingHotelStatus,
  resetBookingHotelState,
} = bookingHotelSlice.actions;

export const bookingHotelReducer = bookingHotelSlice.reducer;

export const selectActiveBookingId = state => state.bookingHotel.activeBookingId;
export const selectTypeOfObject = state => state.bookingHotel.type;
export const selectBookingHotelBedrooms = state => state.bookingHotel.bedrooms;
export const selectDetailedBedrooms = state => state.bookingHotel.detailedBedrooms;
export const selectRoomServicesIds = state => state.bookingHotel.roomServicesIds;
export const selectBookingHotelAnimals = state => state.bookingHotel.animals;
export const selectBookingHotelDescription = state => state.bookingHotel.description;
export const selectUniqueNumber = state => state.bookingHotel.uniqueNumber;
export const selectTotalSquare = state => state.bookingHotel.totalSquare;
export const selectBookingHotelSmoking = state => state.bookingHotel.smoking;
export const selectHotelPhotos = state => state.bookingHotel.photos;
export const selectBookingHotelStatus = state => state.bookingHotel.status;
export const selectBookingHotelEditedFields = state => state.bookingHotel.editedFields;

export const {
  selectAll: selectAllBookingPhotos,
  selectIds: selectBookingPhotosIds,
  selectById: selectBookingPhotoById,
} = bookingPhotosAdapter.getSelectors(state => selectHotelPhotos(state) ?? bookingPhotosAdapterInitState);

export const selectHotelPhotosFilesOrUrls = createSelector(
  [selectAllBookingPhotos, selectBookingHotelEditedFields],
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

export const selectBookingPhotosLocalUrls = createSelector(selectAllBookingPhotos, objectPhotosArray =>
  objectPhotosArray.reduce(
    (acc, photo, i) => [
      ...acc,
      ...('localUrl' in photo && photo.localUrl ? [{ localUrl: photo.localUrl, position: `${i}` }] : []),
    ],
    []
  )
);
