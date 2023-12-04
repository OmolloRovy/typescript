import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { Home} from "./pages/Home"
import { Contact} from "./pages/Contact"
import { Login} from "./pages/Login"

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Router path="/" element="{<Home/>}"/>
          <Router path="/login" element="{<Login/>}"/>
          <Router path="/contact" element="{<Contact/>}"/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
