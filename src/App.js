import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { Counter } from './Modules/counter/Counter';
import NavBar from './page/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/Login';
import Register from './page/Register';

function App() { 
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path ='/counter' element={<Counter/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
