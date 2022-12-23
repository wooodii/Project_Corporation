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
        <Route path='/board/:id' element={<BoardPage/>}></Route>
        <Route path='/board/writeform' element={<BoardWriteForm/>}></Route>
        
        <Route path='/guest' element={<Guest/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
