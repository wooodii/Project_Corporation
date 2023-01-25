import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, apiKeyNum } from "../../database/firebase";
import { loginState, logoutState } from "../../Modules/loginSlice";
// import CartBtn from "../Cart/CartBtn";

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
    <div style={{margin : "1em 2em"}}>
      {
        currentUser ? (
          <Navbar>
            <Nav style={{marginLeft : "2em "}}>
              <Nav.Link href="/"> ABOUT</Nav.Link> 
              <Nav.Link href="/recommendgift"> SERVICE </Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav> 
  
            <Navbar.Collapse className="justify-content-end">
              <Nav style={{display : "flex"}}>
                <Nav.Link style={{marginRight : "2em"}} href='/login' onClick={() => (dispatch(logoutState()))}>
                    로그아웃
                  </Nav.Link> 
                <Nav.Link style={{marginRight : "2em"}} href='/register'>정보수정</Nav.Link>
                <Nav.Link style={{marginRight : "2em"}} href='/'>고객센터</Nav.Link>
                {/* <CartBtn onClick={props.onshowCart}/> */}
              </Nav> 
            </Navbar.Collapse>

        </Navbar>
        ) : (
          <Navbar>
            <Nav style={{marginLeft : "1em"}}>
              <Nav.Link href="/">ABOUT</Nav.Link> 
              <Nav.Link href="/recommendgift">SERVICE</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
              <Nav style={{display : "flex"}}>

                <Nav.Link style={{marginRight : "1em"}} href='/login'>
                {currentUser ? 
                  (<span>{currentUser.email}</span>) : 
                  <span>로그인</span>}
                  </Nav.Link> 
                <Nav.Link style={{marginRight : "1em"}} href='/register'>회원가입</Nav.Link>
                <Nav.Link style={{marginRight : "1em"}} href='/'>고객센터</Nav.Link>
                {/* <CartBtn onClick={props.onshowCart}/> 원래 고객센터는 client 임*/}
              </Nav> 
            </Navbar.Collapse>
        </Navbar>
        )
      }

    </div>
  );
};

export default NavBar;
