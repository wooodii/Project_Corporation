import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiKeyNum } from "../database/firebase";
import { loginState, logoutState } from "../Modules/loginSlice";

const NavBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 세션키로 가져오는 값이 있는지 확인해 회원이름변경 > 수정
  const sessionKey = `firebase:authUser:${apiKeyNum}:[DEFAULT]`
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;
  
  const [loginName, setLoginName] = useState();

  useEffect(() => {
    if(sessionKey && isSession) {
        console.log(JSON.parse(sessionStorage.getItem(sessionKey)).uid);
        setLoginName(dispatch(loginState.UserInfo));
      }else{
        setLoginName("회원정보없음");
      }
      }, [setLoginName]);

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
              {loginName}
               <br/>
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
