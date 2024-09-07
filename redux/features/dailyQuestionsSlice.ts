// src/redux/features/dailyQuestionsSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DailyQuestionsState {
    mood: string;
    moodDuration: string;
    stressLevel: number;
    sleepQuality: string;
    sleepHours: string;
    anxietySymptoms: string;
    sleepDisturbance: string;
    physicalActivity: string;
    energyLevels: string;
    eatingHabits: string;
    socialEngagement: string;
    loneliness: string;
    currentTreatment: string;
    currentStep: number;
}

const initialState: DailyQuestionsState = {
    mood: "",
    moodDuration: "",
    stressLevel: 0,
    sleepQuality: "",
    sleepHours: "",
    anxietySymptoms: "",
    sleepDisturbance: "",
    physicalActivity: "",
    energyLevels: "",
    eatingHabits: "",
    socialEngagement: "",
    loneliness: "",
    currentTreatment: "",
    currentStep: 0,
};

const dailyQuestionsSlice = createSlice({
    name: "dailyQuestionsSlice",
    initialState,
    reducers: {
        setMood: (state, action: PayloadAction<string>) => {
            state.mood = action.payload;
        },
        setMoodDuration: (state, action: PayloadAction<string>) => {
            state.moodDuration = action.payload;
        },
        setStressLevel: (state, action: PayloadAction<number>) => {
            state.stressLevel = action.payload;
        },
        setSleepQuality: (state, action: PayloadAction<string>) => {
            state.sleepQuality = action.payload;
        },
        setSleepHours: (state, action: PayloadAction<string>) => {
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
        setEnergyLevels: (state, action: PayloadAction<string>) => {
            state.energyLevels = action.payload;
        },
        setEatingHabits: (state, action: PayloadAction<string>) => {
            state.eatingHabits = action.payload;
        },
        setSocialEngagement: (state, action: PayloadAction<string>) => {
            state.socialEngagement = action.payload;
        },
        setLoneliness: (state, action: PayloadAction<string>) => {
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
