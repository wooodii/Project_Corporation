import { createSlice } from "@reduxjs/toolkit";

// 구글인증에서 가져온 이메일, 저장된 이메일 비교함
// like값을 저장함
export const userInfoSlice = createSlice({
    name : "userInfo",
    initialState : {
        userEmail : "rlawlgus@naver.com",
        like : [] // board의 id와 title이 가진 객체
    },
    reducers : {
        addUserInfo(state, action){
            const newUser = {
                userEmail : action.payload,
                like : []
            }
            return state.concat(newUser);
        },
        addLikeBoard(state, action){
            const newAddLike = {
                boardId : action.payload.boardId,
                title : action.payload.title
            }
            return state.map((userInfo) => (
                // userEmail이 동일한 걸로 연결
                userInfo.userEmail == action.payload.userEmail ? {
                    ...userInfo, like : userInfo.like.find((boardLike) => boardLike.boardId == action.payload.boardId) ?
                    userInfo.like.filter((boardLike) => boardLike.boardId != action.payload.boardId) :
                    userInfo.like.concat(newAddLike)
                } : userInfo
            ))
        }


    }
})

export const {addUserInfo, addLikeBoard} = userInfoSlice.actions;
export default userInfoSlice;