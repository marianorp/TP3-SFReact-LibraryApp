import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import User from "./components/User";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Detaill from "./components/Detaill";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/home/:id" element={<Detaill />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
