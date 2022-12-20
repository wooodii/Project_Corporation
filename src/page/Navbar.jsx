import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiKeyNum, auth } from "../database/firebase";
import { loginState, logoutState } from "../Modules/loginSlice";

const NavBar = (props) => {
  const currentUser = useSelector((state) => (state.currentUser));
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
          // 세션에 정보가 있는지 체크한 후, 세션에 정보가 있다면 리덕스에서 로그인 체크
          // 로그인 체크 시, loginSlice와 같은 양식으로 넣는다??
          //   setDoc(doc(db, "user", user.uid), {
          //     user : user.uid,
          //     name : user.name,
          //     email : user.email,
          //     password : user.password
          // })
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
              {currentUser ? (<p>{currentUser}</p>) : <p>회원정보없음</p>}
               <br/>
              {(sessionKey == true) ? <button onClick={() => navigate('/login')}>로그아웃</button> : <button onClick={() => navigate('/login')}>로그인</button> }
              <button onClick={() => navigate('/register')}>회원가입</button>
            </Navbar.Text> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
