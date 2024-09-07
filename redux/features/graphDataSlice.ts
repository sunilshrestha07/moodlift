import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    date: string[];
    energyLevel: number[];
    mood: number[];
    stressLevel: number[];
    sleepQuality: number[];
    doneGraphData: boolean;
}

const initialState: InitialState = {
    date: [],
    energyLevel: [],
    mood: [],
    stressLevel: [],
    sleepQuality: [],
    doneGraphData: false,
};

const graphDataSlice = createSlice({
    name: "graphData",
    initialState,
    reducers: {
        setGraphDate: (state, action: PayloadAction<string[]>) => {
            state.date = action.payload;
        },
        setGraphEnergyLevel: (state, action: PayloadAction<number[]>) => {
            state.energyLevel = action.payload;
        },
        setGraphMood: (state, action: PayloadAction<number[]>) => {
            state.mood = action.payload;
        },
        setGraphStressLevel: (state, action: PayloadAction<number[]>) => {
            state.stressLevel = action.payload;
        },
        setGraphSleepQuality: (state, action: PayloadAction<number[]>) => {
            state.sleepQuality = action.payload;
        },
        setDoneGraphData: (state) => {
            state.doneGraphData = true;
        },
    },
});

export const {
    setGraphDate,
    setGraphEnergyLevel,
    setGraphMood,
    setGraphStressLevel,
    setGraphSleepQuality,
    setDoneGraphData,
} = graphDataSlice.actions;

export default graphDataSlice.reducer;
