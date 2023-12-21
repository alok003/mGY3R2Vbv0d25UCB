import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BMIcalc from './components/BMIcalc';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BMIcalc" element={<BMIcalc />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

