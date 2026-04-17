import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import BookDetail from './components/BookDetail';
import Footer from  './components/Footer';          // ← Correct path (no "components/")

const App = () => {
  return (
    <Router>
      <div style={{ 
        backgroundColor: '#0f172a', 
        color: '#e2e8f0', 
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;