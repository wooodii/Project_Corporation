import spring2021 from '../../asset/2022spring.webp';
import category from './category';
import style from './Service.module.scss';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Service = () => {
    return (
        <>
        <img src={spring2021} width="100%" height="700px" alt="서비스메뉴바" />
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
sdf
            </Tab.Pane>
            <Tab.Pane eventKey="second">
dsf   {category.map((i, index) => (
                    <div>
                        {i.id}
                        {i.title}
                        {i.sub}

                        {i.next}
                    </div>
                ))}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </>
    );
}
 
export default Service;