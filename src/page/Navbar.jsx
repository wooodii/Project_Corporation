import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { apiKeyNum } from "../database/firebase";

const NavBar = (props) => {
  const navigate = useNavigate();

  // 세션키로 가져오는 값이 있는지 확인해 회원이름변경 > 수정
  const sessionKey = `firebase:authUser:${apiKeyNum}:[DEFAULT]`
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;
  const [loginState, setLoginState] = useState();

  useEffect(() => {
    if(sessionKey && isSession) {
        console.log(JSON.parse(sessionStorage.getItem(sessionKey)).uid);
        setLoginState(loginState);
      }else{
        setLoginState("회원정보없음");
      }
      }, [setLoginState]);

  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {loginState}님 <br/>
              <button onClick={() => navigate('/login')}>로그인</button>
              <button onClick={() => navigate('/register')}>회원가입</button>
            </Navbar.Text> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
