import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import Deals from './pages/Deals.jsx';

function App() {
  return (
    <Router>
      <div className="bg-[#0f172a] text-white min-h-screen font-sans overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;