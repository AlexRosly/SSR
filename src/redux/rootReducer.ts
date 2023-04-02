import { combineReducers } from 'redux';

// redux-persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './authentication/authentication.reducer';
import { bedRoomReducer } from './bedRooms/bedRooms.reducer';
import { bookingOptionsReducer } from './BookingOptions/bookingOptions.reducer';

// RTK Query
import { api } from 'features/api';
import { objectReducer } from 'features/objects';
import { searchReducer } from 'features/search';
import { bookingHotelReducer } from 'features/bookingOptionHotel';
import { bookingHostelReducer } from 'features/bookingOptionHostel';
import { modalSliceReducer, userSettingsReducer } from 'features/common';

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['header'],
// };

const userSettingsPersistConfig = {
  key: 'userSettings',
  storage,
  whitelist: ['activeLanguageId', 'activeCurrencyId'],
};

const persistedUserSettingsReducer = persistReducer(userSettingsPersistConfig, userSettingsReducer);

export const rootReducer = combineReducers({
  object: objectReducer,
  bookingHotel: bookingHotelReducer,
  bookingHostel: bookingHostelReducer,
  auth: authReducer,
  bedRoomReducer,
  search: searchReducer,
  bookingOptions: bookingOptionsReducer,
  modal: modalSliceReducer,
  userSettings: persistedUserSettingsReducer,
  [api.reducerPath]: api.reducer,
});

// export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
