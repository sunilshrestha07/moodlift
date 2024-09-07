import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the state interface with updated data types
export interface DailyQuestionsState {
    mood: number;
    moodDuration: number;
    stressLevel: number;
    sleepQuality: number;
    sleepHours: number;
    sleepDisturbance: string;
    anxietySymptoms: string; // Updated to array of strings
    physicalActivity: string;
    energyLevels: number; // Updated to number
    eatingHabits: string;
    socialEngagement: number; // Updated to number
    loneliness: number; // Updated to number
    currentTreatment: string;
    currentStep: number;
}

// Set the initial state with appropriate types
const initialState: DailyQuestionsState = {
    mood: 0,
    moodDuration: 0,
    stressLevel: 0,
    sleepQuality: 0,
    sleepHours: 0,
    sleepDisturbance: "",
    anxietySymptoms: "", 
    physicalActivity: "",
    energyLevels: 0,
    eatingHabits: "",
    socialEngagement: 0,
    loneliness: 0,
    currentTreatment: "",
    currentStep: 0,
};

// Create the slice with updated reducers
const dailyQuestionsSlice = createSlice({
    name: "dailyQuestionsSlice",
    initialState,
    reducers: {
        setMood: (state, action: PayloadAction<number>) => {
            state.mood = action.payload;
        },
        setMoodDuration: (state, action: PayloadAction<number>) => {
            state.moodDuration = action.payload;
        },
        setStressLevel: (state, action: PayloadAction<number>) => {
            state.stressLevel = action.payload;
        },
        setSleepQuality: (state, action: PayloadAction<number>) => {
            state.sleepQuality = action.payload;
        },
        setSleepHours: (state, action: PayloadAction<number>) => {
            state.sleepHours = action.payload;
        },
        setAnxietySymptoms: (state, action: PayloadAction<string>) => {
            state.anxietySymptoms = action.payload;
        },
        setSleepDisturbance: (state, action: PayloadAction<string>) => {
            state.sleepDisturbance = action.payload;
        },
        setPhysicalActivity: (state, action: PayloadAction<string>) => {
            state.physicalActivity = action.payload;
        },
        setEnergyLevels: (state, action: PayloadAction<number>) => {
            state.energyLevels = action.payload;
        },
        setEatingHabits: (state, action: PayloadAction<string>) => {
            state.eatingHabits = action.payload;
        },
        setSocialEngagement: (state, action: PayloadAction<number>) => {
            state.socialEngagement = action.payload;
        },
        setLoneliness: (state, action: PayloadAction<number>) => {
            state.loneliness = action.payload;
        },
        setCurrentTreatment: (state, action: PayloadAction<string>) => {
            state.currentTreatment = action.payload;
        },
        setCurrentStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
    },
});

export const {
    setMood,
    setMoodDuration,
    setStressLevel,
    setSleepQuality,
    setSleepHours,
    setAnxietySymptoms,
    setSleepDisturbance,
    setPhysicalActivity,
    setEnergyLevels,
    setEatingHabits,
    setSocialEngagement,
    setLoneliness,
    setCurrentTreatment,
    setCurrentStep,
} = dailyQuestionsSlice.actions;

export default dailyQuestionsSlice.reducer;
