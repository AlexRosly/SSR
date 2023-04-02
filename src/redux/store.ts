import { configureStore } from '@reduxjs/toolkit';
import { api } from 'features/api';
import { persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { rootReducer } from './rootReducer';

const ignoredActions = [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions,
      },
    }).concat(api.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// setupListeners(store.dispatch);
