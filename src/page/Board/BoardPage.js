// import { createAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLikeUser, deleteBoard, updateView } from "../../Modules/boardSlice";
import { addCommnet } from "../../Modules/commnetSlice";
import {addLikeBoard} from '../../Modules/userInfoSlice';

const BoardPage = () => {
    const {id} = useParams();
    // console.log(id);
    const boardList = useSelector((state) => (state.board));
    // console.log(boardList);
    const board = boardList.find((board) => (board.boardId === Number(id)));
    // console.log(board);
    // const boardFind = useSelector((state) => (state.board.find((board) => (board.boardId == id))))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateView(id));
    }, [])

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
    const [commentText, setCommentText] = useState("");
    
    // user로 댓글을 달 수 있게 수정, user ==  false이라면 코멘트 달 수  없게 수정
    const user = useSelector((state) => state.login);
    console.log(user);


    const login = useSelector((state) => (state.login));

    const onAddCommnet = () => {
        dispatch(addCommnet({
            boardId : board.boardId,
            userEmail : user.email,
            text : commentText
        }))
        setCommentText("");
    }

    // commnets 값 가져오기
    const comments = useSelector((state) => state.comment); // console.log(comments); 
    const boardComments = comments.filter((commnets) => (commnets.boardId == board.boardId));

    // 삭제
    const onDeleteBoard = (id) =>{
        dispatch(deleteBoard(id));
        navigate('/board'); 
        console.log(deleteBoard(id));
        console.log(id);
    }

    // 수정
    const toModifyBoard = (board) => {
        // 수정화면이동 
        // state : board로 작성하면 board값을 전달해서 writeform에서 통째로 사용함
        navigate('/board/writeform', {state : board});
    }

    // 좋아요
    const onAddLike = () => {
        if(!login){
            return alert("로그인 후에 사용가능합니다.")
        }

        const boardlike = {
        userEmail : user.email,
        boardId : board.boardId,
        title : board.title
        }

         dispatch(addLikeBoard(boardlike));

        const userlike = {
            boardId : board.boardId,
            userEmail : user.email
        }
        dispatch(addLikeUser(userlike));
    }
    
    return(
        <Container style={{marginTop : "3em"}}>
            <Row>
                <Col>
                    {board.boardId}
                </Col>
                <Col>
                    <h2>{board.title}</h2>
                </Col>
                <Col xs={4}>
                    <Button onClick={() => {toModifyBoard(board)}}>수정</Button>
                    <Button onClick={() => {onDeleteBoard(board.boardId)}}>삭제</Button>
                    <Button onClick={() => {navigate(-1)}}>돌아가기</Button>
                </Col >
            </Row>
            <Row>
                <Col>
                    {board.userEmail}
                </Col>
            </Row>
            <Row>
                <Col xs={1}><span>조회수 <br/> {board.view}</span></Col>
                <Col xs={1}><span onClick={onAddLike}>좋아요 <br/> {board.like.length}</span></Col> 
                
            </Row>
            <hr/>
            <Row>
                <Col style={{height : "60vh"}}><h4>{board.content}</h4></Col>
            </Row>
            <hr/>
            <Row>
                {login ? 
                <CommentInput  
                    commentText={commentText}
                    setCommentText={setCommentText}
                    onAddComment={onAddCommnet}/> : <p>로그인하시면 댓글 작성이 가능합니다.</p>}
            </Row>
            <Row>
                {boardComments.length > 0 ? (
                    boardComments.map((comment) => <CommentBox comment={comment}/>)
                ) : (<p>코멘트가 없음 </p>)}
            </Row>
        </Container>
    )
}

function CommentBox({ comment }) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{comment.commmentId}{comment.userEmail}</Card.Title>
          <Card.Text>{comment.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  function CommentInput({ commentText,setCommentText, onAddComment}) {
    return (
      <>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            value={commentText}
            onChange={(e)=>{setCommentText(e.target.value)}}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button onClick={onAddComment}>코멘트 작성</Button>
      </>
    );
  }