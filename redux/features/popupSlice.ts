import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popupSlice",
    initialState: {
        isLoginPopupOpen: true,
    },
    reducers: {
        toggleLoginPopup: (state) => {
            state.isLoginPopupOpen = !state.isLoginPopupOpen;
        },
    },
});

export const { toggleLoginPopup } = popupSlice.actions;
export default popupSlice.reducer;
