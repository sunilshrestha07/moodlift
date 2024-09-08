import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
    _id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    isAuthenticated?: boolean;
    age?: string;
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        name: "",
        email: "",
        _id: "",
        avatar: "",
        age: "",
    },
    reducers: {
        setAuthenticated: (state) => {
            state.isAuthenticated = true;
        },
        removeAuthenticated: (state) => {
            state.isAuthenticated = false;
        },
        setUserForGoogleSignup: (state, action: PayloadAction<User>) => {
            state.name = action.payload.name || "";
            state.email = action.payload.email || "";
            state.avatar = action.payload.avatar || "";
        },
        setUserForBackendConfirmation: (state, action: PayloadAction<User>) => {
            state._id = action.payload._id || "";
            state.name = action.payload.name || "";
            state.email = action.payload.email || "";
            state.avatar = action.payload.avatar || "";
            state.isAuthenticated = true;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
    },
});

export const {
    setAuthenticated,
    removeAuthenticated,
    setUserForGoogleSignup,
    setUserForBackendConfirmation,
} = userSlice.actions;
export default userSlice.reducer;
