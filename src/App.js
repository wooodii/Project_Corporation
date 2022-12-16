import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './page/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/login/Login';
import MyPage from './page/login/MyPage';
import Register from './page/login/Registers';

function App() { 
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
