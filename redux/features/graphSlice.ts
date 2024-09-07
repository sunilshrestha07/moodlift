import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
    name: "graphSlice",
    initialState: {
        selectedGraph: "mood",
    },
    reducers: {
        toggleLoginPopup: (state, action: PayloadAction<string>) => {
            state.selectedGraph = action.payload;
        },
    },
});

export const { toggleLoginPopup } = graphSlice.actions;
export default graphSlice.reducer;
