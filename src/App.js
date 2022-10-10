import {BrowserRouter , Routes, Route} from 'react-router-dom'

//Pages

import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import User from './components/User';
import AddBook from './components/AddBook';


import "./App.css";

function App() {
  return (
   <>
   <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Routes>

          <Route exact path='/' element={<Home/>}/>  
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/addbook' element={<AddBook/>}/>
         
        </Routes>
      </BrowserRouter> 
    </div>
    </>
  );
}

export default App;
