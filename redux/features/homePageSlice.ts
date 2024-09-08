import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState: {
        isReportActive: true,
        isRecommendationActive: false,
        isRecommendationLoading: false,
        fetchRecommendation: false,
        fetchUserActivities: false,
        fetchUserMessage: false,
        aiMessages: [""],
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
            state.fetchRecommendation = true;
        },
        startFetchUserActivities: (state) => {
            state.fetchUserActivities = true;
        },
        startFetchUserMessage: (state) => {
            state.fetchUserMessage = true;
        },
        setAiMessages: (state, action: PayloadAction<string[]>) => {
            state.aiMessages = action.payload;
        },
    },
});

export const {
    setReportActive,
    setRecommendationActive,
    toggleRecommendationLoading,
    startRecommendationFetch,
    startFetchUserActivities,
    startFetchUserMessage,
    setAiMessages,
} = homePageSlice.actions;
export default homePageSlice.reducer;
