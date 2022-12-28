import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name : "comment", 
    initialState : [{
        commentId : 1, 
        boardId : 1,
        userEmail : "rlawlgus@naver.com",
        text : "반갑습니다."
    }],
    reducers : {
        addComment(state, action) {
            let commentId = 2;
            const newComment = {
                ...action.payload,
                commentId : commentId
            }
            commentId++;
            return state.concat(newComment);
        }
    }
})

export const {addCommnet} = commentSlice.actions;
export default commentSlice;