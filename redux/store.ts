import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from './features/userSlice'
import dailyQuestionsSlice from './features/dailyQuestionsSlice'
import graphSlice from './features/graphSlice'
import homePageSlice from './features/homePageSlice'
import initialQsnSlice from './features/initialQsnSlice'
import popupSlice from './features/popupSlice'
import pagesSlice from './features/pagesSlice'
// adsf/

const rootReducer = combineReducers({
    userSlice,
    popupSlice,
    pagesSlice,
    initialQsnSlice,
    dailyQuestionsSlice,
    homePageSlice,
    graphSlice,
});

// Configuration for Redux Persist
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

// Create a persisted reducer using the root reducer and persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

// Create the Redux Persistor (for persisting the Redux store)
export const persistor = persistStore(store);

// Define TypeScript types for easier usage throughout the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStateType = RootState;
