import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contactSlice",
    initialState: {
        iscontactPopupOpen: false,
    },
    reducers: {
        toggleContactPopup: (state) => {
            state.iscontactPopupOpen = !state.iscontactPopupOpen;
        },
    },
});

export const { toggleContactPopup } = contactSlice.actions;
export default contactSlice.reducer;
