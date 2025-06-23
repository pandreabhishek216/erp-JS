import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Page1 from "../component/page1"
import Page2 from "../component/page2"
import Page3 from "../component/page3"
import Home from "../component/Home"
import '../App.css'
export default function Exp51() {
return (
    <div className="App1">
        <Router>
            <nav className="nav-container">
  <ul>
    <li><a href="/Home">Home</a></li>
    <li><a href="/Page1">Page 1</a></li>
    <li><a href="/Page2">Page 2</a></li>
    <li><a href="/Page3">Page 3</a></li>
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