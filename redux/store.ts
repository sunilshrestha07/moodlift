import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import popupReducer from "./features/popupSlice";
import pagesReducer from "./features/pagesSlice";

export const store = configureStore({
    reducer: {
        userReducer,
        popupReducer,
        pagesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
