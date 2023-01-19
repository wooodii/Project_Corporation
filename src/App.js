import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/login/Login';
import MyPage from './page/login/MyPage';
import Register from './page/login/Registers';
import Cart from './page/cart/Cart';
import Guest from './page/Board/Guest';
import Board from './page/Board/Board';
import BoardPage from './page/Board/BoardPage';
import BoardWriteForm from './page/Board/BoardWriteForm';
import NavBar from './components/Layout/Navbar';
import ProductPage from './components/Product/ProductPage';
import ClientPage from './page/Board/ClientPage';
import { useState } from 'react';
import CartComp from './components/Cart/CartComp';
import ThreeApp from './shaders/ThreeApp';
import Three02 from './shaders/Three02';
import Three03 from './shaders/three03';
import Three04 from './shaders/Three04';
import Three05 from './shaders/Three05';
import ContactPage from './page/Contact/ContactPage';

function App() { 
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = ()   => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <div className="App">
        {/**cart의 상위 페이지 */}
      <NavBar onshowCart={showCartHandler}/> 
        
      <Routes>
        <Route path='/three' element={<ThreeApp/>}></Route>
        <Route path='/02' element={<Three05/>}></Route>

        {/** cart컴포넌트를 조건부로 렌더링 */}
        {cartIsShown && <CartComp onClose={hideCartHandler}/>} 
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/guest' element={<Guest/> }></Route>

        <Route path='/client' element={<ClientPage/>}></Route>
        <Route path='/board' element={<Board/>}></Route>
        <Route path='/board/:id' element={<BoardPage/>}></Route>
        <Route path='/board/writeform' element={<BoardWriteForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
