import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
    name: "graphSlice",
    initialState: {
        isMoodSelected: true,
        isSleepSelected: false,
        isStressSelected: false,
        isEnergySelected: false,
        title: "Mood pattern",
    },
    reducers: {
        setMoodSelected: (state) => {
            state.isMoodSelected = true;
            state.isSleepSelected = false;
            state.isStressSelected = false;
            state.isEnergySelected = false;
            state.title = "Mood pattern";
        },

        setSleepSelected: (state) => {
            state.isMoodSelected = false;
            state.isSleepSelected = true;
            state.isStressSelected = false;
            state.isEnergySelected = false;
            state.title = "Sleep pattern";
        },
        setStressSelected: (state) => {
            state.isMoodSelected = false;
            state.isSleepSelected = false;
            state.isStressSelected = true;
            state.isEnergySelected = false;
            state.title = "Stress pattern";
        },
        setEnergySelected: (state) => {
            state.isMoodSelected = false;
            state.isSleepSelected = false;
            state.isStressSelected = false;
            state.isEnergySelected = true;
            state.title = "Energy pattern";
        },
    },
});

export const { setMoodSelected, setSleepSelected, setStressSelected, setEnergySelected } =
    graphSlice.actions;
export default graphSlice.reducer;
