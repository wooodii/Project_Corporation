import { createSlice } from "@reduxjs/toolkit";

export const BoardSlice = createSlice({
    name : 'board',
    initialState : [{
        boardId : 1,
        userEmail : "rlawlgus@naver.com",
        title : "첫번째 제목", 
        content : "첫번째 게시물 내용임", 
        view : "1",
        like : []
    },{
        boardId : 2, 
        userEmail : "FFF", 
        title : "두번째 제목", 
        content :  "두번째 게시물 내용",
        view : "1",
        like : []
    }],    
    reducers : {
        // 현재 게시물의 id를 찾아서 id를 제외하고 새로운 배열을 만듦
        deleteBoard(state, action) {
            const newPageList = state.filter(
                (board) => (board.boardId !== action.payload))
            return newPageList;
        },
        // 수정된 board값을 들고와서 값을 통채로 리스트에 바꿔 넣음
        modifyBoard(state, action){
            const modifyPage = state.map(
                (board) => (
                board.boardId == action.payload.boardId ? action.payload : board))
                return modifyPage;
            },
        // 새로운 board값을 받아와서 id값을 부여한 후에 추가
        addBoard(state, action){
            let boardId = 3;
            const newBoard = {
                ...action.payload,
                boardId : boardId,
                view : 0,
                like : []
            }
            boardId++;
            return state.concat(newBoard);
        },
        updateView(state, action){
            return state.map((board) => (
                board.boardId == action.payload ?
                {...board, view : board.view+1} : board
            ))
        },
        addLikeUser(state, action){
            // board의 좋아요 버튼을 눌렀을 때 값 확인 
            // userInfoList의 like > board, title - 배열
            // board의 like값이 연결 > userEmail - 배열
            const newAddLike = action.payload.userEmail;
            return state.map((board) => (
                board.boardId == action.payload.boardId ? {
                    // boardlike값이 어떻게 들어옴?
                    ...board, like : board.like.find((boardLike) => (boardLike == action.payload.userEmail)
                    // 값이 있다면 filter를 통해서 값을 제거한 후 추가
                    ? board.like.filter((boardLike) => boardLike != action.payload.userEmail) 
                    : board.like.concat(newAddLike))
                }
                : board
            ))
        }
    }
}); 

export const {deleteBoard, modifyBoard, addBoard, updateView, addLikeUser} = BoardSlice.actions;
export default BoardSlice;