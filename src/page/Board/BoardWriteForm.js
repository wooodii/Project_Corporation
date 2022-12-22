import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../../Modules/boardSlice";

const BoardWriteForm = () => {
    // useLocation 사용법? 
    const location = useLocation();
    const [board, setBoard] = useState(location.state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value})
    }

    const onModifyBoard = () => {
        dispatch(modifyBoard(board));
        navigate('/board/' + board.boardId)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {board.boardId} 
                </Col>
                <Col>
                    <input 
                        name='title'
                        value={board.title}
                        onChange={(e) => {onChange(e)}}></input>
                </Col>
                <Col>
                    <Button onClick={onModifyBoard}>수정완료</Button>
                </Col>
            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row>
                <Col>
                    <textarea
                        name="content"
                        onChange={(e) => {onChange(e)}}>{board.content}</textarea>
                </Col>
            </Row>
        </Container>
    );
}
 
export default BoardWriteForm;