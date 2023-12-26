import { createSlice } from "@reduxjs/toolkit";
import { submitLogin, submitRegister } from "../../services/apiCalls/auth";
import { updateUserData } from "../../services/apiCalls/user";

const initialState = {
    actions : 0,
    userData: null,
    token: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {

        setRefetch: (state) => {
            state.actions ++;
        },

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

            .addCase(updateUserData.fulfilled, (state, action) => {
                state.userData = action.payload?.data;
            })
            .addCase(updateUserData.rejected, (state) =>{
                console.log("User updation failed")
            })

    }   
})


export const { setLogout, setRefetch } = userSlice.actions
export default userSlice.reducer;