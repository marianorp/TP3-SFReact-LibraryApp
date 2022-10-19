import {BrowserRouter , Routes, Route} from 'react-router-dom'
import "./App.css";

//Pages
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import User from './components/User';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import Landing from './components/Landing';
import Home from "./components/Home"
import Detaill from "./components/Detaill"

function App() {
  return (
   <>
   <div className="App">
      <BrowserRouter> 
        <Routes>
          
          <Route exact path='/' element={<Landing/>}/>  
          <Route exact path='/home' element={<Home />}/>  
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/home/:id' element={<Detaill/>}/>
          <Route exact path='/addbook' element={<AddBook/>}/>
          
        </Routes>
      </BrowserRouter> 
    </div>
    </>
  )
}

export default App;

