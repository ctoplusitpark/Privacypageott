import React from "react";
import Navbar from './Components/Navbar';
import { Routes, Route, Router } from "react-router-dom";
import Home from './Pages/Home';
import Policies from './Pages/Policies';
import Refund from './Pages/Refund';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Child from './Pages/Child';
import Footer from './Components/Footer/Footer.js'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Child" element={<Child />} />
      </Routes>
    </Router>
  );

};

export default App;