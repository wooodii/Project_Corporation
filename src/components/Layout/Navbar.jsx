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
  const sessionKey = `firebase:authUser:${apiKeyNum}:[DEFAULT]`
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;
  console.log(sessionKey); 
  console.log(isSession); 

  const [loginName, setLoginName] = useState();

  // fb login
  const loginCheck = () => {
    return function (dispatch) {
      auth.onAuthStateChanged((user) => {
        if(user) {
          dispatch(loginState.userInfo())
        }else {
          dispatch(logoutState());
        }
      })
    }
  }

  useEffect(() => {
    if(sessionKey && isSession) {
        console.log(JSON.parse(sessionStorage.getItem(sessionKey)).uid);
        setLoginName(dispatch(loginState.userInfo));
        loginCheck();
      }else{
        setLoginName("회원정보없음");
        }
      }, [setLoginName]);

  return (
    <>
      {
        currentUser ? (
          <Navbar>
          <Container>
            <Nav>
              <Nav.Link href="/product">제품보기</Nav.Link> 
              <Nav.Link href="/recommendgift">선물추천</Nav.Link>
              <Nav.Link href="/introstore">매장보기</Nav.Link>
            </Nav>
  
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <div>
                {currentUser ? (<span>{currentUser.email}</span>) : <span>회원정보없음</span>}
                </div>
                <button onClick={() => {navigate('/login'); dispatch(logoutState()) }}>로그아웃 </button>
                <button onClick={() => navigate('/register')}>정보수정</button>
                <button onClick={() => navigate('/client')}>고객센터</button>
                <CartBtn onClick={props.onshowCart}/>
              </Navbar.Text> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
        ) : (
          <Navbar>
          <Container>
            <Nav>
              <Nav.Link href="/product">제품보기</Nav.Link> 
              <Nav.Link href="/recommendgift">선물추천</Nav.Link>
              <Nav.Link href="/introstore">매장보기</Nav.Link>
            </Nav>
  
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {currentUser ? (<span>{currentUser.email}</span>) : <span>회원정보없음</span>}
                 <br/>
                <button onClick={() => navigate('/login')}>로그인</button> 
                <button onClick={() => navigate('/register')}>회원가입</button>
                <button onClick={() => navigate('/client')}>고객센터</button>
                <CartBtn onClick={props.onshowCart}/>
              </Navbar.Text> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
        )
      }

    </>
  );
};

export default NavBar;
