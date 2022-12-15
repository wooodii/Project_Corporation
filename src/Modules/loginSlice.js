import { createSlice } from "@reduxjs/toolkit";

// 로그인 및 로그아웃 시, 현재 정보 불러와 저장
export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        isLoggedIn : false,
        currentUser : sessionStorage.getItem("currentUser")
    },
    reducers : {
        loginState : (state, action) => {
            state.loginState = action.payload
            sessionStorage.setItem("currentUser", action.payload);
        },
        logoutState : (state, action) => {
            state.name = action.payload
            sessionStorage.removeItem("currentUser");
        }
    }
});

export const {loginState, logoutState} = loginSlice.actions;
// export const selectLogin = (state) => state.login.value
export default loginSlice.reducer;