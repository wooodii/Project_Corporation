import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
    const BoardList = useSelector((state) => state.board);
    const navigate = useNavigate();

    const toBoardPage = (id) => {
        navigate('/board/'+id);
    }

    return (
        <>
        <header>
            <h3>문의게시판</h3>
        </header>

        <hr/>
        
        <Table>
            <thead>
                <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                </tr>
            </thead>

            <tbody>
                {BoardList.map((board) => (
                    <tr>
                        <td>{board.boardId}</td>
                        <td onClick={() => {toBoardPage(board.boardId)}}> {board.title} </td>
                        <td>{board.userEmail}</td>
                        <td>{board.view}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
 
export default Board;