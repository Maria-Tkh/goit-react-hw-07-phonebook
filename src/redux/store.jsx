import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import { contactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware, logger],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './reducer';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactsReducer),
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

// const persistor = persistStore(store);

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };
