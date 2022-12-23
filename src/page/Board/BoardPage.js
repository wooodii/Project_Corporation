// import { createAction } from "@reduxjs/toolkit";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../../Modules/boardSlice";

const BoardPage = () => {
    const {id} = useParams();
    console.log(id);
    const boardList = useSelector((state) => (state.board));
    console.log(boardList);
    const board = boardList.find((board) => (board.boardId === Number(id)));
    console.log(board);
    // const boardFind = useSelector((state) => (state.board.find((board) => (board.boardId == id))))

    return (
        <>
             <p>{board ? <BoardPrint board={board}/> : "존재하지 않는 페이지입니다."} </p>  
        </>
    );
}

export default BoardPage;

const BoardPrint = ({board}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteBoard = (id) =>{
        dispatch(deleteBoard(id));
        navigate('/board');
        console.log(deleteBoard(id));
        console.log(id);
    }

    const toModifyBoard = (board) => {
        // 수정화면이동 
        // state : board로 작성하면 board값을 전달해서 writeform에서 통째로 사용함
        navigate('/board/writeform', {state : board});
    }

    return(
        <Container>
            <Row>
                <Col>
                    {board.boardId}
                </Col>
                <Col>
                    <h2>{board.title}</h2>
                </Col>
                <Col>
                    <Button onClick={() => {toModifyBoard(board)}}>수정</Button>
                    <Button onClick={() => {onDeleteBoard(board.boardId)}}>삭제</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {board.userEmail}
                </Col>
            </Row>
            <Row  className="my-4">
                <Col><h4>{board.content}</h4></Col>
            </Row>
            <Row>
                <Col><span>조회수 {board.view}</span></Col>
                <Col><span>좋아요 {board.like}</span></Col>
            </Row>
        </Container>
    )
}