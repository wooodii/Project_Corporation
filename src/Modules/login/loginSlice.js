import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        loginState : false,
        name : "noUser",
        email : "",
        password : ""
    },
    reducers : {
        setLoginState : (state, action) => {state.loginState = action.payload},
        setName : (state, action) => {state.name = action.payload}
    }
})

export const {setLoginState, setName} = loginSlice.actions
export const selectLogin = (state) => state.login.value
export default loginSlice.reducer;