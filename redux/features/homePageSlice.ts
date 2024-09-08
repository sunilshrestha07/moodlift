import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState: {
        isReportActive: true,
        isRecommendationActive: false,
        isRecommendationLoading: false,
        fetchRecommendation: 99,
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
        toggleRecommendationLoading: (state) => {
            state.isRecommendationLoading = !state.isRecommendationLoading;
        },
        startRecommendationFetch: (state) => {
            state.fetchRecommendation = state.fetchRecommendation - 1;
        },
    },
});

export const {
    setReportActive,
    setRecommendationActive,
    toggleRecommendationLoading,
    startRecommendationFetch,
} = homePageSlice.actions;
export default homePageSlice.reducer;
