import { useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [loginModal, setLoginModal] = useState();
  
  function LoginModal(props) {
    return 

  }

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
              <button onClick={() => {setLoginModal(true)}}>로그인</button>
              <button onClick={() => {setRegisterModal(true)}}>회원가입</button>
            </Navbar.Text> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
