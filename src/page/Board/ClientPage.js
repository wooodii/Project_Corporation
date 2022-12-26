import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Board from './Board';
import QA from './QA';

const ClientPage = () => {
    return (
        <>
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify >
      <Tab eventKey="home" title="공지사항">

      </Tab>
      <Tab eventKey="profile" title="자주 묻는 질문">
        <QA/>
      </Tab>
      <Tab eventKey="longer-tab" title="고객서비스">
        
      </Tab>
      <Tab eventKey="longer" title="1:1 문의하기">
        <Board />
      </Tab>
      <Tab eventKey="list" title="상품문의내역">
        문의 글을 보내주시면 운영시간 내에 고객님의 이메일로 답변드리도록 하겠습니다. 
        <br/><br/>
        <button> 1:1문의 작성하기</button>
      </Tab>
    </Tabs>
        </>
    );
}
 
export default ClientPage;