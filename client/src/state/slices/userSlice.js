import { createSlice } from "@reduxjs/toolkit";
import { submitLogin, submitRegister } from "../../services/apiCalls/auth";

const initialState = {
    userData: null,
    token: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setLogout: (state) => {
            localStorage.removeItem('BytePadToken');
            state.isLoggedIn = false;
            state.userData = null;
            state.token = null;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(submitLogin.fulfilled, (state, action) => {
                localStorage.setItem("BytePadToken", action.payload?.token)
                state.userData = action.payload?.data;
                state.token = action.payload?.token;
                state.isLoggedIn = true
            })
            .addCase(submitLogin.rejected, (state) => {
                console.log("Login authentication failed")
            })

            .addCase(submitRegister.fulfilled, (state, action) => {
                localStorage.setItem("BytePadToken", action.payload?.token)
                state.userData = action.payload?.data;
                state.token = action.payload?.token;
                state.isLoggedIn = true
            })
            .addCase(submitRegister.rejected, (state) => {
                console.log("Register authentication failed")
            })

    }   
})


export const { updateUser, setLoggedin, setLogout } = userSlice.actions
export default userSlice.reducer;