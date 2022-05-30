import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Landing from './pages/landing/Landing';
import Navbar from './components/navbar/Navbar';

function App() {  
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
