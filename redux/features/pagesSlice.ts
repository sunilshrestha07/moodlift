import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "pageSlice",
    initialState: {
        activePage: "",
    },
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
    },
});

export const { setActivePage } = pageSlice.actions;
export default pageSlice.reducer;
