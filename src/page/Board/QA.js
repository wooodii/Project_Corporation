import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import QAList from '../../database/QAList';

const QA = () => {
    return (  
        <>
        <Row>
        <Col xs={4}>
            <div style={{border : "2px solid black", borderRadius : "5px", marginLeft : "3em", marginTop : "6em"}}>
                <h4>고객센터  </h4>  <br/>
                평일 : 전체 문의 상담 가능 <br/>
                주말/공휴일 : 오늘의집 직접배송 및 이사/시공/수리 문의에 한해 전화 상담 가능 <br/>
            </div>
        </Col>

        <Col xs={8}>
            <div style={{margin : "2em"}}>
            <h3>무엇을 도와드릴까요?</h3>
            {QAList.map((list) => (
            <Container>     
            <Accordion defaultActiveKey="1" flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>{list.question}</Accordion.Header>
                <Accordion.Body>{list.answer}</Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Container>
            ))}
            </div>

        </Col>
        </Row>





        </>
    );
}
 
export default QA;