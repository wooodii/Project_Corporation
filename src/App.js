import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './page/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/login/Login';
import MyPage from './page/login/MyPage';
import Register from './page/login/Registers';
import Cart from './page/cart/Cart';
import Guest from './page/Board/Guest';
import Board from './page/Board/Board';
import BoardPage from './page/Board/BoardPage';
import BoardWriteForm from './page/Board/BoardWriteForm';

function App() { 
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        
        <Route path='/cart' element={<Cart/>}></Route>
        
        <Route path='/board' element={<Board/>}></Route>
        <Route path='/boardpage' element={<BoardPage/>}></Route>
        <Route path='/boardwriteform' element={<BoardWriteForm/>}></Route>
        <Route path='/guest' element={<Guest/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
