import { createSlice } from "@reduxjs/toolkit";
import { submitLogin, submitRegister } from "../../services/apiCalls/auth";
import { changePassword, updateUserData } from "../../services/apiCalls/user";

const initialState = {
    actions: 0,
    userData: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {

        setLoading: (state, action) => {
            state.isLoading = action.payload
        },

        setRefetch: (state) => {
            state.actions++;
            state.isLoading = false
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
            // Log in function
            .addCase(submitLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(submitLogin.fulfilled, (state, action) => {
                localStorage.setItem("BytePadToken", action.payload?.token)
                state.userData = action.payload?.data;
                state.token = action.payload?.token;
                state.isLoggedIn = true
                state.isLoading = false
            })
            .addCase(submitLogin.rejected, (state) => {
                state.isLoading = false
            })

            // Register in function
            .addCase(submitRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(submitRegister.fulfilled, (state, action) => {
                localStorage.setItem("BytePadToken", action.payload?.token)
                state.userData = action.payload?.data;
                state.token = action.payload?.token;
                state.isLoggedIn = true
                state.isLoading = false
            })
            .addCase(submitRegister.rejected, (state) => {
                state.isLoading = false
            })

            // Update user function
            .addCase(updateUserData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.userData = action.payload?.data;
                state.isLoading = false
            })
            .addCase(updateUserData.rejected, (state) => {
                state.isLoading = false
            })

            // check password
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(changePassword.rejected, (state) => {
                state.isLoading = false
            })

    }
})


export const { setLogout, setRefetch, setLoading } = userSlice.actions
export default userSlice.reducer;