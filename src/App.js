import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
   <>
      <BrowserRouter> 
        <Routes>

          <Route exact path='/' element={<Home/>}/>  
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          
          <Route exact path='/navbar' element={<Navbar/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
