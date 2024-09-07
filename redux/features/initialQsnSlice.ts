import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    age: number;
    gender: string;
    traumaticEvents: string;
    previousDiagnoses: string[];
    currentStep: number;
}

const initialState: InitialState = {
    age: 0,
    gender: "",
    traumaticEvents: "",
    previousDiagnoses: [],
    currentStep: 0,
};

const initialQsnsSlice = createSlice({
    name: "initialQsnsSlice",
    initialState,
    reducers: {
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        setTraumaticEvents: (state, action: PayloadAction<string>) => {
            state.traumaticEvents = action.payload;
        },
        setPreviousDiagnosis: (state, action: PayloadAction<string[]>) => {
            state.previousDiagnoses = action.payload;
        },
        setCurrentStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
    },
});

export const { setAge, setGender, setTraumaticEvents, setPreviousDiagnosis, setCurrentStep } =
    initialQsnsSlice.actions;

export default initialQsnsSlice.reducer;
