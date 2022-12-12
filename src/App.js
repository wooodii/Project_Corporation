import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { Counter } from './Modules/counter/Counter';
import NavBar from './page/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/Login';

function App() { 
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path ='/counter' element={<Counter/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
