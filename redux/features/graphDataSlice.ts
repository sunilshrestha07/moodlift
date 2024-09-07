import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { setStressLevel } from "./dailyQuestionsSlice";

interface InitialState {
    date: string;
    energyLevel: number;
    mood: number;
    stressLevel: number;
    sleepQuality: number;
}

const initialState: InitialState = {
    date: "",
    energyLevel: 0,
    mood: 0,
    stressLevel: 0,
    sleepQuality: 0,
};

const initialQsnsSlice = createSlice({
    name: "initialQsnsSlice",
    initialState,
    reducers: {
        setGraphDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setGraphEnergyLevel: (state, action: PayloadAction<number>) => {
            state.energyLevel = action.payload;
        },
        setGraphMood: (state, action: PayloadAction<number>) => {
            state.mood = action.payload;
        },
        setGraphStressLevel: (state, action: PayloadAction<number>) => {
            state.stressLevel = action.payload;
        },
        setgraphSleepQuality: (state, action: PayloadAction<number>) => {
            state.sleepQuality = action.payload;
        },
    },
});

export const {
    setGraphDate,
    setGraphEnergyLevel,
    setGraphMood,
    setGraphStressLevel,
    setgraphSleepQuality,
} = initialQsnsSlice.actions;

export default initialQsnsSlice.reducer;
