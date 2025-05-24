import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

import About from "../Routes/About.jsx"
import Home from "../Routes/Home.jsx"
export default function RoutingNav() {
  const id = "routingnav";

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BrowserRouter >
      <div id="browser-router-nav">
        <Link to="/"><button onClick={()=>{}}>HOME</button></Link>
        <Link to="/about"><button onClick={()=>{}}>About</button></Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
      </Routes>
 
    </BrowserRouter>
    
  );
}