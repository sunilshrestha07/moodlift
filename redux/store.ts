import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import popupReducer from "./features/popupSlice";
import pagesReducer from "./features/pagesSlice";
// import initialQsnsSlice from "./features/initialQsnsSlice";
import dailyQuestionsSlice from "./features/dailyQuestionsSlice";

export const store = configureStore({
    reducer: {
        userReducer,
        popupReducer,   
        pagesReducer,
        // initialQsnsSlice,
        dailyQuestionsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
