import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, apiKeyNum } from "../../database/firebase";
import { loginState, logoutState } from "../../Modules/loginSlice";
import CartBtn from "../Cart/CartBtn";

const NavBar = (props) => {
  const currentUser = useSelector((state) => (state.login.currentUser));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 세션키로 가져오는 값이 있는지 확인해 회원이름변경 > 수정
  const sessionKey = `firebase:authUser:${apiKeyNum}:[login]`
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;
  console.log(isSession); 

  const [loginName, setLoginName] = useState();

  // fb login
  const loginCheck = () => {
    return function (dispatch) {
      auth.onAuthStateChanged((user) => {
        if(user) {
          dispatch(loginState({
            user : user.uid,
            name : user.displayName,
            email : user.email,
            password : user.password
          }))
        }else {
          dispatch(logoutState());
        }
      })
    }
  }

  useEffect(() => {
    if(sessionKey && isSession) {
        console.log(JSON.parse(sessionStorage.getItem(sessionKey)).uid);
        setLoginName(dispatch(loginState.UserInfo));
        loginCheck();
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
              {currentUser ? (<span>{currentUser.email}</span>) : <span>회원정보없음</span>}
               <br/>
              {(sessionKey === true) ? <button onClick={() => navigate('/login')}>로그아웃</button> : <button onClick={() => navigate('/login')}>로그인</button> }
              <button onClick={() => navigate('/register')}>회원가입</button>
              <CartBtn />
            </Navbar.Text> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
