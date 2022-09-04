import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth';
import { balanceReducers } from './initialBalance';

import tableReducer from './table/tableSlice';

import { categoriesSlice } from './categories';
import { transactionsSlice } from './transactions';
import { reportsSlice } from './reports';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const tablePersistConfig = { key: 'tableForm', storage };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tableForm: persistReducer(tablePersistConfig, tableReducer),
    balance: balanceReducers,
    categories: categoriesSlice,
    transactions: transactionsSlice,
    reports: reportsSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
