import { createSlice } from "@reduxjs/toolkit";

export const BoardSlice = createSlice({
    name : 'board',
    initialState : [{
        boardId : 1,
        userEmail : "rlawlgus@naver.com",
        title : "첫번째 제목", 
        content : "", 
        view : "1",
        like : 1
    },{
        boardId : 2, 
        userEmail : "FFF", 
        title : "두번째 제목", 
        content :  "",
        view : "1",
        like : "1"
    }],
    reducers : {
        deleteBoard(state, action) {
            const newPageList = state.filter(
                (board) => (board.pageId !== action.payload))
            return newPageList;
        },
        modifyBoard(state, action){
            const modifyPage = state.map(
                (board) => (
                board.boardId == action.payload.boardId ? action.payload : board))
                return modifyPage;
            }
    }
}); 

export const boardAction = BoardSlice.actions;
export default BoardSlice;