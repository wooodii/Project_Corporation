import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = () => {
    const {id} = useParams();
    const boardList = useSelector((state) => (state.board));
    const board = boardList.find((board) => (board.boardId === id));

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

//     const onDeleteBoard = (id) =>{
//         const boardList = useSelector((state) => (state.board));
//         dispatch(boardList.deleteBoard(id));
//         navigate('/board')
//     }
// 
//     const toModifyBoard = (board) => {
//         navigate('/board/modifyform', {state : board})
//     }

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
                    <Button>수정</Button>
                    <Button>삭제</Button>
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