import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Branches from './pages/Branches.jsx';
import Products from './pages/Products.jsx';
import Provider from './pages/Provider.jsx';

function App() {
 
  return (
    <Router>
    <div className="app-container">
      {/* Navbar a la izquierda */}
      <Navbar />

      {/* Contenedor para el contenido principal */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/products" element={<Products />} />
          
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
