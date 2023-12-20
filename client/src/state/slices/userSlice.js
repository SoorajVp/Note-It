import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    token: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedin: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },

        updateUser: (state, action) => {
            state.userData = action.payload.userData;
        },

        setLogout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
            state.token = null;
        }

    }
})


export const { updateUser, setLoggedin, setLogout } = userSlice.actions
export default userSlice.reducer;