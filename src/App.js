
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Policies from './Pages/Policies';
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermAndCondition from './Pages/TermAndCondition';
import ChildProtection from './Pages/ChildProtection';



function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/policies" element={<Policies />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-condition" element={<TermAndCondition />} />
      <Route path="/child-protection" element={<ChildProtection />} />
    </Routes>
  </Router>
  );
}

export default App;
