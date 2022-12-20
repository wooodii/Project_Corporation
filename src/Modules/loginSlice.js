import { createSlice } from "@reduxjs/toolkit";

// 로그인 및 로그아웃 시, 현재 정보 불러와 저장
export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        isLoggedIn : false, 
        UserInfo : "",
        currentUser : JSON.parse(sessionStorage.getItem("currentUser")) // (key,value)
    },
    reducers : {
        loginState : (state, action) => {
            state.isLoggedIn = !state.isLoggedIn // 로그인 상태 변경 
            state.currentUser = action.payload
            sessionStorage.setItem("currentUser", JSON.stringify(action.payload));
        },
        logoutState : (state, action) => {
            state.isLoggedIn = !state.isLoggedIn
            state.UserInfo = action.payload
            sessionStorage.removeItem("currentUser"); // 특정 키값 삭제
            // clear는 전체 데이터 삭제
        }
    }
});


export const {loginState, logoutState} = loginSlice.actions;
// export const selectLogin = (state) => state.login.value
export default loginSlice.reducer;