import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
    _id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    isAuthenticated?: boolean;
};

const certifiedSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        name: "",
        email: "",
        _id: "",
        avatar: "",
    },
    reducers: {
        setUserForContactPopup: (state, action: PayloadAction<User>) => {
            state._id = action.payload._id || "";
            state.name = action.payload.name || "";
            state.email = action.payload.email || "";
            state.avatar = action.payload.avatar || "";
        },
    },
});

export const {
    setUserForContactPopup
} = certifiedSlice.actions;
export default certifiedSlice.reducer;
