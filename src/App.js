import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { Counter } from './Modules/counter/Counter';
import NavBar from './page/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Modules/login/Login';
import MyPage from './Modules/login/MyPage';
import Register from './Modules/login/Register';

function App() { 
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
