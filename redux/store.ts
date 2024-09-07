import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import popupReducer from "./features/popupSlice";
import pagesReducer from "./features/pagesSlice";

import dailyQuestionsSlice from "./features/dailyQuestionsSlice";
import homePageSlice from "./features/homePageSlice";
import initialQsnSlice from "./features/initialQsnSlice";
import graphSlice from "./features/graphSlice";

export const store = configureStore({
    reducer: {
        userReducer,
        popupReducer,
        pagesReducer,
        initialQsnSlice,
        dailyQuestionsSlice,
        homePageSlice,
        graphSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
