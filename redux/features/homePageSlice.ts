import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState: {
        activePanel: "report",
    },
    reducers: {
        setActivePanel: (state, action: PayloadAction<string>) => {
            state.activePanel = action.payload;
        },
    },
});

export const { setActivePanel } = homePageSlice.actions;
export default homePageSlice.reducer;
