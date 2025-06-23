import React from "react"
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom"
import Page1 from "../component/page1"
import Page2 from "../component/page2"
import Page3 from "../component/page3"
import Home from "../component/Home"
import '../App.css'
import logo from '../images/im5.jpg';
export default function Exp5() {
  return (
    <div className="App1">
      <Router>
        <nav className="nav-container">
          <img src={logo} alt="Logo" className="nav-logo" style={{ height: '40px', marginRight: '16px' }} />
          <ul>
            <li><NavLink to="/Home" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
            <li><NavLink to="/Page1" className={({ isActive }) => isActive ? "active" : undefined}>Page1</NavLink></li>
            <li><NavLink to="/Page2" className={({ isActive }) => isActive ? "active" : undefined}>Page2</NavLink></li>
            <li><NavLink to="/Page3" className={({ isActive }) => isActive ? "active" : undefined}>Page3</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}