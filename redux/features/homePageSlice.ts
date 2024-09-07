import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState: {
        isReportActive: true,
        isRecommendationActive: false,
    },
    reducers: {
        setReportActive: (state) => {
            state.isReportActive = true;
            state.isRecommendationActive = false;
        },
        setRecommendationActive: (state) => {
            state.isReportActive = false;
            state.isRecommendationActive = true;
        },
    },
});

export const { setReportActive, setRecommendationActive } = homePageSlice.actions;
export default homePageSlice.reducer;
